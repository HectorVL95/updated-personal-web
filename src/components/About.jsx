import React from 'react';
import fallSnapshop from '../assets/fall-snapshot.jpg'
import bmxRider from '../assets/bmx-rider.jpg'
import libertyStatue from '../assets/liberty-statue.jpg'
import '../styles/About.scss'

const About = () => {
  return (
    <main className='About-page'>
      <section className='facts firs-fact'>
        <img className='about-snapshops' src={fallSnapshop} alt="Fall" />
        <p>Hi my name is Hector, I am 28 years old residing in the city of Chicago: I am a front-end web developer, a real estate investor and a BMX rider. I like to to learn new skills and test my luck on other business ventures. </p>
      </section>
      <section className='facts second-fact'>
        <img className='about-snapshops' src={bmxRider} alt="BMX rider" />
        <p>Out of thin air I can create beautiful websites that become the face of businesses and organizations in the digital realm.</p>
      </section>
      <section className='facts third-fact'>
        <img className='about-snapshops' src={libertyStatue} alt="Liberty Statue Pic" />
        <p> </p>
      </section>
    </main>
  );
}

export default About;