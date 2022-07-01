import React, { useEffect, useState} from 'react';
import Header from './Header';

const HeaderTransperent = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  const showModal = () => {

  }
  return (
    <section className='header-transperent'>
      <div className='container'>
        <div className='header__wrapper'>

          <div className="logo">
            <img alt="WashMix Logo" src='./logo.svg' width="48px" height="48px" />
            <span className="text-logo">
              washmix<label>&#174;</label>
            </span>
          </div>

          <div className="modal">

          </div>

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
            <img alt="WashMix Logo" src='./logo.svg' width="48px" height="48px" />
            <span className="text-logo">
              washmix<label>&#174;</label>
            </span>
          </div>

          <div className='hamburger' onClick={()=> showModal()}>
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

export default HeaderTransperent;