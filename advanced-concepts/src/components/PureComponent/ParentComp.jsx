import React, { Component, PureComponent } from 'react';
import MemoComponent from './MemoComponent';
import NormalComp from './NormalComp';
import PureComp from './PureComp';
import PureCompComplex from './PureCompComplex';

class ParentComp extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Anubhav',
      // name: '10',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Anubhav',
        // name: this.state.name === '10' ? 10 : '10', // in this case pure component(or memo component as well) will also re-render as type is changed (for primitive values, both value and type should be same, here our state is primitive )
      });
    }, 2000);
  }
  render() {
    console.log('***************** parent comp - render *******************');
    return (
      <div>
        Parent Component
        {/* <NormalComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
        {/* <PureCompComplex /> */}
        <MemoComponent name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
