import React from "react";

const Amenitieslist = (props) => {
    return(
        <>
        <div class="col-md-3 col-12">
        <div class="am_box"> 
            <img src={props.amisrc} alt="Amenities" class="img-fluid" />
            <h4>{props.amtitle}</h4> 
         </div>
	   </div>
        </>
    )
}
export default Amenitieslist