import { useState } from "react";
import "./App.css";
import { printTimeStamp } from "./utils";
import Datetime from "./Datetime";
import Counter from "./Counter";
import Crono from "./Crono";
import EventHandler from "./EventHandler";
import ConditionalRendering from "./ConditionalRendering";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>FS30 React</h1>
      <div className="components-grid">
        <Crono />
        <Counter />
        <Datetime />
        <EventHandler />
        <ConditionalRendering count={count} />
        <div>
          <h2>Function Rendering</h2>
          {printTimeStamp()}
        </div>
      </div>

      <div className="card inline">
        <button className="sono-una-classe" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>Reset count</button>
      </div>
    </>
  );
}

export default App;
