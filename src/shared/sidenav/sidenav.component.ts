import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-sidenav',
  template: `
    <h3><a onclick="singleSpaNavigate('/app2')">Angular</a></h3>
    <h3><a onclick="singleSpaNavigate('/app3')">Vue</a></h3>
    <h3><a onclick="singleSpaNavigate('/app1')">React</a></h3>
  `,
  styles: [`
        :host {
          grid-area: sidebar;
          background: #1c1733;
          color: #8f93d9;
        }

        a, a:active, a:visited {
          display: block;
          color: #8f93d9;
          text-decoration: none;
        }

        a:hover {
          color: white;
        }
      `],
  encapsulation: ViewEncapsulation.Native
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
