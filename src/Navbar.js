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
          <img className='fav-nav' src='./tronx.png' alt='icon'/>
          </NavLink>
        <NavLink to='/'>
            Home 
          </NavLink>
          <NavLink to='/about'>
            Connect Your Wallet
          </NavLink>
          <NavLink to='/annual'>
             About AgriTRONix
          </NavLink>
    <NavLink to='/blogs'>
            TRON network
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;