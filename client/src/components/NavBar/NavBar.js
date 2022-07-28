import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <><div className="wrapper">
      <nav className="sidebar">
        <a href="#" className="brand">
          <h1>SlytherinSocial</h1>
        </a>
        <ul>
          <li>
            <a href="#">
              <i className="fa-solid fa-house"></i>
              <span>Homepage</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-signs-post"></i>
              <span>Navigation</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-user-group"></i>
              <span>Friends</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-camera-retro"></i>
              <span>Camera</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-images"></i>
              <span>Images</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-sliders"></i>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-video"></i>
              <span>Video</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-gamepad"></i>
              <span>Games</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-music"></i>
              <span>Music</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-child-reaching"></i>
              <span>Celebrations</span>
            </a>
          </li>
        </ul>
        <ul className="help">
          <li>
            <a href="#">
              <i className="fa-solid fa-cloud-question"></i>
              <span>FAQ's</span>
            </a>
          </li>
        </ul>
      </nav>
    </div><main>
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
