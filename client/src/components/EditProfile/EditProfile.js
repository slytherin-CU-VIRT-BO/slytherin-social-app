import React, { useState } from "react";
import { useMutation,useQuery } from "@apollo/client";
import { UPDATE_USER  } from "../../utils/mutations";
import { GET_ME } from '../../utils/queries';
import Auth from "../../utils/auth";
import "./EditProfile.css";

const EditProfile = () => {
  const {data} = useQuery(GET_ME);

  const [formState, setFormState] = useState({
    username: data.username,
    email: data.email,
    password: "",
    password_confirm: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [updateUser] = useMutation(UPDATE_USER);

  const formSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (formState.password !== formState.password_confirm) {
      setErrorMessage("Passwords don't match!");
    } else {
      setErrorMessage("");

      let password_coalesce = (formState.password === "") ? data.password:formState.password;

      const mutationResponse = await updateUser({
        variables: {
          email: formState.email,
          username: formState.username,
          password: password_coalesce,
        },
      });
      const token = mutationResponse.data.updateUser.token;
      Auth.login(token);
    }
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
      <p>Edit Profile</p>
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
        <div type="email" className="input-group">
          <div>
            <i className="fas fa-envelope"></i>
          </div>
          <input placeholder="Email" name="email" onChange={handleChange} />
        </div>
        <div className="input-group">
          <div>
            <i className="fas fa-key"></i>
          </div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <div>
            <i className="fas fa-lock"></i>
          </div>
          <input
            type="password"
            name="password_confirm"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default EditProfile;
