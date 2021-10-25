//*  HOC - basically a function which takes in a component and adds additional functionalities to it by passing it as a prop.

import React, { Component } from 'react';

const withCounter = (WrappedComponent, incrementNumber = 1) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      console.log(this.props.name);
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} // to access any individual props passed to a component (see note below)
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;

/**
 * if we pass a prop to a particular component wrapped in HOC, (like in App.js we are passing to ClickCounter), that prop is now passed to HOC. HOC adds a new state and a increment method on every component, so to make sure that any props passed to particular component, we must destructure the rest of props when rendering Wrapped component in HOC.
 * if we don't do it , we won't be able to access the props inside our components, as they are now wrapped in HOC, so they are passed to HOC, and to pass it furthur down to particular component we do {...this.props}
 *
 * We can also pass additional params to HOC if we want. like for increment counter with 5, we have passed an additional prop to HOC, which in turn increments the counter5 component with 5 and rest with 1.
 *
 */
