import React, {useEffect} from 'react';
import '../styles/Main.scss';
import snapshot from '../assets/face-snapshot.jpg'

const Main = () => {
  return (
    <main className='main-page'>
      <section className='title'>
        <h1 className='page-title'>Hector Valenzuela</h1>
        <h3 className='page-subtitle'>Front-End Developer</h3>
      </section>
      <section className='about'>
        <div className='snapshot-description'>
          <img className='snapshot' src={snapshot} alt="snapshot" />
          <ul className='occupation-list'>
            <li>Front-End Developer</li>
            <li>Real Estate Investor</li>
            <li>Customer Service Success Exec</li>
            <li>A hustler</li>
          </ul>
        </div>
        <div className='section-buttons'>
          <div className='btns-div'>
            <button className='page-btn'>About</button>
            <button className='page-btn'>Portfolio</button>
            <button className='page-btn'>Resume / Education</button>
            <button className='page-btn'>Contact</button>
          </div>
      </div>
      </section>
    </main>
  );
}

export default Main;