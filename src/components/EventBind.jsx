import React, { Component } from 'react';

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: 'hello ',
    };
  }

  //   handleClick() {
  // 	  this.setState({
  // 		  message : 'goodbye'
  // 	  })
  //   }
  handleClick = () => {
    this.setState({
      message: 'goodbye',
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default EventBind;
