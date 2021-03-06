import singleSpaAngular from 'single-spa-angular2';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import mainModule from './main-module.ts';
import { Router } from '@angular/router';

const ngLifecycles = singleSpaAngular({
  domElementGetter,
  mainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<app2 />`,
  Router,
})

export function bootstrap(props) {
  return ngLifecycles.bootstrap(props);
}

export function mount(props) {
  var el = domElementGetter();
  el.style.display = 'block';
  return ngLifecycles.mount(props).then(val => {});
}

export function unmount(props) {
  var el = document.getElementById('app2');
  el.style.display = 'none';
  return ngLifecycles.unmount(props);
}

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app2');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app2';
    document.querySelector('main').appendChild(el);
  } else {
    el.style.display = 'block';
  }

  return el;
}