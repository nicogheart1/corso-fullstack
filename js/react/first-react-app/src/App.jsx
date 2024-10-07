import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";

function App(props) {
  console.log("App props", props);
  const [count, setCount] = useState(0);

  const test = (value) => {
    console.log("sono dentro la function test", value);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" id="anchor-1">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ciao sono il titolo nuovo</h1>

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
      <div>
        <Button
          onBtnClick={test}
          bg="yellow"
          id="btn-2"
          btnLabel="paperino 123"
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
