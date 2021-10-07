import React from 'react';
import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import FunctionEvent from './components/FunctionEvent';
import Welcome from './components/Welcome';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
const App = () => {
  return (
    <div className='App'>
      {/* <Hello /> */}
      {/* <Greet name='John'>
        <p>This is a children prop</p>
      </Greet> */}
      {/* <Greet name='Bruce' /> */}
      {/* <Welcome name='John'>
        <p>This is a children prop</p>
      </Welcome> */}
      {/* <Welcome name='Bruce' /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}

      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <FunctionEvent /> */}
      {/* <UserGreeting /> */}
      <NameList />
      {/* <Form /> */}
    </div>
  );
};

// const App = () => {
//   return React.createElement(
//     'div',
//     { id: 'hello', className: 'dummyClass' },
//     React.createElement('h1', null, 'hello from createElement')
//   );
// };

export default App;
