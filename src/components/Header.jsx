import React from 'react';

const Header = ({showHeader}) => {
  if(!showHeader){
    return null;
  }
  return (
    <header>
      <section className='header-info'>
        <ul className='website-sections'>
          <li>About</li>
          <li>Portfolio</li>
          <li>Resume / Education</li>
          <li>Contact</li>
        </ul>
      </section>
    </header>
    
  );
}

export default Header;