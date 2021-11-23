// eg to show useEffect will only render once, also see ClassMouse
import React, { useEffect, useState } from 'react';

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // below effect will run only once - mimicking componentDidMount()
  useEffect(() => {
    console.log('useeffect called');
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      console.log('Hook mouse unmounted');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  const logMousePosition = (e) => {
    console.log('logmouseposition');
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div>
      {x} : {y}
    </div>
  );
};

export default HookMouse;

// the callback function in useEffect also returns a function which is called when component unmounts , basically used to perform clean-up operations
