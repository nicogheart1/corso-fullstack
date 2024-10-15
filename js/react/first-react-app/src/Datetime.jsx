const Datetime = () => {
  const newDate = new Date();
  console.log("newDate:", newDate);

  return (
    <div>
      <h2>Datetime</h2>
      <div
        onMouseOver={(event) => {
          console.log("mi sei passato sopra", event);
        }}
      >
        {newDate.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Datetime;
