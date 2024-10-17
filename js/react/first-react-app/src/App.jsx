import { useState } from "react";
import "./App.css";
import { printTimeStamp } from "./utils";
import Datetime from "./Datetime";
import Counter from "./Counter";
import Crono from "./Crono";
import EventHandler from "./EventHandler";
import ConditionalRendering from "./ConditionalRendering";
import Form from "./Form";
import FormWithState from "./FormWithState";
import List from "./List";

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
        <Form />
        <FormWithState
          email="vengodafuori@mail.com"
          password="123456"
          onSubmit={(data) => console.log("App data", data)}
        />
      </div>

      <div className="card inline">
        <button className="sono-una-classe" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>Reset count</button>
      </div>

      <List />
    </>
  );
}

export default App;
