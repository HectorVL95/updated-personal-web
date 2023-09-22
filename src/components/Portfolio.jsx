import React from 'react'
import '../styles/Portfolio.scss'
import DataPortfolio from '../DataPortfolio'
import Project from './Project'
import { useNavigate } from 'react-router-dom';

const Portfolio = ({Portfolio}) => {


  const projects = DataPortfolio.map(dataEl =>  {return <Project
    key={dataEl}
    dataEl={dataEl}/>
  })

  let navigate = useNavigate()

  function goContact(){
    let path='/Contact'
    navigate(path)
  }

  return (
    <main className='portfolio'>
      <h1 className='page-title'>Portfolio</h1>
      <p>Do you like what you see ?</p>
      <div>
        <button onClick={goContact}>Contact me</button>
      </div>
      <section className='projects-section'>
      {projects}
      </section>
    </main>

  );
}

export default Portfolio;