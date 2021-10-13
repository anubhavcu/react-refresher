import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
  render() {
    console.log('pure comp - render');
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;

/**
 * Pure component implements shouldComponentUpdate with shallow props and state comparison
 *
 *
 * shallow compare performs a shallow equality check on current props/state and next props/state objects. It does this by iterating on  the keys of the objects being compared and returning true when the values of a key in each object are not strictly equal
 *
 * for primitive - a (SC) b will return true if a and b will have same value and type
 * for complex (obj and arrays) - a (SC) b will return true if a and b reference the exact same object
 *
 * In above eg. we are dealing with primitive types and props comparison, we are sending a prop of type string with value of 'Anubhav'
 */
