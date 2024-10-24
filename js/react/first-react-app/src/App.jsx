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
import ApiIntegration from "./ApiIntegration";
import { useCounter } from "./hooks/useCounter";

export const LanguageProvider = createContext("italian");

function App() {
  const { count, increment, reset } = useCounter(10);

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
        <ApiIntegration />
        <Crono />
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
        <Counter />

        <div className="container">
          <h2>Prova css</h2>
        </div>
      </Grid>

      <div className="card inline">
        <button className="sono-una-classe" onClick={increment}>
          count is {count}
        </button>
        <button onClick={reset}>Reset count</button>
      </div>

      <List />
    </LanguageProvider.Provider>
  );
}

export default App;
