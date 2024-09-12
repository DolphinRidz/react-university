import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.png'
import call from '../../assets/call.png'
import email from '../../assets/email.png'
import location from '../../assets/location.png'
import white_arrow from '../../assets/white_arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b64d4db5-627f-4e7d-a841-42279a68be1d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3> Send us a message <img src={mail} alt=""/></h3>
            <p>For any inquiries or further information 
                about React University, we encourage you 
                to reach out to our dedicated admissions and
                 support teams. Whether you're a prospective 
                 student, parent, or partner institution, we're 
                 here to assist you with your questions about programs, 
                 campus life, or the application process.
                 You’re also welcome to visit us in person at our main campus
                  for a guided tour and to experience the beauty and academic 
                  excellence of React firsthand. </p>
                  <ul>
                    <li><img src={email} alt=""/>admissions@reactuniversity.edu </li>
                    <li><img src={call} alt=""/>(555) 123-4567</li>
                    <li><img src={location} alt=""/>100 ft. main road, Banshankri 3rd stage, Bangalore 560064</li>
                  </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>
                    Your name
                </label>
                <input type ='text' name='name' placeholder='Enter your name' required/>
                <label>
                    Phone number
                </label>
                <input type ='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>
                    Write your message here
                </label>
                <textarea name='message' rows='6' placeholder='Enter your name' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt=""/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact