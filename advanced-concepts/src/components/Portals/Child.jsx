import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Child extends Component {
  render() {
    return ReactDOM.createPortal(
      // the click event on this button or h2 will bubble up to the parent
      <div>
        <button onClick={() => alert('clicked ')}>Click </button>
        <h2>some text</h2>
      </div>,
      document.getElementById('portal-root')
    );
  }
}

export default Child;
