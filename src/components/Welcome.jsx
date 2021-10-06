// eg for class based component and how to access props in class components
import React from 'react';
class Welcome extends React.Component {
  render() {
    // we can also destructure the props here
    //   const {name , children} = props
    return (
      <div>
        <h2>Welcome {this.props.name}- class Component</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;

// props are immutable - their values cannot be changed
// children is reserved inside props. so for properties you know for sure are going to be passed, we can pass them as attributes(eg. name)
// if we have no clue of what is going to be passed, or if we have to pass dynamic HTML content, we pass it in between the component tags, like <Welcome> <p>children content</p> </Welcome> , and render it as props.children, If nothing is specified, it won't render anything.
