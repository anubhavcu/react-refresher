import { Component } from 'react';
import './App.css';
import HookCounter from './components/HookCounter';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <HookCounter />
      </div>
    );
  }
}
