import { useState } from "react";
import "./SignUp.css";
import TextInput from "../../components/textinput/TextInput";
import Button from "../../components/button/button";
import send from "../../util/send.js";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async (firstName, lastName, username, password) => {
    try {
      const response = await send("/user/create-account", "POST", {
        firstName: firstName,
        lastName: lastName,
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
        <h1 className="header">Sign up for Reservior</h1>
        <div id="text-input-panel">
          <TextInput
            className="text-input"
            placeholder="first name"
            size="long"
            password={false}
            value={firstName}
            onchange={setFirstName}
          ></TextInput>
          <TextInput
            className="text-input"
            placeholder="last name"
            size="long"
            password={false}
            value={lastName}
            onchange={setLastName}
          ></TextInput>
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
          text="Create Account"
          onclick={() => {
            createAccount(firstName, lastName, username, password);
          }}
        ></Button>
      </div>
    </>
  );
};

export default SignUp;
