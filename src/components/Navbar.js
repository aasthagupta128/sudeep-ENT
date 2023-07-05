import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';



export default function Navbar()
{
  const [isOverlayOpen, setOverlayOpen] = useState(false);


  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };
  
  const closeOverlay = () => {
    setOverlayOpen(false);
  };


  return (
    <div  className='nav-overlay'>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src="LOGO1.png" alt="SUDEEP ENT" />
          </a>
        </div>
        <div className={`hamburger ${isOverlayOpen ? 'hide' : ''}`} onClick={toggleOverlay}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className={`close-icon ${isOverlayOpen ? '' : 'hide'}`} onClick={toggleOverlay}>
          <img src="close-icon.png" alt="Close" />
        </div>
        <div className={`links ${isOverlayOpen ? 'open' : ''}`}>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" onClick={closeOverlay}>About</NavLink>
          <NavLink to="/facilities" activeClassName="active">Facilities</NavLink>
          <NavLink to="/mention"  activeClassName="active">Mentions</NavLink>
          <HashLink to="/about#contact-us" activeClassName="active">Contact</HashLink>
        </div>
      </nav>
    <div className={`overlay ${isOverlayOpen ? 'open' : ''}`}>
        <div className="overlay-links">
        <NavLink to="/" onClick={closeOverlay}>Home</NavLink>
          <NavLink to="/about" onClick={closeOverlay}>About</NavLink>
          <NavLink to="/facilities" onClick={closeOverlay}>Facilities</NavLink>
          <NavLink to="/mention" onClick={closeOverlay}>Mentions</NavLink>
          <HashLink to="/about#contact-us"  onClick={closeOverlay}>Contact</HashLink>
        </div>
      </div>
    </div>
  );
 
}
