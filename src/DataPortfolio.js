import reactLogo from './assets/react.svg'
import jsLogo from './assets/js.svg'
import sassLogo from './assets/sass.svg'
import cssLogo from './assets/css.svg'
import htmlLogo from './assets/html.svg'
import schoolLogo from './assets/school-logo.png'
import negocioLogo from './assets/neogocio-logo.jpg'
import ldpLogo from './assets/ldp-logo.png'
import agricolaLogo from './assets/agricola-lib--big-logo.png'

export default [
  {
    id: 0,
    img: process.env.PUBLIC_URL + "/agricola-libertad.png",
    date:"August 2023",
    logo: <img className='agricola-logo' src={agricolaLogo}/>,
    siteLink: "",
    technologies:
    [
    <img className='tech-logo' src={reactLogo}/>,
    <img className='tech-logo' src={sassLogo}/>
  ]
    ,
    name: "Agricola Libertad",
    description: "Website for a farm"
  },
  {
    id: 1,
    img: process.env.PUBLIC_URL + "/ldp-clone.jpg",
    date: "April 2023",
    logo: <img src={ldpLogo}/>,
    siteLink: "https://hectorvl95.github.io/Liberty-Dental-Clone/",
    technologies:[
      <img className='tech-logo' src={htmlLogo}/>,
      <img className='tech-logo' src={cssLogo}/>,
      <img className='tech-logo' src={jsLogo}/>
    ],
    name: "Liberty Dental Plan Clone Website",
    description: "1:1 Landing Page clone of Liberty Dental Plan website"
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "school-website.png",
    date: "March 2023",
    logo: <img src={schoolLogo}/>,
    siteLink: "https://hectorvl95.github.io/School-website-js/",
    technologies:[
      <img className='tech-logo' src={htmlLogo}/>,
      <img className='tech-logo' src={cssLogo}/>,
      <img className='tech-logo' src={jsLogo}/>
    ],
    name: "School Website",
    description: "Website for a ficticious School"
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "negocio-website.png",
    date: "February 2023",
    logo:<img className='negocio-logo' src={negocioLogo} alt='click here to learn about it'/>,
    siteLink: "https://hectorvl95.github.io/MultipagosPlandeAyala.github.io/",
    technologies:[
      <img className='tech-logo' src={htmlLogo}/>,
      <img className='tech-logo' src={cssLogo}/>,
    ],
    name: "Multipagos Plan de Ayala",
    description: "Static Landing Page"
  }
]
