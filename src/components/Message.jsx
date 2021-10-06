// eg to show how to change state using setState method
// see Counter.jsx for do's and dont's while using setState in class component
// also see EventBind.jsx to how to assign eventHandlers
import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome Visitor',
    };
  }
  handleClick() {
    this.setState({ message: 'Thanks for visiting...' });
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.handleClick()}>Change text </button>
      </div>
    );
  }
}

export default Message;
