import { useEffect, useState } from "react";

const Crono = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Crono montato");
    const id = setInterval(() => {
      setValue((v) => v + 1);
    }, 1000);

    return () => {
      console.log("Crono smontato");
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log("value aggiornato:", value);
  }, [value]);

  return <div>crono: {value}</div>;
};

export default Crono;
