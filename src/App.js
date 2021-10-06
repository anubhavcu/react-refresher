import React from 'react';
import './App.css';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome';
const App = () => {
  return (
    <div className='App'>
      <Hello />
      {/* <Greet name='John'>
        <p>This is a children prop</p>
      </Greet> */}
      {/* <Greet name='Bruce' /> */}
      {/* <Welcome name='John'>
        <p>This is a children prop</p>
      </Welcome> */}
      {/* <Welcome name='Bruce' /> */}
      <Message />
      <Counter />
      {/* <EventBind /> */}
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
