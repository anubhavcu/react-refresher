import { Component } from 'react';

class NormalComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      count: state.count + 1,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.props);
    // console.log(nextProps);
    // console.log(this.shallowEqual(this.props, nextProps));
    return !this.shallowEqual(this.props, nextProps);
  }

  // shallow comparison implementation for simple objects
  // see deep comparison for nested objects (we need to recursively check if any nested objects are there or not) here - https://dmitripavlutin.com/how-to-compare-objects-in-javascript/

  shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  render() {
    console.log('Normal comp - render ', this.state.count);
    return <div>Normal Component {this.props.name} - </div>;
  }
}

export default NormalComp;
