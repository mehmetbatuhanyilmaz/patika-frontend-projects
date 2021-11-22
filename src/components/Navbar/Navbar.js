import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  

  return (
    <>
    <nav className='navbartop'></nav>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Kraft.co
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
             Anasayfa
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Ürünler
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Hakkımızda - İletişim
            </Link>
          </li>

         
      
          
          <li className='nav-item'>
            <Link
              to='/favorites'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Favoriler <i class="fa fa-heart" aria-hidden="true"></i>
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/basket'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sepet <i class="fas fa-shopping-basket"></i>
            </Link>
          </li>
        </ul>
        
      </nav>
    </>
  );
}

export default Navbar;
