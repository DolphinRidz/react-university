import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/VideoPlayer/Videoplayer'
const App = () => {

  const[playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title  subTitle='Our Program' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title  subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title  subTitle='Testimonials' title='What They say'/>
      <Testimonial/>
      <Title  subTitle='Contact us' title='Get in touch'/>
      <Contact/>
      <Footer/>
      </div>
     <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App