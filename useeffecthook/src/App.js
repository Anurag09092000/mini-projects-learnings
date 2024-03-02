import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("Mounting");
    return function deletebtn() {
      console.log("unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("on updation");
  }, [counter]);
  return (
    <div>
      <h1>Mounting</h1>
      {counter}
      <button onClick={add}>ADD</button>
    </div>
  );
};

export default UseEffectHook;
