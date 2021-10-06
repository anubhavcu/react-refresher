import React, { Component } from 'react';

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleIncrement() {
    //     this.setState(
    //       {
    //         count: this.state.count + 1,
    //       },
    //       () => {
    //         console.log('callback fn value - ', this.state.count);
    //       }
    //     );
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    console.log(this.state.count); // * will result in current state - 1 as setState is async function , this statement executes before the state updates
  }
  incrementFive() {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  }
  render() {
    return (
      <div>
        <h2>Counter : {this.state.count}</h2>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;

/**
 * 1. Never modify the state directly . The only place where we can assing this.setState is the constructor, any other time to change the state, setState() method has to be used.
 * eg.  increment() {
 * 	this.state.count = this.state.count + 1
 * 	console.log(this.state.count)
 * 	}
 * * above method will show updated state value in the console, but UI won't update
 * correct way -
 * 	increment() {
 * 		this.setState({count : this.state.count + 1})
 * 	}
 *
 * 2. setState method has 2 parameters , setState(stateObject, callback function)
 * 	! setState is an async operation
 * 	so if we want to perform some action only after the state change, we will pass it to the callback function
 * eg . increment () {
 * 		this.setState({count : this.state.count + 1})
 * 		console.log(this.state.count) => will always show state value - 1, as this statement will execute before the state updated
 * 	}
 * * correct way :
 * 	increment() {
 *		this.setState({count: this.state.count + 1}, () => console.log(this.state.count))
 * 	}
 *  * Similarly when using hooks in functional components, say,
 * 	const [count, setCount] = useState(0)
 *  * setCount DO NOT take an additional callback function
 *  so to run any code after the state has been changed, we can define it in useEffect  and pass count in the dependency array
 * 	useEffect(() => {
 * 		console.log(count)
 * 		...any other code
 * 	}, [count])
 *
 * 3. when we have to update the state based on prev state (or props), we pass a function to setState rather than the object
 * the function has prevState & props as parameter. - see eg above.
 *
 */
