import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title  subTitle='Our Program' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title  subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title  subTitle='Testimonials' title='What They say'/>
      <Testimonial/>
      </div>
     
    </div>
  )
}

export default App