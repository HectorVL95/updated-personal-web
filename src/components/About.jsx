import React from 'react';
import fallSnapshop from '../assets/fall-snapshot.jpg'
import bmxRider from '../assets/bmx-rider.jpg'
import libertyStatue from '../assets/liberty-statue.jpg'
import '../styles/About.scss'

const About = () => {
  return (
    <main className='About-page'>
      <section className='facts 
      firs-fact'>
        <h1 className='page-title'>About</h1>
        <img className='about-snapshops' src={fallSnapshop} alt="Fall" />
        <p>Hi my name is Hector, I am 28 years old residing in the city of Chicago: I am a front-end web developer, a real estate investor and a BMX rider. I like to to learn new skills and test my luck in other business ventures. </p>
      </section>
      <section className='facts second-fact'>
        <img className='about-snapshops' src={bmxRider} alt="BMX rider" />
        <p>Out of thin air I can create beautiful websites that become the face of businesses and organizations in the digital realm.</p>
      </section>
      <section className='facts third-fact'>
        <img className='about-snapshops' src={libertyStatue} alt="Liberty Statue Pic" />
        <p className='bold-description'>A front-end developer knows no bounds. And when they find one they cross it without hesitation, boldly going into the unknown to return richer from it.</p>
        <p className='skills-description'>To complete my tasks as a developer I use the following weapons, only those that have acquired knowledge on how to handle them will make beautiful creations. the essentials for these are HTML, CSS and Javascript, basically this is all you need to handle yourself. To make it a lot easier and faster I have acquired the skills to be able to handle React.js and the CSS precompiler "Sass".</p>
        <p>You can look at my creations by going over the "Portfolio" section on the main page or on the header</p>
      </section>
    </main>
  );
}

export default About;