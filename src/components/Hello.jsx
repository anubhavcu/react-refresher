import React from 'react';

// const Hello = () => {
//   return (
//     <div id="divId" className="dummyClass">
//       <h1>Hello World</h1>
//     </div>
//   );
// };

const Hello = () => {
  return React.createElement(
    'div',
    { id: 'divId', className: 'dummyClass' },
    React.createElement('h2', null, 'Hello world')
  );
};

export default Hello;

/**
 * JSX is basically converted to React.createElement under the hood with help of Babel
 *
 * React.createElement(element, propertyObject, innerContent)
 */

/**
 * * Post React 17, it is not neccessary to import React to use JSX.
 * because new JSX transform will automatically import the necessary functions
 * React will no longer need to be in scope when we use JSX
 */
