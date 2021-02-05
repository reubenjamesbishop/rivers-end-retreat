import React from 'react';
import './PromoVideo.css';

function PromoVideo() {
    return (
        <div class="promo">
            <div class="media__wrapper">
                <h1 className="promo__title">Media</h1>
                <div class="video__container">
                    <iframe width="644" height="362" src="https://www.youtube.com/embed/Xxv-4P2jchM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video__container">
                    <iframe width="644" height="362" src="https://www.youtube.com/embed/QeySJ0QOgks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </div>
            </div>
        </div>
    )
}

export default PromoVideo;

