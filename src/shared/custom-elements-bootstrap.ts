import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CustomElementsModule} from './custom-elements-module';

export default function bootstrapCustomElements() {
  platformBrowserDynamic().bootstrapModule(CustomElementsModule);
}