import React, { useState } from "react";
import "./Login.css";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "saakethaj@gmail.com" && password === "Saaketh") {
      setCookie("loggedIn", true, 365);
      history.push("/dashboard");
    } else {
      setMessage("Invalid username or password");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  const [message, setMessage] = useState("");

  const cookies = new Map(
    document.cookie.split("; ").map((v) => v.split("=").map(decodeURIComponent))
  );

  let payload = {};
  cookies.forEach((value, key) => {
    payload[key] = value;
  });

  if (payload.loggedIn) {
    history.push("/dashboard");
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        {message === "" ? null : <Alert variant="danger">{message}</Alert>}
      </Form>
    </div>
  );
}

export default Login;
