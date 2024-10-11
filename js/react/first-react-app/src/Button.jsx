import { numberIsEven } from "./utils";

const Button = (props) => {
  const { disabled, btnLabel, onBtnClick } = props;

  if (!btnLabel) {
    console.log("manca btnLabel", props.id);
    return null;
  }

  if (!numberIsEven(btnLabel)) {
    console.log("btnLabel è dispari", btnLabel)
    return null;
  }

  return (
    <button
      style={{ color: props.btnColor, backgroundColor: props.bg }}
      id={props.id}
      className={`btn ${props.className}`}
      disabled={disabled}
      onClick={() => onBtnClick(props.id)}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
