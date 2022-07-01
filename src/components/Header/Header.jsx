import React from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <section className='header'>
      <div className='container'>
        <div className='header__wrapper'>
            <img src="./assets/logo-top.png" alt="logo" width="170px" height="48px"/>
          
            <ul className='nav__wrapper'>
              <li className='nav__item'>
                  How It Works
              </li>
              <li className='nav__item'>
                  Services
              </li>
              <li className='nav__item'>
                  Pricing
              </li>
              <li className='nav__item'>
                  FAQs
              </li>
            </ul>
          
          <div className='nav'>
            <div className='nav__item'>
              Login
            </div>
            <div>
              <button
                className='nav__toggle'
                aria-expanded={isOpen}
                aria-label={isOpen ? 'close menu' : 'menu'}
                type="button"
                onClick={handleMenuClick}
              >
                Request a Pickup
                <div className='hamburger'>
                  <div className='hamburger__box'>
                    <div className='hamburger__inner' />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='header-sm'>

          <div className="logo">
            <img alt="WashMix Logo" src='./assets/logo-top.png' width="158px" height="48px" />
          </div>

          <div className='hamburger-black hamburger'>
            <div className='hamburger__box'>
              <div className='hamburger__inner' />
              <div className='hamburger__inner' />
              <div className='hamburger__inner' />
            </div>
          </div>
            
        </div>
    </section>
    
  );
};

export default Header;