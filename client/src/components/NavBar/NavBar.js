import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
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
 

   </>
  )
}