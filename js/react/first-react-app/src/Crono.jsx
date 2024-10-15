import { useEffect, useState } from "react";

let cronoId;
const Crono = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Crono montato");
    cronoId = setInterval(() => {
      setValue((v) => v + 1);
    }, 1000);

    return () => {
      console.log("Crono smontato");
      clearInterval(cronoId);
    };
  }, []);

  useEffect(() => {
    if (value < 5) {
      console.log("value aggiornato:", value);
    }
    if (value > 100) {
      clearInterval(cronoId);
    }
  }, [value]);

  return (
    <div>
      <h2>Crono</h2>
      <div>crono: {value}</div>
    </div>
  );
};

export default Crono;
