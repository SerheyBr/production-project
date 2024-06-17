import { useState } from "react";
import "./counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
    </div>
  );
};