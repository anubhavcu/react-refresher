import React, { Component } from 'react';
import ComponentC from './ComponentC';
import UserContext from './userContext';

export class ComponentB extends Component {
  render() {
    return (
      <div>
        <h3>Component B: {this.context}</h3>
        <ComponentC />
      </div>
    );
  }
}

ComponentB.contextType = UserContext;

export default ComponentB;
