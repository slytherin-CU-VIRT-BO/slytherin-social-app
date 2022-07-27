import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

import Auth from '../../utils/auth'

export default function Header() {
    const logout = event => {
        event.preventDefault()
        Auth.logout()
    }

    return (
        <header>
          <div>
            <Link to="/">
              <h1>Slytherin Social</h1>
            </Link>
            <NavBar />
            <nav>
              {Auth.loggedIn() ? (
                <>
                  <Link to="/profile">Me</Link>
                  <a href="/" onClick={logout}>
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </>
              )}
            </nav>
          </div>
        </header>
      );
    }
