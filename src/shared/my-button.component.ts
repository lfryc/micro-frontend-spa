import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'my-button',
  template: `
    <button (click)="click.emit($event)" [value]="label" />
  `
})
export class MyButtonComponent {

  @Input() label;

  @Output() click = new EventEmitter();
}