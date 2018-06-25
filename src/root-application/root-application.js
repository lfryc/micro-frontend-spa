import 'zone.js';
import 'document-register-element';
import * as singleSpa from 'single-spa';
import bootstrapCustomElements from '../shared/custom-elements-bootstrap.ts';

singleSpa.registerApplication('app-1', () =>
  import ('../app1/app1.js'), pathPrefix('/app1'));
singleSpa.registerApplication('app-2', () =>
  import ('../app2/app2.js'), pathPrefix('/app2'));
singleSpa.registerApplication('app-3', () =>
  import ('../app3/app3.js'), pathPrefix('/app3'));

bootstrapCustomElements();

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}

singleSpaNavigate('/app2');