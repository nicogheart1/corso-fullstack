import { createContext, useState } from "react";
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
import StyledContainer from "./StyledContainer/StyledContainer";
import Grid from "./Grid";

export const LanguageProvider = createContext("italian");

function App() {
  const [count, setCount] = useState(0);

  const [lang, setLang] = useState("italian");

  return (
    <LanguageProvider.Provider value={lang}>
      <button
        onClick={() => setLang(lang === "italian" ? "english" : "italian")}
      >
        Change language {lang}
      </button>
      <h1>FS30 React</h1>
      <Grid>
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
        <StyledContainer />

        <div className="container">
          <h2>Prova css</h2>
        </div>
      </Grid>

      <div className="card inline">
        <button className="sono-una-classe" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>Reset count</button>
      </div>

      <List />
    </LanguageProvider.Provider>
  );
}

export default App;
