import React from 'react'
import ldpLogo from '../assets/ldp-logo.png'
import '../styles/LdpExplanation.scss'
import ldpClone from '../assets/ldpClone.png'
import cloneLdpSection from '../assets/clone-ldp-section.png'
import realLdpSection from '../assets/real-ldp-section.png'


const LdpExplanation = () => {
  return (
    <main className='SiteExplanation'>
      <div className="logo-wrap">
        <img className='web-logo' src={ldpLogo} alt="Liberty Logo" />
        <h1 className='page-title'>Liberty Dental Clone Website</h1>
        <p>Visit <a href="https://hectorvl95.github.io/Liberty-Dental-Clone/">Here</a></p>
        <p><b>Launched:</b> January 2023</p>
        <img className='web-screenshot' src={ldpClone} alt="Web" />
      </div>
      <section className='web-description'>
        <p>After getting my certification in the javascript course through Platzi I decided to create my first landing page and 1:1 clone, the purpose for this is to showcase my skills with HTML, CSS and Javascript, no frameworks were used.</p>
        <br />
        <p>You can compare this project side by side and you will notice there are differences, these were made on purpose to set it apart from the original website.</p>
        <br />
        <div className='ldp-dif-wrap'>
          <img src={cloneLdpSection} alt="Clone Section" />
          <img src={realLdpSection} alt="Real Section"/>
        </div>
        <br />
        <p>It was an extreme challenge to use javascript in this project as it was my first time ever using it. After many hours of banging my head to the keyboard, I was able to build it.</p>
        <br />
        <p>Completing this project made me practice DOM manipulation, functions, querySelectors, add or remove certain styles by using javascript, etc. </p>
      </section>
    </main>
  );
}

export default LdpExplanation;