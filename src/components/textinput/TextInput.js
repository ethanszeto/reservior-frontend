import "../button/button.css";
import "./TextInput.css";

/**
 *
 * @param {
 * placeholder: str
 * size: (short, long)
 * name: str
 * password: bool
 * } param0
 * @returns
 */
const TextInput = ({ placeholder, size, password, value, onchange, className }) => {
  return (
    <input
      placeholder={placeholder}
      className={`input-text ${size} ${className}`}
      type={password ? "password" : "text"}
      value={value}
      onChange={(e) => onchange(e.target.value)}
    ></input>
  );
};

export default TextInput;
