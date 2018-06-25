import {Component} from '@angular/core';

@Component({
  selector: 'app2',
  template: `
    <div style="margin-top: 100px;">
      This was rendered by App2 which is written in Angular
    </div>
    <a [routerLink]="['/subroute1']" routerLinkActive="active">Angular route 1</a>
    <a [routerLink]="['/subroute2']" routerLinkActive="active">Angular route 2</a>

    <router-outlet></router-outlet>

    <my-button [label]="buttonLabel" (onClick)="buttonClicked()"></my-button>
  `,
})
export class App2 {

  buttonLabel = 'Click me';

  buttonClicked() {
    this.buttonLabel = 'Hey, I was clicked, thank you!';
    setTimeout(() => {
      alert('Button clicked from Angular app');
    });
  }
}
