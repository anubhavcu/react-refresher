import React, { Component } from 'react';
import './App.css';
import FocusInput from './components/ClassRef/FocusInput';
import ParentComp from './components/PureComponent/ParentComp';
import FRParentInput from './components/RefForwarding/FRParentInput';
import RefsDemo from './components/Refs/RefsDemo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <ParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        <FRParentInput />
      </div>
    );
  }
}
export default App;
