import { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState: number) => prevState + 2);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};
