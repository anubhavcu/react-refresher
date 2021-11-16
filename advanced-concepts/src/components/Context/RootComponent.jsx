import React, { Component } from 'react';
import ComponentA from './ComponentA';
import { UserProvider } from './userContext';

export class RootComponent extends Component {
  render() {
    return (
      <div>
        <UserProvider value='Hello Anubhav'>
          <ComponentA />
        </UserProvider>
      </div>
    );
  }
}

export default RootComponent;
