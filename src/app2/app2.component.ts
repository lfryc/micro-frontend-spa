import {Component} from '@angular/core';

@Component({
  selector: 'app2',
  styles: [`
    :host {
        display: block;
        width: 100%;
        height: 100%;
        background-color: indianred;
    }
    :host p:first-child {
        margin-top: 0;
        padding-top: 10px;
    }
  `],
  template: `
    <p>Angular micro-frontend</p>

    <p>
        <my-button [label]="buttonLabel" (onClick)="buttonClicked()"></my-button>
    </p>
    
    <p>
      <a [routerLink]="['/subroute1']" routerLinkActive="active">Angular route 1</a> |
      <a [routerLink]="['/subroute2']" routerLinkActive="active">Angular route 2</a>
    </p>

    <p>
        <router-outlet></router-outlet>
    </p>
  `,
})
export class App2 {

  buttonLabel = `I'm web component, click me`;

  buttonClicked() {
    this.buttonLabel = 'Hey, I was clicked, thank you!';
    setTimeout(() => {
      alert('Button clicked from Angular app');
    });
  }
}
