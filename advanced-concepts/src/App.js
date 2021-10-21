import React, { Component } from 'react';
import './App.css';
import FocusInput from './components/ClassRef/FocusInput';
import PortalDemo from './components/Portals/PortalDemo';
import ModalDemo from './components/Portals/ModalDemo';

import Parent from './components/Portals/Parent';
import ParentComp from './components/PureComponent/ParentComp';
import FRParentInput from './components/RefForwarding/FRParentInput';
import RefsDemo from './components/Refs/RefsDemo';
import Hero from './components/ErrorBoundary/Hero';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>root div</h1>
        {/* <ParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}

        {/* portals  */}
        {/* <PortalDemo /> */}
        {/* <ModalDemo />   */}
        {/* <Parent />    */}

        {/** error boundary  */}
        {/** placement of error boundary also matters as it controls if the entire app should have a fallback UI or just the component causing the problem , here we have wrapped each component to ErrorBoundary so if any components has error will have a fallback UI and rest will work fine*/}
        <ErrorBoundary>
          <Hero hero='Batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero hero='Superman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero hero='Joker' />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
