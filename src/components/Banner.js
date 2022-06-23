import React from "react";
import b1 from '../images/b-1.jpg';
import b2 from '../images/b-2.jpg';
const Banner = () => {
    return(
        <>
         <div class="pr-banne nav-gaps">
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="img_blur"> </div>
                        <img class="d-block w-100" src={b1} alt="First slide" />
                        <div class="carousel-caption">
                        <h3>Godrej Splendour</h3>
                        <p>1 , 2 & 3 BHK</p>
                        <p>Belathur Main Road, Whitefield, East Bangalore.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="img_blur"> </div>
                        <img class="d-block w-100" src={b2} alt="Second slide" />
                        <div class="carousel-caption">
                        <h3>Godrej Splendour</h3>
                        <p>1 , 2 , 3 & 4 BHK</p>
                        <p>Belathur Main Road, Whitefield, East Bangalore.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         </>
    )
}
export default Banner;