// storing data in class variable vs in state
import React, { Component } from 'react';

export default class ClassVariable extends Component {
  counter = 100;
  constructor(props) {
    super(props);

    this.state = {};
    this.count = 0;
  }

  handleIncrement = () => {
    this.count += 1;
    console.log(this.count);
    this.forceUpdate();
  };
  handleIncrementOfCounter = () => {
    this.counter += 1;
    this.forceUpdate();
  };

  render() {
    console.log(this.counter);
    return (
      <div>
        <h1>{this.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <div>
          <h1>{this.counter}</h1>
          <button onClick={this.handleIncrementOfCounter}>Increment</button>
        </div>
      </div>
    );
  }
}

/**
 * We can store data in class variable and it will work fine. Lets say we have a class variable count and a button with handler to increment the count. The handler function will work fine and increment the value of count, but we won't see any changes in the UI because React components only re-render when there is change in state or props.
 * So if we plan to use some class variable,( in above case), we need to manually handle the re-render of UI. For that we can use this.forceUpdate(), although it is not recommended.
 */
