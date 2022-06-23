import React from "react";

const Gallerylist = (gal) => {
    return(
        <>
            <div className="col-md-4 col-12 home-gal  mb-20 img">
			 <a href={gal.glrimgf} className="btn-gallery">
              <img src={gal.glrimgf} alt="Gallimg" className="img-fluid"/> 
            </a> 
           </div>
        </>
    )
}
export default Gallerylist;