import {Component, Inject, Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'test-component',
  template: `XYZ`
})
class TestComponent {
}

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    TestComponent,
  ],
  entryComponents: [
    TestComponent,
  ]
})
export class CustomElementsModule {

  constructor(injector: Injector) {
    customElements.define('test-component', createCustomElement(TestComponent, {injector}) as any);
  }

  ngDoBootstrap() {
  }
}
