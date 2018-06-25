import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#app3',
        template: `
            <div id="app3" style="width: 100%; height: 100%; background-color: lightgreen">
                <p style="margin-top: 0; padding-top: 10px">Vue.js micro-frontend</p>
                <p><my-button v-bind:label="buttonLabel" v-on:onClick="buttonClicked"></my-button></p>
            </div>
        `,
        data: {
            buttonLabel: `I'm a web component, click me`
        },
        methods: {
            buttonClicked: function() {
                this.buttonLabel = 'Hey, it seems that someone clicked me';
                setTimeout(function() {
                    alert('Button clicked from Vue');
                })
            }
        }
    }
});

export const bootstrap = [
    function() {
        domElementGetter();
        return vueLifecycles.bootstrap();
    }
];

export const mount = [
    vueLifecycles.mount,
];

export const unmount = [
    function() {
        var el = domElementGetter();
        el.style.display = 'none';
        return vueLifecycles.unmount();
    }
];

function domElementGetter() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('app3');
    if (!el) {
        el = document.createElement('div');
        el.id = 'app3';
        document.querySelector('main').appendChild(el);
    } else {
        el.style.display = 'block';
    }

    return el;
}