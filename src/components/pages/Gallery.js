import React from 'react';
import '../../App.css';
import GalleryCarousel from '../GalleryCarousel';
import image_1 from '../../images/bridge.jpg';
import image_2 from '../../images/housefront.jpg';
import image_3 from '../../images/fairylight.jpg';
import image_4 from '../../images/cocktail.jpg';

import image_5 from '../../images/backyard.jpg';
import image_6 from '../../images/bed.jpg';
import image_7 from '../../images/archieandleroy.jpg';
import image_8 from '../../images/chessboard.jpg';
import image_9 from '../../images/hallway.jpg';
import image_10 from '../../images/houseside.jpg';
import image_11 from '../../images/pool.jpg';
import image_12 from '../../images/snooker.jpg';
import image_13 from '../../images/piano.jpg';
import image_14 from '../../images/pool2.jpg';
import image_15 from '../../images/outdoortable.jpg';
import image_16 from '../../images/table.jpg';
import image_17 from '../../images/livingroom.jpg';
import image_18 from '../../images/kitchen.jpg';

export default function Gallery() {
    return (
        <>
            <div class="row">
                <div class="column">
                    <img src={image_1} />
                    <img src={image_2} />
                    <img src={image_3} />
                    <img src={image_13} />
                </div>
                <div class="column">
                    <img src={image_4} />
                    <img src={image_5} />
                    <img src={image_6} />
                    <img src={image_14} />
                </div>
                <div class="column">
                    <img src={image_7} />
                    <img src={image_8} />
                    <img src={image_9} />
                    <img src={image_15} />
                    <img src={image_17} />
                </div>
                <div class="column">
                    <img src={image_10} />
                    <img src={image_11} />
                    <img src={image_12} />
                    <img src={image_16} />
                </div>
            </div>

        </>
    )
}