import { FaBars } from "react-icons/fa";
import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./HeaderElements";

const Header = () => {
  const { loading, error, data } = useQuery(GET_ME,{skip:!Auth.loggedIn()});
  
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const renderPage = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Something Bad Happened</p>;
    } else {
      return (
        <header className="header">
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
                  <NavLink to="/newpost" activestyle="true">
                    Post
                  </NavLink>
                  <NavLink 
                    to={{
                      pathname:"/profile",
                      profileProps: {
                        username: data.me.username
                      }
                    }}
                    activestyle="true">
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
  };

  return <div>{renderPage()}</div>;
};

export default Header;

