import React from 'react';

const UserContext = React.createContext('John Wick');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;

/**
 **  Context provides a way to pass data through the component tree without having to pass props down manually at every level.
 (basically follows a render props pattern )

 basically 3 steps are involved: 
 step 1 : Create the context 
 step 2 : Provide the context value 
 step 3 : Consume the context value


 * *Context.Provider 
1. Every context object comes with a Provider component that allows consuming components to subscribe to context changes. 
2. The provider component accepts a value prop to be passed to the consuming components that are decendants of this provider 
One provider can be connected to many consumers, providers can be nested to override values deeper within the tree. 
3. All consumers that are decendant of a Provider will re-render whenever the Provider's value prop changes (it is not subject to shouldComponentUpdate method)

* *Context.Consumer 
Requires function as a child. The function recieves the current context value and returns a React node 

- The value prop passed to the function will be equal to the value prop of the closest provider for this context above in the tree.
** If there is no provider for this context above, the value argument will be equal to defaultValue that was passed to CreateContext() method


**  Context.contextType 
we can also use contextType syntax to get data (see in component B) , but it has 2 limitations : 
- works only with class based components 
- we can only subscribe to a single context using contextType , many a times we need to subscribe to multiple context , see eg below : 



// * *********************** multiple contexts

function Content() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <UserContext.Consumer>
          {(user) => <ProfilePage user={user} theme={theme} />}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

*/
