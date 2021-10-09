import React, { Component } from 'react';
import './App.css';
import Time from './components/Time';

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
  render() {
    return (
      <div className='App'>
        <Time />
        <h2>Time (toLocaleTimeString) : {this.state.time}</h2>
      </div>
    );
  }
}

export default App;
