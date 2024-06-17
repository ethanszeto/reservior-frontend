import "../button/button.css";
import "../../pages/Home/Home.css";

const Button = ({ text, onclick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
