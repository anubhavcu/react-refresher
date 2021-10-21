import React, { Component } from 'react';

export class Hero extends Component {
  render() {
    if (this.props.hero === 'Joker') {
      throw new Error('Not a Hero!');
    }
    return <div>{this.props.hero}</div>;
  }
}

export default Hero;
