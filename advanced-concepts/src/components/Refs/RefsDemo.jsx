import React, { Component } from 'react';

export default class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef(); // ref
    this.cbRef = null; // callback ref
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    //     this.cbRef.focus();
    console.log(this.inputRef);
    console.log(this.cbRef);
  }
  handleRefValue = () => {
    const value = this.inputRef.current.value.trim(); // used trim to avoid spaces
    alert(value === '' ? 'enter some value ' : value);
  };

  handleCallbackRefValue = () => {
    const value = this.cbRef.value.trim();
    alert(value === '' ? 'enter some value ' : value);
  };
  render() {
    return (
      <div>
        <h2>Refs demo</h2>
        <div>
          <label>ref : </label>
          <input type='text' ref={this.inputRef} />
          <button onClick={this.handleRefValue}>Ref value </button>
        </div>
        <div>
          <label>callback ref : </label>
          <input type='text' ref={this.setCbRef} />
          <button onClick={this.handleCallbackRefValue}>Ref value </button>
        </div>
      </div>
    );
  }
}

/**
 * ref's are used to access DOM nodes in react
 * callback ref's are older method of creating a ref.
 * creating a ref :
 * 1. create a ref variable using React.createRef()
 * 	this.inputRef = React.createRef()
 * 2. attach ref to input element
 * 	<input type="text" ref={this.inputRef} />
 * 3. make use as per requirement:
 * 	like for getting focus on input element:
 * 		componentDidMount() {
 * 			this.inputRef.current.focus();
 * 		}
 *
 * creating a callback ref :
 * 1. create a variable and assign null
 * 	*in constructor :
 * 		this.cbRef = null
 * 2. create a method that will assign the DOM element with created ref
 * 	this.setCbRef = (element) => {
 * 		this.cbRef = element
 * 	}
 * 3. attach the cbref method to the input element
 * 	<input type="text" ref={this.setCbRef} />
 *  * the dom element is implicitly passed as a parameter to the cb function
 * 4. use as required
 * 	this.cbRef.focus()
 * 	this.cbRef.value;
 * * Note: when using ref we have to use "current" property to access the dom element , while with callback ref we can directly access DOM node.
 *
 */
