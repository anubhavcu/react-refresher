// eg to show that event bubbling eg.
// even though a portal can be anywhere in the DOM tree, it behaves like a normal react child in every other way, including event bubbling
//* so an event fired inside a portal will propogate to the ancestors in the containing react tree, even if those elements are not ancestors in the DOM tree
import React, { Component } from 'react';
import Child from './Child';

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    // this is fired when the div is clicked or the button in child is clicked
    // updating the parent's state even though the button is not direct descendant in the DOM tree
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      // event handler is on the div but and it will be triggered in 2 ways :
      // either by clicking on div, or
      // by clicking on child component's button, event will bubble up to this div and the handler method runs
      <div onClick={this.handleClick}>
        <h1 style={{ color: 'blueviolet' }}>Parent component </h1>
        <h2 style={{ color: 'red', background: 'lightgreen' }}>
          Number of Click : {this.state.count}
        </h2>
        <Child />
      </div>
    );
  }
}

export default Parent;
