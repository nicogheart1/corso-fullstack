import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";
import { printTimeStamp } from "./utils";
import Datetime from "./Datetime";
import Counter from "./Counter";

function App(props) {
  console.log("App props", props);
  const [count, setCount] = useState(0);

  const test = (value) => {
    console.log("sono dentro la function test", value);
  };

  const customCondition = () => {
    /*condizione complessa*/
    if (count !== undefined) {
      return <div>come sono bello</div>;
    }
    return null;
  };

  return (
    <>
      <div>
        <Counter />
        <Datetime />

        <a href="https://vitejs.dev" target="_blank" id="anchor-1">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ciao sono il titolo nuovo</h1>

      {/*condizione ? blocco1 : blocco2*/}

      {count && <div>funziono lo stesso</div>}

      {count ? "c'è count" : "non c'è count"}

      {customCondition()}

      {count !== 0 ? (
        <div>
          <Button
            className="sono-una-classe"
            onBtnClick={test}
            btnLabel={count}
            id={3453}
            btnColor="red"
            franco="renato"
          />
        </div>
      ) : (
        <div>Count vale 0</div>
      )}

      {printTimeStamp()}

      <div>
        <Button onBtnClick={test} bg="blue" id="btn-2" btnLabel={123} />
      </div>

      <div id="questo-elemento">
        <Button
          onBtnClick={test}
          bg="red"
          id="sono-il-nuovo-id-2"
          btnLabel={2}
        />
      </div>

      <div className="card">
        <button className="sono-una-classe" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
