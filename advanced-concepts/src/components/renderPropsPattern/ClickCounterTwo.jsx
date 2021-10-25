import React, { Component } from 'react';

export class ClickCounterTwo extends Component {
  render() {
    const { count, handleIncrement } = this.props;
    return (
      <div>
        <h3>Click counter 2 </h3>
        <button onClick={handleIncrement}>Clicked {count} times </button>
      </div>
    );
  }
}

export default ClickCounterTwo;
