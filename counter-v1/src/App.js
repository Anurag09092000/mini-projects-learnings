import { useState } from "react";

const Counter = () => {
  const [operation, setOperation] = useState(0);
  const addValue = () => {
    setOperation(operation + 1);
  };
  const subValue = () => {
    if (operation >= 1) {
      setOperation(operation - 1);
    }
  };

  return (
    <div>
      <div>
        <h1>Your Value is ...{operation}</h1>
      </div>
      <div>
        <button onClick={addValue}>+</button>
        <button onClick={subValue}> - </button>
      </div>
    </div>
  );
};

export default Counter;
