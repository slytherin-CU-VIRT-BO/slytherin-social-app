import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <main>
        <nav className="navbar">
          <div className="input-wrap panel">
            <i className="fas fa-search"></i>
            <input type="search" placeholder="Have a search" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <i className="fas fa-user">
                  <Link to="/profile"></Link>
                </i>
              </li>
              <li>
                <i className="fas fa-home">
                  <Link to="/"></Link>
                </i>
              </li>
              <li>
                <i className="fas fa-bell"></i>
              </li>
              <li>
                <i className="fas fa-plus">
                  <Link to="/post"></Link>
                </i>

              </li>
            </ul>
          </div>
        </nav>
      </main></>
  )
}
