import React from 'react'
import '../styles/Portfolio.scss'
import DataPortfolio from '../DataPortfolio'
import Project from './Project'

const Portfolio = ({Portfolio}) => {


  const projects = DataPortfolio.map(dataEl =>  {return <Project
    key={dataEl}
    dataEl={dataEl}/>
  })


  return (
    <main className='portfolio'>
      <h1 className='page-title'>Portfolio</h1>
      <p>Do you like what you see ?</p>
      <div>
        <button>Contact me</button>
      </div>
      <section className='projects-section'>
      {projects}
      </section>
    </main>

  );
}

export default Portfolio;