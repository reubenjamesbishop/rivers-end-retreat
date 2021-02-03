import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import video from '../videos/rer_video.mp4';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            <h1>RIVERS END RETREAT</h1>
            <p>Luxury stays, an hour away</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    LEARN MORE
                </Button>
                <Link to="/bookings">
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        BOOK NOW
                </Button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection;
