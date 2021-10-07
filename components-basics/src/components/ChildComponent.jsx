// used in ParentComponent to pass methods as props
import React from 'react';

const ChildComponent = ({ greetHandler }) => {
  return (
    <div>
      {/* <button onClick={greetHandler}>Greet Parent</button> */}
      <button onClick={() => greetHandler('child')}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;
