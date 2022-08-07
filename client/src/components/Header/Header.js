import { FaBars } from "react-icons/fa";
import "./Header.css";
import React, { useState } from "react";

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
import NewPost from "../NewPost/NewPost";

const Header = () => {
  const { loading, error, data } = useQuery(GET_ME, { skip: !Auth.loggedIn() });
  const [showModal, setShowModal] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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
                  <NavLink
                    activestyle="true"
                    to="/profile"
                    state={{ username: data.me.username }}
                  >
                    Profile
                  </NavLink>
                  <NavBtnLink to="/" onClick={logout} activestyle="false">
                    Logout
                  </NavBtnLink>
                  <NavBtnLink to="/newpost "onClick={() => toggleModal()} activestyle="false">
                    Add New Post
                  </NavBtnLink>
                </NavMenu>

                {/* <button onClick={() => toggleModal()}>Add New Post</button> */}
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
          )
          }
        </header >
      );
    }
  };

  return (
    <div>
      {renderPage()}
      {showModal && <NewPost onClose={toggleModal} />}
    </div>
  );
};

export default Header;
