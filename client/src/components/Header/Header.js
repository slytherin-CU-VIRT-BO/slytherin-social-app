import { FaBars } from "react-icons/fa";
import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./HeaderElements";

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="header">
      {Auth.loggedIn() ? (
        <>
          <Nav>
            <NavLink to="/">
              <h1>SlytherinSocial</h1>
            </NavLink>
            <Bars />
            <NavLink to="/" activestyle="false">
              Home
            </NavLink>
            <NavMenu>
              <NavLink to="/post" activestyle="false">
                Post
              </NavLink>
              <NavLink to="/profile" activestyle="false">
                Profile
              </NavLink>
              <NavBtnLink to="/" onClick={logout} activestyle="false">
                Logout
              </NavBtnLink>
            </NavMenu>
          </Nav>
        </>
      ) : (
        <>
          <Nav>
            <NavLink to="/">
              <h1>SlytherinSocial</h1>
            </NavLink>
            <Bars />
            <NavMenu>
              <NavLink to="/" activestyle="true">
                Home
              </NavLink>
              <NavLink to="/signup" activestyle="true">
                Signup
              </NavLink>
              <NavLink to="/login" activestyle="true">
                Login
              </NavLink>
            </NavMenu>
          </Nav>
        </>
      )}
    </header>
  );
}
