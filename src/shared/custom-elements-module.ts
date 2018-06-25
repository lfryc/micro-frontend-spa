import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {MyButtonComponent} from './my-button.component';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    MyButtonComponent,
  ],
  entryComponents: [
    MyButtonComponent,
  ]
})
export class CustomElementsModule {

  constructor(injector: Injector) {
    customElements.define('my-button', createCustomElement(MyButtonComponent, {injector}) as any);
  }

  ngDoBootstrap() {
  }
}
