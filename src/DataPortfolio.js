import reactLogo from './assets/react.svg'
import jsLogo from './assets/js.svg'
import sassLogo from './assets/sass.svg'
import cssLogo from './assets/css.svg'
import htmlLogo from './assets/html.svg'
import schoolLogo from './assets/school-logo.png'
import negocioLogo from './assets/neogocio-logo.jpg'
import ldpLogo from './assets/ldp-logo.png'
import agricolaLogo from './assets/agricola-lib--big-logo.png'
import realLdpSection from './assets/real-ldp-section.png'
import cloneLdpSection from './assets/clone-ldp-section.png'
import mobileAgricola from './assets/mobile-screen-agricola.png'
import desktopAgricola from './assets/desktop-screen-agricola.png'
import agricolaGallery from './assets/screen-agricola-galley.png'
import footerSchoolWebsite from './assets/footer-school-web.png'

const DataPortfolio = [
  {
    id: 0,
    img: process.env.PUBLIC_URL + "/agricola-libertad.png",
    date:"August 2023",
    logo: <img className='agricola-logo web-logo' src={agricolaLogo} alt='Agricola Logo' title='Go to Description'/>,
    siteLink: "https://master--earnest-custard-c27bc0.netlify.app/",
    technologies:
    [
    <img className='tech-logo' src={reactLogo} alt='react'/>,
    <img className='tech-logo' src={sassLogo} alt='sass'/>
  ]
    ,
    name: "Agricola Libertad",
    description: "Website for a farm",
    longExplanation: 
    <section className='web-description'>
      <p>
        The first full fledge website created by using react, the website is for a ficticious farm in Mexico, it has several pages, embeded videos that show up if the screen width reaches a certain pixelage, as well elements changing position, styles. the website also includes pages that get conditionally rendered if certain elements get clicked, for example there is a gallery of the leadership of the organization, If I click certain member from the leadership team.
      </p>
      <div className='mobile-gallery-wrap'>
        <img src={agricolaGallery} className='agricola-mobile-screen' alt='Gallery Screen'/>
      </div>
      <p>
        Whenever I learn something new I practice by implementing it on my projects, due to this, this project has taken me a whooping four months to finish; It could have been completed earlier but I wanted certain features to work, it is hard when also I have a non dev full time job.
      </p>
      <div className='ldp-dif-wrap agricola-dif-wrap'>
        <img className='agricola-mobile-screen' src={mobileAgricola} alt='Mobile Screen'/>
        <img src={desktopAgricola} alt='Desktop Screen'/>
      </div>
    </section>
  },
  {
    id: 1,
    img: process.env.PUBLIC_URL + "/ldp-clone.jpg",
    date: "April 2023",
    logo: <img className='web-logo' src={ldpLogo} alt='LdpLogo' title='Go to Description'/>,
    siteLink: "https://hectorvl95.github.io/Liberty-Dental-Clone/",
    technologies:[
      <img className='tech-logo' src={htmlLogo} alt='html'/>,
      <img className='tech-logo' src={cssLogo} alt='css'/>,
      <img className='tech-logo' src={jsLogo} alt='javascript'/>
    ],
    name: "Liberty Dental Plan Clone Website",
    description: "1:1 Landing Page clone of Liberty Dental Plan website",
    longExplanation:       
    <section className='web-description'>
      <p>
        After getting my certification in the javascript course through Platzi I decided to create my first landing page and 1:1 clone, the purpose for this is to showcase my skills with HTML, CSS and Javascript, no frameworks were used.
      </p>
      <p>You can compare this project side by side and you will notice there are differences, these were made on purpose to set it apart from the original website.</p>
      <div className='ldp-dif-wrap'>
        <img src={cloneLdpSection} alt="Clone Section"/>
        <img src={realLdpSection} alt="Real Section"/>
      </div>
      <p>
        It was an extreme challenge to use javascript in this project as it was my first time ever using it. After many hours of banging my head to the keyboard, I was able to complete it; The site has interactivity where if you hover the mouse on certain elements new element will pop up, and where clicking an element in the footer will take you to the top of the site.
      </p>
      <p>
        Completing this project made me practice DOM manipulation, functions, querySelectors, add or remove certain styles by using javascript.
      </p>
  </section>
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "/school-website.png",
    date: "March 2023",
    logo: <img className='web-logo' src={schoolLogo} alt='School logo' title='Go to Description'/>,
    siteLink: "https://hectorvl95.github.io/School-website-js/",
    technologies:[
      <img className='tech-logo' src={htmlLogo} alt='html'/>,
      <img className='tech-logo' src={cssLogo} alt='css'/>,
      <img className='tech-logo' src={jsLogo} alt='javascript'/>
    ],
    name: "School Website",
    description: "Website for a ficticious School",
    longExplanation:
    <section className='web-description'>
      <p>
        After completing the Liberty Dental Clone, I wanted to create an original website that would be multipage. up to this point I had only been working on landing pages, after getting inspiration from other school websites I got to create mine by using images and making them interactive where if you would click on certain image something would show up, as well implementing media queries breakpoints to make the website usable on multiple device's screens.
      </p>
      <p>
        A feature of this website is that it includes a gallery section, the gallery uses the same picture, by clicking one of its items it pops up a carrousel where you can navigate other pictures by clicking on its left or right arrow.
      </p>
      <div className='ldp-dif-wrap'>
        <img src={footerSchoolWebsite} alt='Footer School Website'/>
      </div>
      <p>
        The footer on it has an iframe element, it is a map that was put on purpose to show I am capable of attaching other HTML files in the site.
      </p>
    </section>
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "/negocio-website.png",
    date: "February 2023",
    logo:<img className='negocio-logo web-logo' src={negocioLogo} alt='click here to learn about it' title='Go to Description'/>,
    siteLink: "https://hectorvl95.github.io/MultipagosPlandeAyala.github.io/",
    technologies:[
      <img className='tech-logo' src={htmlLogo} alt='html'/>,
      <img className='tech-logo' src={cssLogo} alt='css'/>,
    ],
    name: "Multipagos Plan de Ayala",
    description: "Static Landing Page",
    longExplanation: 
    <section className='web-description'>
      <p>
        This is my first page ever built, it does not have any interactivity as it is just a static page made with CSS and HTML, this was part of the course "Responsive Design: Mobile First Markup" from Platzi (Certification can be seen <a href='/ResumeEducation'>here</a> at the bottom) the purpose for this site was to get to practice my CSS and HTML skills, I followed the instructions on how to build it and then I did it all by myself 
      </p>
      <p>
        The site is for a real business in Mexico, it's line of business is utility billing, in this place people go pay their bills for a small fee. The owner was pleased with the end result.
      </p>
      <p>
        The website has several media queries breaking points, it scales according to the screen width of the device, with minimum width of 320px to a maximum of 1920px. I recommend using up to a 1080p screen as the website was done only with 1080p screens and mobiles screens on mind.
      </p>
     </section>
  }
]

export default DataPortfolio;