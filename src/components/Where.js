import React from 'react';
import './Where.css';
import image_backyard from '../images/backyard.jpg'

function Where() {
    return (
        <div className="where__container">
            <div class="content__container">
                <div class="text__container">
                    <h1 className="where__header">Where?</h1>
                    <p className="description__container">
                        <p>
                            River’s End Retreat is located in the historic town of Goolwa, South Australia –
                            about an hour’s drive south of Adelaide, on the coast side of the Adelaide Hills
                            and magnificent McLaren Vale wine country.
                        </p>
                        <br />
                        <p>
                            The Retreat property offers spectacular views of Hindmarsh Island and the magnificent
                            Murray River, and is perfectly accessible to many of the South Coast’s delicious restaurants,
                            wineries and beaches.
                        </p>
                    </p>
                </div>
                <img class="image__container" src={image_backyard} />
            </div>
        </div >
    )
}

export default Where;
