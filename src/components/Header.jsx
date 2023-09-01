import React, { useState } from 'react';
import '../styles/Header.scss'
import FeDesign from '../assets/FE-design.png'
import burguerMenu from '../assets/menu-list-1527-svgrepo-com.svg'
import modalOverlay from './modalOverlay';

const Header = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  function handleClick(event){
    setShowNavbar(!showNavbar)
  }

  return (
    <header>
      <section className='header-info'>
        <img className='header-logo' src={FeDesign} alt="" />
        {showNavbar && 
        (<>
          <nav className='header-navbar'>
            <ul className='website-sections'>
              <li>About</li>
              <li>Portfolio</li>
              <li>Resume / Education</li>
              <li>Contact</li>
            </ul>
          </nav> <modalOverlay/>
        </>)}
        <button onClick={handleClick}
        className='header-btn'><img className='burgerImg' src={burguerMenu} alt="" /></button>
      </section>
    </header>
    
  );
}

export default Header;