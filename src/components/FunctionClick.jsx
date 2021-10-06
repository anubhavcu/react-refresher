// eg for adding event handler in function component
// also see EventBind.jsx and Counter.jsx
const FunctionClick = () => {
  function handleClick() {
    console.log('button clicked');
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default FunctionClick;

// wrong way : onClick={handleClick() }  => this will be a function call to the button, so as soon as the button renders , we will get message in the console. also this becomes more complicated if the state is involved , and after every state, component will re-render, and we would get too many message in the console(in this eg)
