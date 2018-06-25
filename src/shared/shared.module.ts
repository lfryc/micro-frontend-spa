import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyButtonComponent} from './my-button.component.ts';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MyButtonComponent,
  ],
  exports: [
    MyButtonComponent,
  ]
})
export class SharedModule {}