import React from 'react';

// function FRInput() {
//   return (
//     <div>
//       <input type='text' />
//     </div>
//   );
// }

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  );
});

export default FRInput;

/**
 * every functional component recieves props as a parameter
 * when a component is passed a parameter to the createRef method, it recieves a ref attribute as a second parameter
 * we can use this ref parameter and pass it as a value to the ref attribute of the native input element
 *
 * Note:
 * The second ref argument only exists when you define a component with React.forwardRef call. Regular function or class components don’t receive the ref argument, and ref is not available in props either.
 */
