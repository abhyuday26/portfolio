//import React from 'react';
import './contact.scss';
import { useState } from 'react';
const Contact = () => {
    const [message,setMessage]  = useState(false)
    const handleSubmit =(e) =>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg"/>
            </div>

            <div className="right">
                <h2>Contact</h2>
                <form  action="https://formsubmit.co/sabhyuday266@gmail.com" method="POST" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Email" required/>
                    <textarea placeholder="Message" name="message" required></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply ASAP :)</span>}
                </form>
            </div>
        </div>
    );
};

export default Contact;