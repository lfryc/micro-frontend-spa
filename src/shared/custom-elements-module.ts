import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonComponent} from './button/button.component';
import {SharedModule} from './shared.module';
import {SidenavComponent} from './sidenav/sidenav.component';
import {TopbarComponent} from './topbar/topbar.component';


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
  ],
  declarations: [
    SidenavComponent,
    TopbarComponent,
  ],
  entryComponents: [
    ButtonComponent,
    SidenavComponent,
    TopbarComponent,
  ]
})
export class CustomElementsModule {

  constructor(injector: Injector) {
    customElements.define('my-button', createCustomElement(ButtonComponent, {injector}) as any);
    customElements.define('my-topbar', createCustomElement(TopbarComponent, {injector}) as any);
    customElements.define('my-sidenav', createCustomElement(SidenavComponent, {injector}) as any);
  }

  ngDoBootstrap() {
  }
}
