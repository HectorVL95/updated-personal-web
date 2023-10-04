import uasLogo from './assets/uasLogo.png'
import erhsLogo from './assets/erhsLogo.png'

const DataEdu = [
  {
    id:0,
    institution: <a href='https://www.uas.edu.mx/'><img className='schoolLogo' src={uasLogo} alt='UAS logo'/></a>,
    date: "September 2013 - September 2017",
    location: "Culiacan, Sinaloa, Mexico",
    degree: [<b>Degree:</b>, " International Business"]
  },
  {
    id:1,
    institution: <a href='https://erhs.erusd.org/'><img className='schoolLogo' src={erhsLogo} alt='ERHS logo'/></a>,
    date: "January 2010 - June 2013",
    location: "Pico Rivera, California",
    degree: "High School Diploma"
  }
]

export default DataEdu;