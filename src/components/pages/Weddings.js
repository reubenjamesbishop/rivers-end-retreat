import React from 'react';
import '../../App.css';
import './Weddings.css';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import image_1 from '../../images/brideandgroom.jpg';
import image_2 from '../../images/bridge.jpg';
import image_3 from '../../images/fairylight.jpg';
import image_4 from '../../images/coupleonjetty.jpg';

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
                        <br /><br />
                        These days, some couples are choosing to extend their special celebration by having a residential weekend event.
                        They go away and relax with a smaller number of good friends and family, and then host a special afternoon/evening on the Saturday.   River’s End Retreat nestled in Goolwa, South Australia offers the ideal opportunity to do just that.

                    </p>
                </div>

                <div class="wedding_pic">
                    <img src={image_4} />
                </div>
            </div>

        </>
    );
}

export default Weddings;