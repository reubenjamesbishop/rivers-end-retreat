import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Get in touch today! We would love to have you down.
                </p>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class="social-link">hello</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;