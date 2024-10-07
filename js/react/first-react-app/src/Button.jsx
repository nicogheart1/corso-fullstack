const Button = (props) => {
  console.log("button props", props);
  const { disabled, btnLabel, onBtnClick } = props;
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
