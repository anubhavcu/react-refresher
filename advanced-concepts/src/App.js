import React, { Component } from 'react';
import './App.css';
import FocusInput from './components/ClassRef/FocusInput';
import PortalDemo from './components/Portals/PortalDemo';
import ModalDemo from './components/Portals/ModalDemo';

import Parent from './components/Portals/Parent';
import ParentComp from './components/PureComponent/ParentComp';
import FRParentInput from './components/RefForwarding/FRParentInput';
import RefsDemo from './components/Refs/RefsDemo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>root div</h1>
        {/* <ParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}

        {/* <PortalDemo /> */}
        <ModalDemo />

        <Parent />
      </div>
    );
  }
}
export default App;
