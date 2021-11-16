import React, { Component } from 'react';
import { UserConsumer } from './userContext';

class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(name) => {
          return <h3>{name}</h3>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentC;
