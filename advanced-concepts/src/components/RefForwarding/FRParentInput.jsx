// eg for ref forwarding
// we have a ref in parent component and we will pass it to child component
import React, { Component } from 'react';
import FRInput from './FRInput';

export class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleFocus = () => {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  };
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.handleFocus}>Focus </button>
      </div>
    );
  }
}

export default FRParentInput;
