import React from 'react';
import './Why.css';
import image_cocktail from '../images/cocktail.jpg'

function Why() {
    return (
        <div className="why__container">
            <div class="content__container">
                <img class="image__container" src={image_cocktail} />
                <div class="text__container">
                    <h1 className="why__header">Why do we do it?</h1>
                    <div className="description__container">
                        <p>
                            In 1853, when prominent politician William Younghusband claimed the sweeping final bend of the Murray, he wasn’t thinking about history – he simply chose the very best spot from which he could enjoy the majestic Murray river.
                        </p>
                        <br />
                        <p>
                            In keeping with this thinking, Jamie and Trudy have transformed River’s End Retreat in order to take full panoramic advantage of this unique location.  They have artfully incorporated the historical aspects whilst carefully integrating all the creature comforts expected by today’s world travellers.
                        </p>
                        <br />
                        <p>
                            Goolwa, Hindmarsh Island and the Coorong/Murray mouth are enjoying a similar renaissance…. the paddle wheelers and steam trains are still prominent, but easily share their digs with an award-winning modern whiskey distillery, the funkiest markets on the peninsula… and nearby venues such as Hectors and the Wharf Barrel Wine Shed – often featuring live music.
                        </p>
                        <br />
                        <p>
                            Slow food is great food… Cittaslow, smoke-offs, cockles (pippies internationally) and nearby producers of beef, pork, lamb and veggies are enjoying a great resurgence.   So too, the massive bird feeding events out front are a testament to the returning health of the ecosystem.
                        </p>
                        <br />
                        <p>
                            Jamie and Trudy are also renewing long time relationships – Jamie’s grandmother Dr McLeay was a prolific author with a deep love of the region and a special relationship with the Ngarrindjeri people. Her book “River’s End” is a valued collection of stories of the changing fortunes of the busy little town of Goolwa. As a kid, Jamie and his brothers learnt to swim, fish, milk cows and entertain in this special place.
                        </p>
                        <br />
                        <p>
                            So come and immerse yourself …. whether for work or play, we’ll make it special for you.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why;
