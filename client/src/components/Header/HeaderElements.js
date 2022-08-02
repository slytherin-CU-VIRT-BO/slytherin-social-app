import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #1f1f25;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;


justify-content: flex-start;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;


`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 500px) {
    display: block;
    position: absolute;
    top: 0.6em;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #1f1f25;
    background: rgb(195, 252, 184);

    // &:hover {
    //     transition: all 0.2s ease-in-out;
    //     background: rgb(195, 252, 184);
    //     color: #010606;
    //   }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 240px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  color: #000;
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding: 10px 22px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;


  // &:hover {
  //   transition: all 0.2s ease-in-out;
  //   background: #fff;
  //   color: #010606;
  // }
`;