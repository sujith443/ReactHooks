import React from "react";

function App() {
  const [count, setcount] = React.useState(0);
  let increase = () => {
    setcount(count + 1);
  };
  let decrease = () => {
    setcount(count - 1);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>-</button>
      <button onClick={decrease}>+</button>
    </div>
  );
}

export default App;
