import React from 'react';
import fallSnapshop from '../assets/fall-snapshot.jpg'
import bmxRider from '../assets/bmx-rider.jpg'
import libertyStatue from '../assets/liberty-statue.jpg'
import '../styles/About.scss'
import '../styles/styles.module.scss'


const About = () => {

  return (
    <main className='About-page'>
      <h1 className='page-title'>About</h1>
      <section className='facts 
      firs-fact'>
        <img className='about-snapshops' src={fallSnapshop} alt="Fall" />
        <div className='fact-text-wrap'>
          <p>Hi my name is Hector, I am 28 years old residing Culiacan, Sinaloa, Mexico; I am a front-end web developer, besides doing this trade I also like to ride BMX, write on my journal, travel and learn new skills or test my luck by taking chances on something new. </p>
        </div>
      </section>
      <section className='facts second-fact'>
        <img className='about-snapshops' src={bmxRider} alt="BMX rider" />
        <div className='fact-text-wrap'>
        <p>Prior to being a developer I was a customer service rep and office administrator for health and dental insurance companies, it was until december of 2022 when I started learning this craft and so far I have loved every bit of it, albeit frustrating at times but very rewarding.</p>
        </div>
      </section>
      <section className='facts third-fact'>
        <img className='about-snapshops' src={libertyStatue} alt="Liberty Statue Pic" />
        <div className='fact-text-wrap'>
          <p className='bold-description'></p>
          <p className='skills-description'>To complete my tasks as a developer I use the frameworks Next.js and Tailwind, the first one is where I put all the logic through Javascript and markup through HTML, the latter is where I do the styling in a much faster way than just using plain CSS, I strive to create websites as close as possible to their designs and have clients and employers get value out of my work.</p>
        </div>
      </section>
      <p className='about-bottom-text'>You can look at my creations by going over the "<a href="/Portfolio">Portfolio</a>" section on the main page or on the header</p>
    </main>
  );
}

export default About;