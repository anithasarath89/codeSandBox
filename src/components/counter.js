import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    props.setOperations(prevCount => prevCount + 1)
  };
  const handleDecrement = () => {
   setCount(prevCount => prevCount - 1);
    props.setOperations(prevCount => prevCount + 1)

  };
  return (
    <>
    <div>
      <div>
        <button onClick={handleDecrement}>-</button> 
        <button onClick={handleIncrement}>+</button>
        <label> counter-{props.length}</label>:{count}
      </div>
    </div>
      
      </>
  );
};

export default Counter;