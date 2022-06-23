import React from "react";
const fwidth = {
    width:'100%',
    height:'450px',
    border:'0',
}
const Googlemap = () => {
    return(
        <>
        <section className="q_location mt-0">
			<div className="container-fluid p-0">
			 <div className="row">
					<div className="col-md-12 col-12">
						<div className="location_poop">
							<div className="location_blur"> </div>
						   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4453860230306!2d77.74382721482246!3d13.007285090832463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f109462f6c3%3A0x82dd37625d5ac2a5!2sGODREJ%20WHITEFIELD!5e0!3m2!1sen!2sin!4v1652619383402!5m2!1sen!2sin"  style={fwidth} loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map Direction"></iframe>
						   <button className="lquery" data-toggle="modal" id="home-location" data-target="#query"><small className="text-dark d-block">Godrej Splendour </small><span><i className="fa fa-location-arrow" aria-hidden="true"></i>&nbsp;Direction </span></button>
						  </div>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}
export default Googlemap