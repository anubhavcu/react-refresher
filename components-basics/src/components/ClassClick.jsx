// eg for adding event handler in class component
// also see EventBind.jsx and Counter.jsx
import React, { Component } from 'react';

class ClassClick extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleClick() {
    console.log('button clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ClassClick;
