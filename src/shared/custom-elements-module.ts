import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonComponent} from './button/button.component';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    ButtonComponent,
  ],
  entryComponents: [
    ButtonComponent,
  ]
})
export class CustomElementsModule {

  constructor(injector: Injector) {
    customElements.define('my-button', createCustomElement(ButtonComponent, {injector}) as any);
  }

  ngDoBootstrap() {
  }
}
