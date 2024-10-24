import Button from "./Button";

const ConditionalRendering = ({ count }) => {
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
    <div>
      <h2>Conditional Rendering</h2>
      {/* Render condizionale in linea
      condizione ? blocco1 : blocco2
      */}

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
    </div>
  );
};

export default ConditionalRendering;
