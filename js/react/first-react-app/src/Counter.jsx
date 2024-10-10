import { useState } from "react";

const Counter = () => {
  // esempio con variabile
  let value = 0;
  const increase = () => {
    value++;
    console.log("increase variabile", value);
  };

  // esempio con useState
  // const [stato, setStato] = useState("valore di default");
  const [count, setCount] = useState(0);
  const increaseState = () => {
    // setCount(33);
    //setCount(count + 1);

    setCount((upatedState) => upatedState + 1);
    setCount((upatedState) => upatedState + 1);
    setCount((upatedState) => upatedState + 1);
    setCount((upatedState) => upatedState + 1);

    console.log("count", count);
  };

  return (
    <>
      <div>
        <div>Counter variabile: {value}</div>
        <button onClick={increase}>Increase</button>
      </div>

      <div>
        <div>Counter state: {count}</div>
        <button onClick={increaseState}>Increase</button>
      </div>
    </>
  );
};

export default Counter;
