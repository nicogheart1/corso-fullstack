import { useContext } from "react";
import Button from "./Button";
import { LanguageProvider } from "../App";

const CardList = ({ value }) => {
  const lang = useContext(LanguageProvider);
  return (
    <div className="contenitore" style={{ border: "1px solid #fcfcfc", padding: "1rem"}}>
      <h4>{value}</h4>
      <div>
        <Button btnLabel={`${lang === "english" ? "Click me" : "Cliccami"} ${value}`} />
      </div>
    </div>
  );
};

export default CardList;
