import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'john',
      language: 'Javascript',
    };

    console.log("B's initial state - ", this.state.name);
    console.log('Lifecycle B - constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle B - static getDerivedStateFromProps');
    //     return {
    //       name: 'John Doe',
    //     };

    // * conditional changing of state depending on prop recieved
    if (props.number % 2 === 0) {
      return {
        name: 'Even',
      };
    } else {
      return {
        name: 'Odd',
      };
    }
    //     return null;
  }

  componentDidMount() {
    console.log('Lifecycle B - componentDidMount');

    // interacting with DOM (using the state which is changed by getDerivedStateFromProps)
    const heading = document.getElementById('heading');
    heading.style.color = this.state.name === 'Even' ? 'blue' : 'red';
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Lifecycle B - shouldComponentUpdate');

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecycle B - getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log('Lifecycle B - componentDidUpdate');
  }
  render() {
    console.log('Lifecycle B - render');
    return (
      <div>
        <h2 id='heading'>Lifecycle B</h2>
        <span>
          Name - {this.state.name} | Language - {this.state.language}
        </span>
      </div>
    );
  }
}

export default LifecycleB;

// 1. if this component won't have any state for eg, then the static getDerivedStateFromProps method will throw us a warning , that initial state is undefined
// - this not having any state and calling getDerivedState from props throws a warning and is not recommended . We should instead define the state if we are making use of this method
// * this is to ensure that 'getDerivedStateFromProps' arguments have a consistent shape
