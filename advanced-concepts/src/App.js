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
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
import ClickCounter5 from './components/HOC/ClickCounter5';
import ClickCounterTwo from './components/renderPropsPattern/ClickCounterTwo';
import HoverCounterTwo from './components/renderPropsPattern/HoverCounterTwo';
import User from './components/renderPropsPattern/User';
import Counter from './components/renderPropsPattern/Counter';

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
        {/* <ErrorBoundary>
          <Hero hero='Batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero hero='Superman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero hero='Joker' />
        </ErrorBoundary> */}
        {/**HOC */}
        {/* <ClickCounter name='Anubhav' />
        <HoverCounter />
        <ClickCounter5 /> */}
        {/* renderProps */}
        {/* <ClickCounterTwo /> */}
        {/* <HoverCounterTwo /> */}
        <User name={(isLogged) => (isLogged ? 'Anubhav' : 'Guest')} />
        <Counter
          render={(count, handleIncrement) => (
            <ClickCounterTwo count={count} handleIncrement={handleIncrement} />
          )}
        />
        <Counter
          render={(count, handleIncrement) => (
            <HoverCounterTwo count={count} handleIncrement={handleIncrement} />
          )}
        />

        {/* alternative way to pass it as a children (anything b/w opening and closing tags are children), so modify in Counter.jsx to use this.props.children instead of this.props.render if using below method */}
        {/* <Counter>
          {(count, handleIncrement) => (
            <HoverCounterTwo count={count} handleIncrement={handleIncrement} />
          )}
        </Counter> */}
      </div>
    );
  }
}
export default App;
