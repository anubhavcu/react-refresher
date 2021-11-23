import React, { useEffect, useState } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(tick, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  const tick = () => {
    //     setCount((prev) => prev + 1);
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

export default IntervalHookCounter;
