import React, { useState } from 'react';
import '../styles/Header.scss'
import FeDesign from '../assets/FE-design.png'
import burguerMenu from '../assets/menu-list-1527-svgrepo-com.svg'
import ModalOverlay from './ModalOverlay';
import cancelMenu from '../assets/cancel2-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom';


const Header = ({ togglecoverBody }) => {

  const [showNavbar, setShowNavbar] = useState(false)
  const [btnIcon, setBtnIcon] = useState(burguerMenu)
  const defaultSource = btnIcon === burguerMenu;

  function toggleNavbar(){
    setShowNavbar(!showNavbar)
    
    const headerBtn = document.querySelector('.header-btn')
    headerBtn.style.zIndex = (10)

    setBtnIcon(defaultSource ? cancelMenu : burguerMenu)

    }
  
  let navigate = useNavigate()
  function changeRoute(){
    navigate('/')
  }

  return (
    <header>
      <section className='header-info'>
        <img onClick={changeRoute} className='header-logo' src={FeDesign} alt="" />
        {showNavbar && 
        (<>
          <nav className='header-navbar'>
            <ul className='website-sections'>
              <li>About</li>
              <li>Portfolio</li>
              <li>Resume / Education</li>
              <li>Contact</li>
            </ul>
          </nav> <ModalOverlay/>
        </>
        )}
        <button onClick={() => {toggleNavbar(); togglecoverBody();}}
        className='header-btn'><img className='btn-icon' src={btnIcon} alt="Button" /></button>
      </section>
    </header>
    
  );
}

export default Header;