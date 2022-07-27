import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="navbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/post">Post</Link>
      </li>
    </ul>
  </div>
  )
}
