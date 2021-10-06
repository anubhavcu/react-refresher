// eg to show eventHandler method ways in function component = also see, FunctionClick and EventBind.jsx
import { useState } from 'react';

const FunctionEvent = () => {
  //   function alertHi() {
  //     alert('hi');
  //   }
  const [count, setCount] = useState(0);

  const alertHi = () => {
    // alert('hi');
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      {/* <button onClick={alertHi}>Button 1</button> */}
      {/* <button onClick={alertHi()}>Button 2</button> */}
      {/* <button onClick={() => alertHi}>Button 3</button> */}
      <button onClick={() => alertHi()}>Button 4</button>

      <div>
        <h3>{count}</h3>
      </div>
    </div>
  );
};

export default FunctionEvent;

/**
 * Button 1, Button 4 are correct
 * Button 1 - will work just fine, as we don't have class component here, no issues of this keyword, and we can access the alertHi method
 *
 * Button 2 - will not work as expected  - the alert will pop up as the component mounts and will not work after the component is loaded, and if some state is changed within the method, it will lead to infinite re-renders
 *
 * Button 3 won't work at all, because alertHi method is not called here, only reference is returned to another function
 *
 * Button 4 will work fine because the alertHi method is called and its value is returned in the onClick handler method
 */
