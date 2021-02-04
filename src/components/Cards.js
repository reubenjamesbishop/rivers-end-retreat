import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

import image_brideandgroom from '../images/brideandgroom.jpg';
import image_chessboard from '../images/chessboard.jpg';
import image_bridge from '../images/bridge.jpg';
import image_pool from '../images/pool.jpg';
import image_cocktail from '../images/cocktail.jpg';
import image_firepit from '../images/firepit.jpg';
import image_fairylight from '../images/fairylight.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1 className="cards__title">Explore</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image_brideandgroom}
                            text="Residential Weddings"
                            path="/services"
                        />
                        <CardItem
                            src={image_fairylight}
                            text="Functions & Events"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={image_pool}
                            text="Ammenities"
                            path="/weddings"
                        />
                        <CardItem
                            src={image_chessboard}
                            text="Functions Events"
                            path="/services"
                        />
                        <CardItem
                            src={image_firepit}
                            text="Surrounding Goolwa"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
