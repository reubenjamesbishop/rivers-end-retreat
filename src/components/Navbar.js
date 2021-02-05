import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'
import rer_logo from "../images/rer_logo.jpg";
import Scroll from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;

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
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link to='/weddings' className='nav-links' onClick={closeMobileMenu}>
                                Weddings & Events
                            </Link> */}
                            <div class="dropdown nav-links">
                                <button class="dropbtn">Events
                                <i class="fa fa-angle-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <a href="/weddings">Weddings</a>
                                    <a href="functions">Functions</a>
                                    <a href="/retreats">Retreats</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                            <ScrollLink
                                to="example-destination"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className='some-class'
                                activeClass='some-active-class'
                            >
                                Link Text Goes Here
                            </ScrollLink>
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
