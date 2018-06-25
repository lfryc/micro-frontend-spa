import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'my-button',
  template: `
    <button (click)="onClick.emit($event)">{{ label }}</button>
  `
})
export class ButtonComponent {

  @Input() label;

  @Output() onClick = new EventEmitter();
}