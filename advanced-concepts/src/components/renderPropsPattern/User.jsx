// passing props whose value is a function
import React, { Component } from 'react';

export class User extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name(true)}</h3>
      </div>
    );
  }
}

export default User;
