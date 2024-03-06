import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1)
    }
    
    const decrement = () => {
        setCount(count - 1)
    }

  return (
    <>
      <div>
        <h1>Thieves Counter</h1>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default Counter;
