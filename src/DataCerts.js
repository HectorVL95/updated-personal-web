import python from './assets/curso-python.png'
import html from './assets/curso-html-css.png'
import mobileFirst from './assets/curso-mobile-first.png'
import js from './assets/curso-js.png'
import jsPractico from './assets/curso-js-practico.png'
import git from './assets/curso-git.png'
import npm from './assets/curso-npm.png'
import reactCourse from './assets/curso-react.png'

const DataCerts = [
  {
    id: 0,
    cert: <img className='curso' src={python} alt='Python Course'/>,
    name: "Python Course"
  },
  {
    id: 1,
    cert: <img className='curso' src={html} alt='HTML Course'/>,
    name: "Html & Css Course"
  },
  {
    id: 2,
    cert: <img className='curso' src={mobileFirst} alt='Mobile First Course'/>,
    name: "Mobile First Course"
  },
  {
    id: 3,
    cert: <img className='curso' src={js} alt='Javascript Course'/>,
    name: "Javascript Course"
  },
  {
    id: 4,
    cert: <img className='curso' src={jsPractico} alt='Practical Javascript Course'/>,
    name: "Practical Javascript Course"
  },
  {
    id: 5,
    cert: <img className='curso' src={git} alt='Git Course'/>,
    name: "Git & GitHub Course"
  },
  {
    id: 6,
    cert: <img className='curso' src={npm} alt='NPM Package Manager Course'/>,
    name: "NPM package handler Course"
  },
  {
    id: 7,
    cert: <img className='curso' src={reactCourse} alt='React.js Course'/>,
    name: "React.js Course"
  }
] 

export default DataCerts;