import { useState } from 'react';
const HookCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 100) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked : {count}</button>

      <form action=''>
        <input
          type='text'
          name=''
          id=''
          value={name.firstName}
          placeholder='firstname'
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type='text'
          name=''
          id=''
          value={name.lastName}
          placeholder='lastName'
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <br />
        FirstName : {name.firstName}
        LastName : {name.lastName}
      </form>

      <hr />
      <button onClick={addItem}>Add Item</button>
      {items.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </div>
  );
};

export default HookCounter;

/**
 * approach 1 - setCount(count + 1)
 * approach 2 - setCount(prevCount => prevCount + 1)
 *
 * better to use approach 2, as we depend on prev state for our next state update
 */
