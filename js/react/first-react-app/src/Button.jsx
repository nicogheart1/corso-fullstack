const Button = (props) => {
  console.log("button props", props);
  const { id, btnLabel } = props;
  return (
    <button
      style={{ color: props.btnColor, backgroundColor: props.bg }}
      id={id}
      className="btn"
    >
      {btnLabel}
    </button>
  );
};

export default Button;
