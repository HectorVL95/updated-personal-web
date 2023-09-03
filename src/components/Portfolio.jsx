import React from 'react'
import '../styles/Portfolio.scss'
import ldp from '../assets/ldp-clone.jpg'

const Portfolio = () => {
  return (
    <main className='portfolio'>
      <h1>Portfolio</h1>
      <p>Do you like what you see ?</p>
      <button>Contact me</button>
      <section className='projects-section'>
        <article className='project'>
          <div className='web-container'>
            <img src={ldp} alt="Liberty Dental Clone" />
          </div>
          <div className='date-link-wrap'>
            <p>April 2023</p>
            <a href="https://hectorvl95.github.io/Liberty-Dental-Clone/">Visit Site</a>
          </div>
          <div className='website-info-wrap'>
            <p className='web-name'>Liberty Dental Plan Clone Website</p>
            <p className='web-subtitle'>1:1 clone website of liberty dental</p>
          </div>
        </article>
        <article className='project'> 

        </article>
        <article className='project'>

        </article>
        <article className='project'>

        </article>
      </section>
    </main>
  );
}

export default Portfolio;