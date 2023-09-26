import React from 'react'
import ldpLogo from '../assets/ldp-logo.png'
import '../styles/SiteExplanation.scss'

const SiteExplanation = () => {
  return (
    <main className='SiteExplanation'>
      <div className="logo-wrap">
        <img className='web-logo' src={ldpLogo} alt="Liberty Logo" />
        <h1>Liberty Dental Clone Website</h1>
        <p><b>Launched:</b> January 2023</p>
      </div>
    </main>
  );
}

export default SiteExplanation;