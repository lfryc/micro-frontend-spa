import React from 'react';

export default class Root extends React.Component {

  buttonLabel;

  constructor() {
    super();
    this.buttonLabel = 'Click me';
  }

  buttonClicked() {
    this.buttonLabel = 'Hey, I got clicked, wohoo!';
    setTimeout(() => {
      alert('Button clicked from React');
    });
  }


  render() {
    return (
      <div style={{marginTop: '100px'}}>
        This was rendered by app 1, which is written in React.
        <my-button label={this.buttonLabel} onClick={this.buttonClicked.bind(this)}></my-button>
      </div>
    );
  }
}
