import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { UPDATE_USER } from "../../utils/mutations";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [updateUser] = useMutation(UPDATE_USER);

  const formSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log(formState);

    await updateUser({
      variables: {
        username: formState.username,
        password: formState.password,
      },
    });
  };

  const handleChange = (event) => {
    if (!event.target.value.length) {
      setErrorMessage(`${event.target.name} is required.`);
    } else {
      setErrorMessage("");

      const { name, value } = event.target;
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div className="sign">
      <h1>SlytherinSocial</h1>
      <p>Reset Password</p>
      <form onSubmit={formSubmit}>
        <div type="text" className="input-group">
          <div>
            <i className="fas fa-user"></i>
          </div>
          <input
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <div>
            <i className="fas fa-key"></i>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">RESET</button>
        <p>
          Not a member? <Link to="/signup">Sign Up!</Link>
        </p>
        <p>
          Already a member? <Link to="/login">Sign In.</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
