import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/icons8-arrow-24.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Your Journey to Success Begins Here.</h1>
            <p>"Welcome to React University, where your journey of discovery 
                and innovation begins. Our university is more than just a place 
                of learning; it is a vibrant community of thinkers, leaders, and 
                innovators. With a commitment to academic excellence, 
                we provide an environment that nurtures creativity, 
                critical thinking, and a passion for knowledge. Join us to explore your
                 potential, challenge your limits, and shape the future." </p>
                 <button className='.btn'>Explore more <img src={dark_arrow} alt="arrow image"/> </button>
        </div>

    </div>
  )
}

export default Hero