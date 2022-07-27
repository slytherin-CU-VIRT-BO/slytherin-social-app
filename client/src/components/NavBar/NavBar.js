import React from 'react'

export default function NavBar() {
  return (
    <div className="navbar" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/profile">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/post">Post</a>
      </li>
    </ul>
  </div>
  )
}
