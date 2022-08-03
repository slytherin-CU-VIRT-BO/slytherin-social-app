import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaChild, FaMusic, FaGamepad, FaUmbrella, FaRegPaperPlane, FaShorts, FaImages, FaVideo } from 'react-icons/fa';
import './NavBar.css'
export default function NavBar() {
  return (
    <>
    <div className="wrapper">
      <div className="sidebar">
        <ul>
          <li>
            <a href="#">
              <FaRegPaperPlane />
              <h3>SlytherinPro</h3>
            </a>
          </li>
          <li>
            <a href="#">
              <FaVideo />
              <span>Shorts</span>
            </a>
          </li>
          <li>
          <a href="#">
              <FaImages />
              <span>Images</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaGamepad />
              <span>Gaming</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaMusic />
              <span>Music</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaChild />
              <span>Celebrations</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaUmbrella />
              <span>Settings</span>
            </a>
          </li>

        </ul>
      </div>
      </div>
 

   </>
  )
}