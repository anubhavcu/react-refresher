import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong !</h2>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

/**
 * 1. ErrorBoundaries are react  components that catch Javascript error in their child component tree, log those errors, and display a fall-back UI
 ** 2. a class component will become an ErrorBoundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods.
 *
 * 2.1 static getDerivedStateFromError used to render a fallback UI after an error is thrown and componentDidCatch method is used to log error information
 *
 * 3. allows to show a fallback UI in production mode if a component throws some error , we will see the error in development mode because reacts intends to show the error as much as possible, also the componentDidCatch's error and info are by default logged by react as well.
 *
 *
 * 4. The placement of ErrorBoundary also matters as it controls if the entire app should have a fallback UI or just the component causing the problem
 *
 * * 5. ErrorBoundaries catch errors during rendering in lifecycle methods and in constructors of the whole tree below them, however they do not catch errors inside event handlers ,
 * if we have a onClick handler and catch a error, we just have to use plain try...catch method
 */
