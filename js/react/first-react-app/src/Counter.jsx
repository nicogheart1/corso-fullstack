import { useState } from "react";
import { useCounter } from "./hooks/useCounter";

const Counter = () => {
  // esempio con variabile
  let value = 0;
  const increase = () => {
    value++;
    console.log("increase variabile", value);
  };

  // esempio con useState
  // const [stato, setStato] = useState("valore di default");
  const { count, increment } = useCounter(88);
  const increaseState = () => {
    // setCount(33);
    //setCount(count + 1);

    increment((upatedState) => upatedState + 1);
    increment((upatedState) => upatedState + 1);
    increment((upatedState) => upatedState + 1);
    increment((upatedState) => upatedState + 1);

    console.log("count", count);

    //array.push(count);
    setArray([...array, count]);
  };

  const [array, setArray] = useState([]);

  return (
    <div>
      <h2>Counter</h2>
      <div className="inline" style={{ marginBottom: "0.5rem"}}>
        <div>Counter variable: {value}</div>
        <button onClick={increase}>Increase variable</button>
      </div>

      <div className="inline" style={{ marginBottom: "1rem"}}>
        <div>Counter state: {count}</div>
        <button onClick={increaseState}>Increase state</button>
      </div>

      <div>Array lungo {array.length}</div>
    </div>
  );
};

export default Counter;
