// eg for function component which aslo takes default children prop
const Greet = ({ name, children }) => {
  return (
    <div>
      <h1>hello {name}</h1>
      {children}
    </div>
  );
};

export default Greet;
