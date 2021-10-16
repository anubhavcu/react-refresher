// eg for attaching a ref on class component (rather than on DOM element )
import React, { Component } from 'react';
import Input from './Input';

export default class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  };

  getInputValue = () => {
    this.componentRef.current.getValue(); // getValue is in Input component
  };
  componentDidMount() {
    console.log(this.componentRef);
    this.componentRef.current.greeting(); // greeting is in Input component
  }

  render() {
    return (
      <div>
        {/* attaching ref to a class component  */}
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus input </button>
        <button onClick={this.getInputValue}>Get Value </button>
      </div>
    );
  }
}

// * we can acess all methods in child component from parent component by attaching a ref to the child component itself.
