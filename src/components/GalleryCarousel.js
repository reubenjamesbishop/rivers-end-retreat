import React from 'react';
import './GalleryCarousel.css'

import img1 from '../images/brideandgroom.jpg';
import img2 from '../images/backyard.jpg';
import img3 from '../images/bridge.jpg';
import img4 from '../images/chessboard.jpg';
import img5 from '../images/firepit.jpg';
import img6 from '../images/hallway.jpg';
import img7 from '../images/cocktail.jpg';
import img8 from '../images/archieandleroy.jpg';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class GalleryCarousel extends React.Component {
    render() {
        return (
            <div class="center" className="carousel__wrapper">
                <div className="slider1">
                    <AwesomeSlider bullets={false} fillParent={false}>
                        <div className="carousel__image" data-src={img1} />
                        <div className="carousel__image" data-src={img2} />
                        <div className="carousel__image" data-src={img3} />
                        <div className="carousel__image" data-src={img4} />
                        <div className="carousel__image" data-src={img5} />
                        <div className="carousel__image" data-src={img6} />
                        <div className="carousel__image" data-src={img7} />
                        <div className="carousel__image" data-src={img8} />
                    </AwesomeSlider>
                </div>
                <div className="slider2">
                    <AwesomeSlider bullets={false} fillParent={false}>
                        <div className="carousel__image" data-src={img1} />
                        <div className="carousel__image" data-src={img2} />
                        <div className="carousel__image" data-src={img3} />
                        <div className="carousel__image" data-src={img4} />
                        <div className="carousel__image" data-src={img5} />
                        <div className="carousel__image" data-src={img6} />
                        <div className="carousel__image" data-src={img7} />
                        <div className="carousel__image" data-src={img8} />
                    </AwesomeSlider>
                </div>
            </div >
        )
    }
}

export default GalleryCarousel;