import React from 'react';
import '../../App.css';
import './Weddings.css';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import image_1 from '../../images/brideandgroom.jpg';
import image_2 from '../../images/bridge.jpg';
import image_3 from '../../images/fairylight.jpg';

function Weddings() {
    return (
        <>
            <div class="weddings__wrapper">
                <div class="weddings__intro">
                    <div class="weddings__heading">
                        <h1>Weddings</h1>
                    </div>
                    <p class="weddings__description">
                        Rivers end retreat offers a comprehensive range of residential wedding packages to suit all kinds of styles and budgets.
                        No matter what you have in mind, our versatile property can be kitted out to suit any theme.
                        Large or small, the weddings we've hosted have had an intimate and rural feel whilst remaining in the heart of historic Goolwa.
                </p>
                </div>

                <div class="slider__wrapper">
                    <AwesomeSlider animation="cubeAnimation">
                        <div data-src={image_1} />
                        <div data-src={image_2} />
                        <div data-src={image_3} />
                    </AwesomeSlider>
                </div>
            </div>

        </>
    );
}

export default Weddings;