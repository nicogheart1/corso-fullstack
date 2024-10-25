import { Link } from "react-router-dom";
import Grid from "../components/Grid";
import ApiIntegration from "../components/ApiIntegration";
import Crono from "../components/Crono";
import Datetime from "../components/Datetime";
import EventHandler from "../components/EventHandler";
import ConditionalRendering from "../components/ConditionalRendering";
import { printTimeStamp } from "../utils";
import Form from "../components/Form";
import FormWithState from "../components/FormWithState";
import StyledContainer from "../components/StyledContainer/StyledContainer";
import Counter from "../components/Counter";
import { useCounter } from "../hooks/useCounter";

const Home = () => {
  const { count, increment, reset } = useCounter(10);

  return (
    <>
      <Link to="/about">Go to About page</Link>
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
    </>
  );
};

export default Home;
