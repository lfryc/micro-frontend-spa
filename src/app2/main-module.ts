import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App2} from './app2.component';
import {Subroute1} from './subroute1.component';
import {Subroute2} from './subroute2.component';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

const appRoutes: Routes = [
  {
    path: 'subroute1',
    component: Subroute1
  },
  {
    path: 'subroute2',
    component: Subroute2
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {}),
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/app2/'}],
  declarations: [
    App2,
    Subroute1,
    Subroute2,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [App2]
})
export default class MainModule {
}
