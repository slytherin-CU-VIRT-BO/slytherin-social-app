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
    <header className="article">
      {Auth.loggedIn() ? (
        <>
          <Nav>
            <NavLink to="/">
              <h1>SlytherinSocial</h1>
            </NavLink>
            <Bars />
            <NavLink to="/" activestyle="true">
              Home
            </NavLink>
            <NavMenu>
              <NavLink to="/post" activestyle="true">
                Post
              </NavLink>
              <NavLink to="/profile" activestyle="true">
                Profile
              </NavLink>

              <NavBtnLink to="/" onClick={logout} activestyle="true">
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
              <NavBtnLink to="/login" activestyle="true">
                Login
              </NavBtnLink>
            </NavMenu>
          </Nav>
        </>
      )}
    </header>
  );
}
