import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }
  return (
    <div>
      <h2>Counter</h2>
      <p data-testid="count">{count}</p>
      <button name="incr" onClick={increment}>
        {" "}
        +{" "}
      </button>
      <button name="decr" onClick={decrement}>
        {" "}
        -{" "}
      </button>
    </div>
  );
}
