import { useState } from "react";
import Button from "../../components/button/button";
import TextInput from "../../components/textinput/TextInput";
import "./LogIn.css";
import send from "../../util/send.js";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    try {
      const response = await send("/user/login", "POST", {
        username: username,
        password: password,
      });

      console.log(response);
    } catch (e) {
      //display, failed login message
      console.log(e);
    }

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="panel">
        <h1 className="header">Log in to Reservior</h1>
        <div id="text-input-panel">
          <TextInput
            className="text-input"
            placeholder="username"
            size="long"
            password={false}
            value={username}
            onchange={setUsername}
          ></TextInput>
          <TextInput
            className="text-input"
            placeholder="password"
            size="long"
            password={true}
            value={password}
            onchange={setPassword}
          ></TextInput>
        </div>

        <Button
          className="login-btn"
          text="Log In"
          onclick={() => {
            login(username, password);
          }}
        ></Button>
      </div>
    </>
  );
};

export default LogIn;
