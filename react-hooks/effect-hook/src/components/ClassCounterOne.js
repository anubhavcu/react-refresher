import React, { Component } from 'react';

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: '',
    };
  }
  componentDidMount() {
    document.title = this.state.count;
  }
  componentDidUpdate(prevProps, prevState) {
    // conditionally rendering updates
    if (prevState.count !== this.state.count) {
      console.log('updating document title');
      document.title = this.state.count;
    }
  }
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button
          onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}
        >
          Counter : {this.state.count}{' '}
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
