// eg to show cleanup - this component will toggle rendering HookMouse component

import React, { useState } from 'react';
import HookMouse from './HookMouse';

function HookMouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setDisplay((prev) => !prev);
        }}
      >
        Toggle HookMouse
      </button>
      {display && <HookMouse />}
    </div>
  );
}

export default HookMouseContainer;
