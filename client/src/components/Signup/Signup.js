import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./Signup.css";

const Signup = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const formSubmit = async (e) => {
    e.preventDefault();

    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        username: formState.username,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
      <p>SignUp</p>
      <form onSubmit={formSubmit}>
        <div type="text" className="input-group">
          <div>
            <i className="fas fa-user"></i>
          </div>
          <input placeholder="Username" onChange={handleChange} />
        </div>
        <div type="email" className="input-group">
          <div>
            <i className="fas fa-envelope"></i>
          </div>
          <input placeholder="Email" onChange={handleChange} />
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
        <div className="input-group">
          <div>
            <i className="fas fa-lock"></i>
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
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
        <button type="submit">SUBMIT</button>
        <p>
          Already a member? <Link to="/login">Sign In.</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
