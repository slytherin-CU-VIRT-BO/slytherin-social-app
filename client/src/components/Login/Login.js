import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./Login.css";

const Login = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [login, { error }] = useMutation(LOGIN);

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="sign">
      <h1>SlytherinSocial</h1>
      <p>Login</p>
      <form onSubmit={formSubmit}>
        <div type="text" className="input-group">
          <div>
            <i className="fas fa-user"></i>
          </div>
          <input placeholder="Username" onChange={handleChange} />
        </div>
        <div className="input-group">
          <div>
            <i className="fas fa-key"></i>
          </div>
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="remember">
          <span>Remember Me</span>
          <div className="check">
            <input type="checkbox" />
            <div className="thumb"></div>
          </div>
        </div>
        {error ? (
          <div>
            <p className="error-text">
              The provided username and/or password are incorrect
            </p>
          </div>
        ) : null}
        <button type="submit">LOGIN</button>
        <p>
          Not a member? <Link to="/signup">Sign Up!</Link>
        </p>
        <p>
          Forgot Password? <Link to="/forgetpassword">Reset here!</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
