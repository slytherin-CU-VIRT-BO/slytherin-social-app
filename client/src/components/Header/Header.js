import React from 'react'
import { Link } from 'react-router-dom'
// import NavBar from '../NavBar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Auth from '../../utils/auth'


export default function Header() {
  const logout = event => {
    event.preventDefault()
    Auth.logout()
  }

  return (
    <header>
      <div className="navbar">
        <div>
          <div class="input-wrap panel">
            <ul>
              <li>
                <FontAwesomeIcon icon="search" />
              </li>
              <li>
                <input class="icon" type="search" placeholder="Search" />
              </li>
            </ul>
          </div>
        </div>
        <nav class="menu">
          {Auth.loggedIn() ? (
            <>
              <ul>
                <li className="fas fa">
                  <a href="/" onClick={logout}>
                    Logout
                  </a>
                </li>
                <li className="fas fa-home">
                  <FontAwesomeIcon icon="home" />
                  <Link className="fas fa-home" to="/">  Home</Link>
                </li>
                <li className="fas fa-user">
                  <FontAwesomeIcon icon="user" />
                  <Link className="nav-link" to="/profile">  Profile</Link>
                </li>
                <li className="fas fa-plus">
                <FontAwesomeIcon icon="plus" />
                  <Link className="nav-link" to="/post">  Post</Link>
                </li>
              </ul>
            </>
          ) : (

            <>
              <ul>
                <li>
                  <Link className="nav-link" to="/login"> Login</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/signup"> Signup </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon="home" />
                  <Link className="icon" to="/">  Home</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon="user" />
                  <Link className="icon" to="/profile">  Profile</Link>
                </li>
                <li>
                <FontAwesomeIcon icon="plus" />
                  <Link className="icon" to="/post">  Post</Link>
                </li>
              </ul>
            </>


          )}

        </nav>
      </div>


    </header>
  );
}

