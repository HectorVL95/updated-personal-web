import React from 'react';
import '../styles/Main.scss';
import '../styles/styles.module.scss'
import snapshot from '../assets/face-snapshot.jpg';
import { useNavigate } from 'react-router-dom';


const Main = () => {

  let navigate = useNavigate()

  function goAbout(){
    let path='/About'
    navigate(path)
  }

  function goPortfolio(){
    let path='/Portfolio'
    navigate(path)
  }

  function goResume(){
    let path='/ResumeEducation'
    navigate(path)
  }

  function goContact(){
    let path='/Contact'
    navigate(path)
  }



  return (
    <main className='main-page'>
      <section className='title'>
        <h1 className='page-title'>Hector Valenzuela</h1>
      </section>
      <section className='about'>
        <div className='snapshot-description' title="Go to LinkedIn profile">
          <a href="https://www.linkedin.com/in/hector-valenzuela-8b016416a/"><img className='snapshot' src={snapshot} alt="snapshot" /></a>
          <ul className='occupation-list'>
            <li>Front-End Developer</li>
          </ul>
        </div>
        <div className='section-buttons'>
          <div className='btns-div'>
            <button onClick={goAbout} className='page-btn'>About</button>
            <button onClick={goPortfolio} className='page-btn'>Portfolio</button>
            <button onClick={goResume} className='page-btn'>Resume / Education</button>
            <button onClick={goContact} className='page-btn'>Contact</button>
          </div>
      </div>
      </section>
    </main>
  );
}

export default Main;