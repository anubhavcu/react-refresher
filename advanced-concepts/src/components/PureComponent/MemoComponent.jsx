import React from 'react';

const MemoComponent = ({ name }) => {
  console.log('rendering memo component');
  return <div>{name}</div>;
};

export default React.memo(MemoComponent);

// what pure Component is to class component, memo is for functional component
// this functional component won't re-render if the state/props don't change

// * React.memo is a higher-order-component. It accepts a component, adds some things to the component and returns a new enhanced component (in our case, it returns a component which is capable of avoiding re-renders when there is no changes in props )
