import React from 'react';

export default class Root extends React.Component {

  buttonLabel;

  constructor() {
    super();
    this.buttonLabel = `I'm a web component, click me`;
  }

  buttonClicked() {
    this.buttonLabel = 'Hey, I got clicked, wohoo!';
    setTimeout(() => {
      alert('Button clicked from React');
    });
  }


  render() {
    return (
      <div style={{width: '100%', height: '100%', backgroundColor: 'deepskyblue'}}>
        <p style={{marginTop: 0, paddingTop: 10}}>React micro-frontend.</p>
        <p><my-button label={this.buttonLabel} onClick={this.buttonClicked.bind(this)}></my-button></p>
      </div>
    );
  }
}
