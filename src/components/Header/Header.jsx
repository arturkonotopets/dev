import React from 'react';
import './Header.css';

const Header = () => {
 
  return (
      <div className='header'>
        <div className='header__wrapper'>
        <link to="/" className='header__brand'>
          {/* <img alt="Logo" src='./public/icons/logo-top.png' style={{ width: "170px", height: "48px" }}/> */}
        </link>
        <nav className='nav'>
          <button className='nav__toggle'>
            <div className='hamburger'>
              <div className='hamburger__box'>
                <div className='hamburger__inner'/>
              </div>
            </div>
          </button>
          <ul className='nav__wrapper'>
            
            <li className='nav__item'>
              <>
                How It Works
              </>
            </li>
            <li className='nav__item'>
              <>
                Services
              </>
            </li>
            <li className='nav__item'>
              <>
                FAQs
              </>
            </li>
            <>
            <li className='nav__item'>
                Login
            </li>
            <li className='nav__item'>
                Request Pickup
            </li>
            </>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;