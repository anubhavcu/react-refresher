import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'text 1',
    };
    console.log('Lifecycle A - constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle A - static getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Lifecycle A - componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('Lifecycle A - shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecycle A - getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log('Lifecycle A - componentDidUpdate');
  }

  handleStateChange = () => {
    this.setState((prevState) => ({
      text: prevState.text === 'text 1' ? 'text 2' : 'text 1',
    }));
  };
  render() {
    console.log('Lifecycle A - render');
    return (
      <div>
        <h2>Lifecycle A</h2>
        <button onClick={this.handleStateChange}>Toggle state</button>
        <div>
          <span>{this.state.text}</span>
        </div>
        <LifecycleB number={10} />
      </div>
    );
  }
}

export default LifecycleA;
