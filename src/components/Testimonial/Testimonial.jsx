import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import prev_icon from '../../assets/prev-icon.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user2.jpg'

const Testimonial = () => {
    const slider = useRef();
    let tx=0;
    const slideBackward=()=>{
        if(tx < 0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }
    const slideForward=()=>{
        if(tx > -50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }
  return (
    <div className='testimonial'>
        <img src={prev_icon} alt="" className='prev-btn' onClick={slideBackward}/>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <div className='slider'>
            <ul ref={slider}> 
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user1} alt='' />
                            <div>
                                <h3>Manav Srivastava</h3>
                                <span>class of 2015, Indore, MP</span>
                            </div>   
                        </div>
                        <p>
                        React University has been an 
                        incredible journey of self-discovery. The close-knit community 
                        and supportive professors pushed me to achieve more than I ever thought possible.
                        The hands-on learning experiences and internships allowed me to apply 
                        my knowledge in real-world scenarios. I’ve built lifelong friendships here and am leaving with confidence for the future.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user2} alt='' />
                            <div>
                                <h3>Shanaya Mandal</h3>
                                <span>Professor of Computer Application, Jharkhand</span>
                            </div>   
                        </div>
                        <p>
                        Teaching at React University allows me to work with 
                        some of the brightest minds in a setting that fosters both 
                        academic rigor and creativity. The collaborative environment 
                        here is truly unmatched. The university encourages innovation 
                        and interdisciplinary research, making every day an exciting challenge. I’ve witnessed how 
                        our students grow into leaders in their fields.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user3} alt='' />
                            <div>
                                <h3>Manav Saha</h3>
                                <span>class of 2013, Mumbai, Maharashtra</span>
                            </div>   
                        </div>
                        <p>
                        The research opportunities at React are outstanding.
                         I’ve had the chance to work with world-class faculty and
                          cutting-edge technology, which has truly set me up for success in my field.
                        The access to specialized labs and industry partnerships has 
                        given me an edge in my career. 
                        I’m grateful for the mentorship and the friendships I’ve made along the way.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user4} alt='' />
                            <div>
                                <h3>Sheetal M.</h3>
                                <span>class of 2025, Bangalore, Karnataka</span>
                            </div>   
                        </div>
                        <p>
                        Beyond the academics, the natural beauty of the campus and the 
                        endless outdoor activities have made my time here unforgettable. 
                        It’s the perfect blend of work and relaxation.
                        Whether it’s kayaking on the lake or studying by the water, 
                        this campus offers a unique balance. The diverse student body 
                        has broadened my perspectives and enriched my learning experience.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial