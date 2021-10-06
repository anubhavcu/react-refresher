import React, { Component } from 'react';

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: 'hello ',
    };

    //     this.handleClick = this.handleClick.bind(this);
  }

  //   handleClick() {
  //     this.setState({
  //       message: 'goodbye',
  //     });
  //     console.log(this); // undefined if onClick={this.handleClick} is used
  //   }
  //
  handleClick = () => {
    this.setState({
      message: 'goodbye',
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.handleClick()}>Click</button> */}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default EventBind;

/**
 * * this keyword is undefined in eventHandler , and thus using it directly will throw an error
 * to avoid this we can have different method :
 *  1st approach - bind this keyword
 * <button onClick={this.handleClick.bind(this)}>Click</button>
 *
 * 2nd approach - using arrow function while calling handler in render method
 * 	<button onClick={() => this.handleClick()}>Click</button>
 * in this approach we are calling the eventHandler function and returning its value
 *
 *
 * 3rd approach - binding the event handler in the class constructor
 * * since binding happens once in the constructor, this is better compared to binding in the render method.
 * 	constructor() {
 * 		super()
 * 		state = {
 *
 * 			}
 *
 * 		this.handleClick = this.handleClick.bind(this)
 * 	}
 * 	and in button,
 * 	<button onClick={this.handleClick}>click</button>
 * 
 * 
 * 4th approach - change the handler function using arrow functions 
 *
  //   handleClick = () => {
  //     this.setState({
  //       message: 'goodbye',
  //     });
  //   };
 */
