import { useState } from "react";

const Counter = () => {
  const [increment, setIncrement] = useState(0);
  const [initialValue, setInitialValue] = useState(0);

  const add = () => {
    setIncrement(initialValue + increment);
  };
  const sub = () => {
    if (increment > 0) setIncrement(increment - initialValue);
  };
  return (
    <div>
      <h1>Your Value...{increment}</h1>
      <input
        type="text"
        placeholder="enter the value"
        value={initialValue}
        onChange={(e) => {
          setInitialValue(parseInt(e.target.value));
        }}
      />
      <button onClick={add}> AddByInput </button>
      <button onClick={sub}> SubByInput </button>
    </div>
  );
};

export default Counter;
