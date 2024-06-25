import { useState } from "react";
import Button from "../../components/button/button";
import TextInput from "../../components/textinput/TextInput";
import "./LogIn.css";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    // fetch here
    try {
      const response = await fetch("http://localhost:7777/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      if (response.error === undefined) {
        //document.cookie = loginToken;
        console.log(response);
        response.headers.forEach((header) => {
          console.log(header);
        });
      }
    } catch (e) {
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
