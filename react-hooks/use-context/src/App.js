import React from 'react';
import ComponentA from './components/ClassContext/ComponentA';
import HookCompA from './components/HookContext/HookCompA';

export const UserContext = React.createContext('John');
export const LanguageContext = React.createContext('JS');

const App = () => {
  return (
    <div>
      <h1>useContext</h1>
      <UserContext.Provider value='Anubhav'>
        <LanguageContext.Provider value='Javascript'>
          <ComponentA />
          <HookCompA />
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;

// HookCompA will render HookCompB which will render HookCompC in which we have used useContext hook
// useContext hook simplifies consumption of context value simpler (see difference between ComponentC and HookCompC)
// Creating the context is same for useContext as normal context

// Note: The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. i.e if we comment out UserContext.Provider from above, then name 'john' will be rendered in ComponentC.
