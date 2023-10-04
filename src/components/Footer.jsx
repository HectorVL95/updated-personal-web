import React from 'react';
import linkedIn from '../assets/linkedin-svgrepo-com.svg'
import gitHub from '../assets/github-svgrepo-com.svg'
import '../styles/Footer.scss'

const Footer = () => {


  return (
    <footer>
      <section className='footer-info'>
        <div className='social-section'>
          <a href="https://www.linkedin.com/in/hector-valenzuela-858436274/"><article className='social-wraps icon-wrap-one'><img className='social-icons' src={linkedIn} alt="LinkedIn" /></article></a>
          <a href="https://github.com/HectorVL95"><article className='social-wraps icon-wrap-two' ><img className='social-icons' src={gitHub} alt="GitHub" /></article></a>
        </div>
        <p className='all-rigths' >©2023 Hector Valenzuela, All rights reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;