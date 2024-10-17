import Button from "./Button";

const CardList = ({ value }) => {
  return (
    <div className="contenitore" style={{ border: "1px solid #fcfcfc", padding: "1rem"}}>
      <h4>{value}</h4>
      <div>
        <Button btnLabel={`Click me ${value}`} />
      </div>
    </div>
  );
};

export default CardList;
