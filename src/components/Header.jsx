import React, { useEffect, useState } from 'react';
import '../styles/Header.scss'
import FeDesign from '../assets/FE-design.png'
import burguerMenu from '../assets/menu-list-1527-svgrepo-com.svg'
import ModalOverlay from './ModalOverlay';
import cancelMenu from '../assets/cancel2-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom';


const Header = ({ togglecoverBody }) => {

  const [showNavbar, setShowNavbar] = useState(false)
  const [btnIcon, setBtnIcon] = useState(burguerMenu)
  const defaultSource = burguerMenu;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = () => {
      const newScreenWidth = window.innerWidth
      setScreenWidth(newScreenWidth);
    

    if (newScreenWidth > 900){
      setShowNavbar(false)
      document.body.classList.remove('no-scroll')
    }
  }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(()=> {
    if(screenWidth > 900){
      setBtnIcon(defaultSource)
    }
  }, [screenWidth, defaultSource])

  function toggleNavbar(){
    setShowNavbar(!showNavbar)


    if(screenWidth <= 900){
      setBtnIcon(btnIcon === burguerMenu ? cancelMenu : burguerMenu)
    }
      
    
    }
  
  let navigate = useNavigate()
  function changeRoute(){
    navigate('/')
  }

  function goAbout(){
    let path='/About'
    navigate(path)
    setShowNavbar(!showNavbar)
    setBtnIcon(btnIcon === burguerMenu ? cancelMenu : burguerMenu)
    document.body.classList.remove('no-scroll')
  }

  function goPortfolio(){
    let path='/Portfolio'
    navigate(path)
    setShowNavbar(!showNavbar)
    setBtnIcon(btnIcon === burguerMenu ? cancelMenu : burguerMenu)
    document.body.classList.remove('no-scroll')
  }

  function goResume(){
    let path='/ResumeEducation'
    navigate(path)
    setShowNavbar(!showNavbar)
    setBtnIcon(btnIcon === burguerMenu ? cancelMenu : burguerMenu)
    document.body.classList.remove('no-scroll')
  }

  function goContact(){
    let path='/Contact'
    navigate(path)
    setShowNavbar(!showNavbar)
    setBtnIcon(btnIcon === burguerMenu ? cancelMenu : burguerMenu)
    document.body.classList.remove('no-scroll')
  }

  return (
    <header>
      <section className='header-info'>
        <img onClick={changeRoute} className='header-logo' src={FeDesign} alt="" />
        {showNavbar && screenWidth <= 900 &&
        (<>
          <nav className='header-navbar '>
            <ul className='website-sections'>
              <li onClick={goAbout}>About</li>
              <li onClick={goPortfolio}>Portfolio</li>
              <li onClick={goResume}>Resume / Education</li>
              <li onClick={goContact}>Contact</li>
            </ul>
          </nav> <ModalOverlay/>
        </>
        )}
        {screenWidth >= 900 ?  (
          <nav className='header-navbar inactive-nav'>
            <ul className='website-sections'>
              <li onClick={goAbout}>About</li>
              <li onClick={goPortfolio}>Portfolio</li>
              <li onClick={goResume}>Resume / Education</li>
              <li onClick={goContact}>Contact</li>
            </ul>
          </nav>
          ) :  (<button onClick={() => {toggleNavbar(); togglecoverBody();}}
        className='header-btn'><img className='btn-icon' src={btnIcon} alt="Button" /></button>) 

        }
      </section>
    </header>
    
  );
}

export default Header;