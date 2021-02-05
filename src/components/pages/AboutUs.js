import React from 'react';
import '../../App.css';

import Who from '../Who';
import Where from '../Where';
import Why from '../Why';

function AboutUs() {
    return (
        <>
            <div class="AboutUs__intro">
                <div class="AboutUs__heading">
                    <h1>About Us</h1>
                </div>
                <p class="AboutUs__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <Who />
            <Where />
            <Why />
        </>
    );
}

export default AboutUs;