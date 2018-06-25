import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#app3',
        template: `
            <div id="app3" style="margin-top: 100px">
                This was rendered by app 3, which is written in Vue.
                <my-button v-bind:label="buttonLabel" v-on:onClick="buttonClicked"></my-button>
            </div>
        `,
        data: {
            buttonLabel: 'Click me'
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
        createDomElement();
        return vueLifecycles.bootstrap();
    }
];

export const mount = [
    vueLifecycles.mount,
];

export const unmount = [
    vueLifecycles.unmount,
];

function createDomElement() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('app3');
    if (!el) {
        el = document.createElement('div');
        el.id = 'app3';
        document.body.appendChild(el);
    }

    return el;
}