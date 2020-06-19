import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    return setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        //res.data.payload
        localStorage.setItem("token", res.data.payload);
        props.history.push("bubbles");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="username"
            type="text"
            onChange={handleChange}
            value={credentials.username}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="text"
            onChange={handleChange}
            value={credentials.password}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
