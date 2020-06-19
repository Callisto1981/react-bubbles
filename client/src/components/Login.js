import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = () => {
    return setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.prevenDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        //res.data.payload
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("bubbles");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <from onSubmit={onSubmit}>
        <label>
          Name:
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={credentials.username}
          />
        </label>
        <label>
          Password:
          <input
            id="password"
            name="password"
            type="text"
            onChange={handleChange}
            value={credentials.password}
          />
        </label>
        <button>Submit</button>
      </from>
    </>
  );
};

export default Login;
