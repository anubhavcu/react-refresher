// eg for attaching a ref on class component (rather than on DOM element )
import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  //   in this eg we want to focus on input element by a function which will be called by the parent element
  focusInput = () => {
    this.inputRef.current.focus();
  };

  getValue = () => {
    const value = this.inputRef.current.value.trim();
    alert(value ? value : 'Enter some text !');
  };
  greeting = () => {
    console.log('hello world');
  };

  render() {
    return (
      <div>
        <label>class ref : </label>
        <input type='text' ref={this.inputRef} />
      </div>
    );
  }
}
