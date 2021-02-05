import React from 'react';
import './Who.css';
import image_backyard from '../images/backyard.jpg'
import image_jamietrudy from '../images/jamietrudy.jpg'

function Who() {
    return (
        <div id="section1" className="who__container">
            <div class="content__container">
                <img class="image__container" src={image_jamietrudy} />
                <div class="text__container">
                    <h1 className="who__header">Who are we?</h1>
                    <p className="description__container">
                        <p>
                            Jamie and Trudy Bishop are the third generation resident owners behind the
                            design and 4 year painstaking redevelopment of River’s End Retreat complex…
                            carefully integrating today’s technology and comforts into Younghusband’s original
                            1854 cottage.
                        </p>
                        <br />
                        <p>
                            Archie and Leroy are the newest members of the River’s End Retreat
                            team – our delightfully cheeky alpacas!
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Who;
