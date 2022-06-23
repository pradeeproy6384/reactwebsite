import React from "react";
import Amenitieslist from "../components/Amenitieslist";
const Amenites = () => {
    return(
        <>
            <section class="amenities mt-0">
			<div class="video-overlay"> </div>
			<div class="container-fluid conatiner-pad" data-aos="fade-up" data-aos-duration="1000">
				<div class="row justify-content-end">
					<div class="col-md-12 col-12">
						<h1 class="main-hds hds-mid text-center text-light">BEAUTIFUL AMENITIES</h1> 
					</div>
				</div>
				
				<div class="row">
				<Amenitieslist  amisrc="http://www.godrejsplendourinfo.com/assets/images/amenities/1.jpg"
                    amtitle="Accupressure Pathway"/>

                <Amenitieslist  amisrc="http://www.godrejsplendourinfo.com/assets/images/amenities/2.jpg"
                    amtitle="Barbeque Deck"/>

                <Amenitieslist  amisrc="http://www.godrejsplendourinfo.com/assets/images/amenities/3.jpg"
                    amtitle="Outdoor Gym"/>  

                <Amenitieslist  amisrc="http://www.godrejsplendourinfo.com/assets/images/amenities/4.jpg"
                    amtitle="Sky Cafeteria"/>

                <Amenitieslist  amisrc="http://www.godrejsplendourinfo.com/assets/images/amenities/5.jpg"
                    amtitle="Sky Cinema"/>

                <Amenitieslist  amisrc="http://www.godrejsplendourinfo.com/assets/images/amenities/6.jpg"
                    amtitle="Sky Party Deck"/>

                <Amenitieslist  amisrc="http://www.godrejsplendourinfo.com/assets/images/amenities/7.jpg"
                    amtitle="Star Gazing Zone"/>

                <Amenitieslist  amisrc="http://www.godrejsplendourinfo.com/assets/images/amenities/8.jpg"
                    amtitle="Vitamin D Deck"/>                      
                    
					
					{/* <div class="col-md-3 col-12">
						<div class="am_box"> <img src={am1} alt="Amenities" class="img-fluid" />
							<h4>Barbeque Deck</h4> </div>
					</div>
					
					<div class="col-md-3 col-12">
						<div class="am_box"> <img src={am1} alt="Amenities" class="img-fluid" />
							<h4>Outdoor Gym</h4> </div>
					</div>
					
					<div class="col-md-3 col-12">
						<div class="am_box"> <img src={am1} alt="Amenities" class="img-fluid" />
							<h4>Sky Cafeteria</h4> </div>
					</div>
					
					<div class="col-md-3 col-12">
						<div class="am_box"> <img src={am1} alt="Amenities" class="img-fluid" />
							<h4>Sky Cinema</h4> </div>
					</div>
					
					<div class="col-md-3 col-12">
						<div class="am_box"> <img src={am1} alt="Amenities" class="img-fluid" />
							<h4>Sky Party Deck</h4> </div>
					</div>
					
					<div class="col-md-3 col-12">
						<div class="am_box"> <img src={am1} alt="Amenities" class="img-fluid" />
							<h4>Star Gazing Zone</h4> </div>
					</div>
					
					<div class="col-md-3 col-12">
						<div class="am_box"> <img src={am1} alt="Amenities" class="img-fluid" />
							<h4>Vitamin D Deck</h4> </div>
					</div> */}
					
				</div>
				
			</div>
		</section>
        </>
    )
}
export default Amenites