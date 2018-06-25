import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-topbar',
  template: `
    <h1>Micro-Frontends with Angular Elements</h1>
  `,
  styles: [`
      :host {
        grid-area: topbar;
        background: #ffd500;
      }
    `],
  encapsulation: ViewEncapsulation.Native
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
