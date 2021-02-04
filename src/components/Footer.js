import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Get in touch today! We would love to have you down.
                </p>
                <br />
                <div className="social-links">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                </div>

            </div>
        </div>
    );
}

export default Footer;