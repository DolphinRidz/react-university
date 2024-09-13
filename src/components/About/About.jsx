import React from 'react'
import './About.css'
import about_img from "../../assets/about.jpg"
import play_icon from "../../assets/play.png"
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img className='about-img' src={about_img} alt="" />
            <img className='play-icon' src={play_icon} alt="" onClick={setPlayState}/>
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>A prestigious institution known for its innovative research, and vibrant multicultural community.</h2>
            <p>React University is a prestigious academic institution nestled 
                on the serene shores of a sprawling lake, surrounded by lush forests 
                and rolling hills. Established over a century ago, the university 
                is known for its breathtaking campus, which seamlessly blends historic
                 architecture with state-of-the-art facilities. The ivy-covered 
                 stone buildings, interspersed with modern glass structures, house
                  a diverse range of academic departments, including science, arts,
                   technology, and humanities. With a strong emphasis on research and 
                   innovation, React University attracts scholars and students from all
                    over the world, fostering a vibrant, multicultural community dedicated
                     to the pursuit of knowledge and personal growth.</p>

<p>The university offers a wide array of undergraduate, graduate, 
and doctoral programs, each designed to challenge and inspire students. 
 The university's lakeside location provides a unique setting for outdoor activities such as sailing, kayaking,
     and hiking, making it an ideal environment for both academic and personal 
     development.</p>
        </div>
    </div>
  )
}

export default About