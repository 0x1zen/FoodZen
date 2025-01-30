const Button = (props) => {
  const { btnName } = props;
  return (
    <button className="btn">
      <span className="btn-name">{btnName}</span>
    </button>
  );
};
export default Button;
