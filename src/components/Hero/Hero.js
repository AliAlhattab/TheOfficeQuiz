import React from 'react';
import './Hero.scss';
import hero from '../../assets/images/hero.jpg'

function Hero() {
  return (
    <section className='hero'>
      <div className='hero__title'>
      <h1 className='hero__text'>The Office Quiz Game!</h1>
      <h3 className='hero__subtext'>You think you know The Office?</h3> 
      </div>
      <div className='hero__logo'>
      <img className='hero__image' src={hero} alt='The Office Hero Image'/>
      </div>
    </section>
  )
}

export default Hero