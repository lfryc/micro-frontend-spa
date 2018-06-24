import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CustomElementsModule} from './custom-elements-module.ts';

export default function bootstrapCustomElements() {
  platformBrowserDynamic().bootstrapModule(CustomElementsModule);
}