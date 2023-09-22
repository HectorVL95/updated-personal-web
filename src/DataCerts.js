import python from './assets/curso-python.png'
import html from './assets/curso-html-css.png'
import mobileFirst from './assets/curso-mobile-first.png'
import js from './assets/curso-js.png'
import jsPractico from './assets/curso-js-practico.png'
import git from './assets/curso-git.png'
import npm from './assets/curso-npm.png'
import reactCourse from './assets/curso-react.png'

export default [
  {
    id: 0,
    img: <img className='curso' src={python}/>,
    name: "Python Course"
  },
  {
    id: 1,
    img: <img className='curso' src={html}/>,
    name: "Html & Css Course"
  },
  {
    id: 2,
    img: <img className='curso' src={mobileFirst}/>,
    name: "Mobile First Course"
  },
  {
    id: 3,
    img: <img className='curso' src={js}/>,
    name: "Javascript Course"
  },
  {
    id: 4,
    img: <img className='curso' src={jsPractico}/>,
    name: "Practical Javascript Course"
  },
  {
    id: 5,
    img: <img className='curso' src={git}/>,
    name: "Git & GitHub Course"
  },
  {
    id: 6,
    img: <img className='curso' src={npm}/>,
    name: "NPM package handler Course"
  },
  {
    id: 7,
    img: <img className='curso' src={reactCourse}/>,
    name: "React.js Course"
  }
] 