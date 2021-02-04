import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'
import rer_logo from "../images/rer_logo.jpg";

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <a class="navbar-brand">
                            <img class="rer-logo" src="https://riversendretreat.com.au/wp-content/uploads/2019/03/rer-logo-tgb-jb-300x156.jpg" alt="" />
                        </a>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/weddings' className='nav-links' onClick={closeMobileMenu}>
                                Weddings & Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/workshops' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/bookings' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
