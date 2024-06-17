import "../button/button.css";

const Button = ({ text, onclick }) => {
  return (
    <button className="btn" onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
