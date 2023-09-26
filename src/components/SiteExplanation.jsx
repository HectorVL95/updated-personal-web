import React from 'react'
import ldpLogo from '../assets/ldp-logo.png'
import '../styles/SiteExplanation.scss'
import ldpClone from '../assets/ldpClone.png'

const SiteExplanation = () => {
  return (
    <main className='SiteExplanation'>
      <div className="logo-wrap">
        <img className='web-logo' src={ldpLogo} alt="Liberty Logo" />
        <h1 className='page-title'>Liberty Dental Clone Website</h1>
        <p><b>Launched:</b> January 2023</p>
        <img className='web-screenshot' src={ldpClone} alt="" />
      </div>
    </main>
  );
}

export default SiteExplanation;