import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
import './favicon.css';

  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
        <NavLink to="/">
          <img className='fav-nav' src='./rtfight.png' alt='icon'/>
          </NavLink>
        <NavLink to='/'>
            Home 
          </NavLink>
          <NavLink to='/about'>
            Connect Your Wallet
          </NavLink>
          <NavLink to='/annual'>
             About RTFight
          </NavLink>
    <NavLink to='/blogs'>
            About RTFChain
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;