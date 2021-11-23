// eg to show how to run useEffect every time and conditionally, also see ClassCounterOne
import { useState, useEffect } from 'react';
const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // below effect will run on every re-render (componentDidMount + componentDidUpdate)
  //   useEffect(() => {
  //     document.title = `Clicked ${count} times`;
  //   });

  // below effect will only run if count value changes
  useEffect(() => {
    console.log('useEffect - updating document title');
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default HookCounterOne;
