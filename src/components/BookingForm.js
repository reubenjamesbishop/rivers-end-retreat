import React, { useState, useEffect } from "react";
import "./BookingForm.css";
import image_firepit from '../images/firepit.jpg';
import emailjs from 'emailjs-com';


const BookingForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_yyd8zm9', 'template_mfwtvzv', e.target, 'user_UKnon2cQfhEm3Z6P1MrDC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // this is stupid but the forms not resetting lol
        document.getElementById('booking__form__beep')[0].value = "";
        document.getElementById('booking__form__beep')[1].value = "";
        document.getElementById('booking__form__beep')[2].value = "";
    }

    return (
        <div>
            <form id="booking__form__beep" className="booking__form" type="reset" value="reset" onSubmit={handleSubmit}>
                <h1>Get in touch!</h1>
                <p>
                    Thinking of organising an event? We would love to hear from you!
                    <br />
                    Send us a message to get the ball rolling, and we'll get back to you as soon as we can.
                    <br />
                </p>
                <label>Name</label>
                <input placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email</label>
                <input placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Message</label>
                <textarea placeholder="Message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit" style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>Submit</button>
            </form>
            <img className="contact__image" src={image_firepit} />
        </div>
    );
};

export default BookingForm;