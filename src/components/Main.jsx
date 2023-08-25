import React from 'react';
import '../styles/Main.scss';
import snapshot from '../assets/face-snapshot.jpg'

const Main = () => {
  return (
    <main className='main'>
      <section className='section'>
        <h1 className='page-title'>Hector Valenzuela</h1>
        <h3 className='page-subtitle'>Front-End Developer</h3>
      </section>
      <section className='about'>
        <div className='snapshot-description'>
          <img className='snapshot' src={snapshot} alt="" />
          <ul className='occupation-list'>
            <li>Front-End Developer</li>
            <li>Real Estate Investor</li>
            <li>Customer Service Success Exec</li>
            <li>A hustler</li>
          </ul>
        </div>
        <div className='about-story'>
        <p>Hi, I am Hector Valenzuela: Front-End Developer, a real state investor and avid BMX rider, overall someone who likes to learn new things</p>

        <p>
        Out of thin air I am able to create interactive beautiful things apalling to the human eye . My go to tools for work are HTML, CSS, Javascript; Of Course to speed things up I like using React and Sass. 
        </p>

        <p className='adversity'>A front-end developer and just as any developer in general will not let himself be defeated or discouraged too easily upon encountering adversity.</p>
        </div>
      </section>
    </main>
  );
}

export default Main;