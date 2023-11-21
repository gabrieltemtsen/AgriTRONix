import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import './favicon.css';

  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
        <NavLink to="/">
          <img className='fav-nav' src='./mentorconnect1.ico' />
          </NavLink>
        <NavLink to='/'>
            Home 
          </NavLink>
          <NavLink to='/about'>
            Connect Your Wallet
          </NavLink>
          <NavLink to='/annual'>
             About project
          </NavLink>
    <NavLink to='/blogs'>
            About College
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;