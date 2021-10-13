import React, { Component, PureComponent } from 'react';
import NormalComp from './NormalComp';
import PureComp from './PureComp';
import PureCompComplex from './PureCompComplex';

class ParentComp extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Anubhav',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Anubhav',
      });
    }, 2000);
  }
  render() {
    console.log('***************** parent comp - render *******************');
    return (
      <div>
        Parent Component
        <NormalComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <PureCompComplex />
      </div>
    );
  }
}

export default ParentComp;
