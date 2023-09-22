import uasLogo from './assets/uasLogo.png'
import erhsLogo from './assets/erhsLogo.png'

export default [
  {
    id:0,
    institution: <a href='https://www.uas.edu.mx/'><img className='schoolLogo' src={uasLogo}/></a>,
    date: "September 2013 - September 2017",
    location: "Culiacan, Sinaloa, Mexico",
    degree: [<b>Degree:</b>, " International Business"]
  },
  {
    id:1,
    institution: <a href='https://erhs.erusd.org/'><img className='schoolLogo' src={erhsLogo}/></a>,
    date: "January 2010 - June 2013",
    location: "Pico Rivera, California",
    degree: "High School Diploma"
  }
]