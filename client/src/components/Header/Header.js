import React from 'react'
import { Link } from 'react-router-dom'
// import NavBar from '../NavBar/NavBar'

import Auth from '../../utils/auth'

export default function Header() {
  const logout = event => {
    event.preventDefault()
    Auth.logout()
  }

  return (
    <header>
      <div>
        <div className="navbar">
          <div class="input-wrap panel">
            <i class="fas fa-search"></i>
            <input type="search" placeholder="Search" />
          </div>
          <nav class="menu">
            {Auth.loggedIn() ? (
              <>
              <ul>
              <li className="fas fa-home">
              <a href="/" onClick={logout}>
                  Logout 
               </a>
                </li>
                <li className="fas fa-home">
                  <Link className="fas fa-home" to="/">Home</Link>
                </li>
                <li className="fas fa-user">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="fas fa-plus">
                  <Link className="nav-link" to="/post">Post</Link>
                </li>
              </ul>
              </>
            ) : (
           
            <>
            <ul>
            <li className="fas fa-home">
              <Link className="nav-link" to="/login"> Login</Link>
              </li>
              <li className="fas fa-home">
              <Link className="nav-link" to="/signup"> Signup </Link>
              </li>
              <li className="fas fa-home">
                <Link className="fas fa-home" to="/">Home</Link>
              </li>
              <li className="fas fa-user">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="fas fa-plus">
                <Link className="nav-link" to="/post">Post</Link>
              </li>
            </ul>
            </>
             

            )}

          </nav>
        </div>
      </div>

    </header>
  );
}

