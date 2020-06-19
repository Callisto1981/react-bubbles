import React from "react";

const initialState = {
  credentials: {
    username: "",
    password: ""
  }
};

const Login = (state = initialState, action) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  axiosWithAuth()
    .post("/api/colors", this.state.credentials)
    .then(res => console.log(res))
    .catch(err => console.log(err));

  const handleChange = () => {
    setState({
      username: this.state.username,
      password: this.state.password
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <from onSubmit={onSubmit}>
        <label htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={this.state.username}
          />
        </label>
      </from>
    </>
  );
};

export default Login;
