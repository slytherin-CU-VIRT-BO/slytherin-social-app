import { FaBars } from 'react-icons/fa';
import "./Header.css";
import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utils/auth'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './HeaderElements';


export default function Header() {
  const logout = event => {
    event.preventDefault()
    Auth.logout()
  }

  return (
    <header class="article">
      {Auth.loggedIn() ? (
        <>
        <Nav>
        <NavLink to='/'>
          <h1>SlytherinSocial</h1>
        </NavLink>
        <Bars />
        <NavLink to='/' activeStyle>
            Home
          </NavLink>
        <NavMenu>
          <NavLink to='/post' activeStyle>
            Post
          </NavLink>
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
          
          <NavBtnLink to="/" onClick={logout} activeStyle>
            Logout
          </NavBtnLink>
        </NavMenu>
        
      </Nav>
        
        </>
      ) : (

        <>
          <Nav>
        <NavLink to='/'>
          <h1>SlytherinSocial</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activestyle>
            Home
          </NavLink>
          <NavLink to='/signup' activestyle>
            Signup
          </NavLink>
          <NavBtnLink to='/login' activestyle>
            Login
          </NavBtnLink>
        </NavMenu>
      </Nav>
          </>
          )}
    </header >
  );
}
