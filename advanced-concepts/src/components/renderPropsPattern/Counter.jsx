import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.handleIncrement)}</div>
    );
  }
}

export default Counter;

// Note : we can rename prop "render" whatever we want

// basically we are defining all common functionalities in a single component which just renders a function. This function takes in count and incrementCount as arguments. Now in we will render this component passing this function prop and in turn this function will call the ClickCounter and HoverCounter components passing the arguments of the function passed to them as a prop
