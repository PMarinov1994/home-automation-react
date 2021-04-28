import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">


          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link to='/outside' className='nav-links' onClick={closeMobileMenu}>
                Outside
              </Link>
            </li>

            <li className="nav-item">
              <Link to='/living-room' className='nav-links' onClick={closeMobileMenu}>
                Living Room
              </Link>
            </li>

            <li className="nav-item">
              <Link to='/bed-room' className='nav-links' onClick={closeMobileMenu}>
                First Bed Room
              </Link>
            </li>

            <li className="nav-item">
              <Link to='/bed-room-2' className='nav-links' onClick={closeMobileMenu}>
                Second Bed Room
              </Link>
            </li>

          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar
