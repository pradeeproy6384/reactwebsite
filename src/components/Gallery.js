import React from "react";
import Gallerylist from "../components/Gallerylist";
import Innerimg from "../components/Innerimg";
import Footer from '../components/Footer';
// import Gallery from '../components/Gallery'
// import '../src/css/magnific-popup.css';
// import '../src/js/jquery.magnific-popup.js';

const Gallery = () => {
    return(
        <>
		<Innerimg />
		<section className="pr-gallery">
			<div className="container-fluid m-0 overflow-hidden">
				<div className="row">
					<div className="col-md-12">
						<h1 className="main-hds hds-mid text-center">Godrej Splendour Gallery</h1> </div>
				   </div>
				<div className="row home-gallery">
                    <Gallerylist glrimgf="http://www.godrejsplendourinfo.com/assets/images/gallery/1.jpg"
                        glrimgs="http://www.godrejsplendourinfo.com/assets/images/gallery/1.jpg" />   
					
					<Gallerylist glrimgf="http://www.godrejsplendourinfo.com/assets/images/gallery/2.jpg"
                        glrimgs="http://www.godrejsplendourinfo.com/assets/images/gallery/2.jpg" /> 

					<Gallerylist glrimgf="http://www.godrejsplendourinfo.com/assets/images/gallery/3.jpg"
                        glrimgs="http://www.godrejsplendourinfo.com/assets/images/gallery/3.jpg" /> 
					
					<Gallerylist glrimgf="http://www.godrejsplendourinfo.com/assets/images/gallery/4.jpg"
                        glrimgs="http://www.godrejsplendourinfo.com/assets/images/gallery/4.jpg" /> 

					<Gallerylist glrimgf="http://www.godrejsplendourinfo.com/assets/images/gallery/5.jpg"
                        glrimgs="http://www.godrejsplendourinfo.com/assets/images/gallery/5.jpg" /> 

					<Gallerylist glrimgf="http://www.godrejsplendourinfo.com/assets/images/gallery/6.jpg"
                        glrimgs="http://www.godrejsplendourinfo.com/assets/images/gallery/6.jpg" /> 
					</div>
			</div>
		</section>
		<Footer />
       </>
    )

}
export default Gallery;