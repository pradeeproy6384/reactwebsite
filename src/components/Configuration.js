import React from "react";
import floor1 from '../images/floor-1.jpg';
const pointer =  {
    cursor:'pointer'
}
const Configuration = () => {
    return (
        <>
        <section className="update_config mt-0 pt-60">
			<div className="video-overlay"> </div>
			<div className="container-fluid conatiner-pad" data-aos="fade-up" data-aos-duration="1000">
				<div className="row justify-content-end">
					<div className="col-md-12 col-12">
						<h1 className="main-hds hds-mid text-center text-light">Project Configuration</h1> </div>
				</div>
				<div className="row">
					<div className="col-md-4 col-12">
						<div className="config_box">
							<h4>1 BHK</h4>
							<div className="w_line"></div>
							<p>Regular Saleable Area</p>
							<h2>605 Sq.ft.</h2>
							<div className="w_line"></div>
							<button><a data-toggle="modal" id="floor-page-snd" data-target="#query" className="p_btn">Check Price</a></button>
						</div>
					</div>
					
					<div className="col-md-4 col-12">
						<div className="config_box">
							<h4>2 BHK</h4>
							<div className="w_line"></div>
							<p>Regular Saleable Area</p>
							<h2>982 Sq.ft.</h2>
							<div className="w_line"></div>
							<button><a data-toggle="modal" id="floor-page-third" data-target="#query" className="p_btn">Check Price</a></button>
						</div>
					</div>
					
					<div className="col-md-4 col-12">
						<div className="config_box">
							<h4>3 BHK</h4>
							<div className="w_line"></div>
							<p>Regular Saleable Area</p>
							<h2>1234 Sq.ft.</h2>
							<div className="w_line"></div>
							<button><a data-toggle="modal" id="floor-page-four" data-target="#query" className="p_btn">Check Price</a></button>
						</div>
					</div>
					
				</div>
				
				<div className="row justify-content-center mt-5 mb">
					<div className="col-md-12 col-12">
						<h1 className="main-hds hds-mid text-center text-light">Floor Plans</h1> </div>
						<div className="col-md-4 col-12"> <span data-toggle="modal" id="floor-fst" data-target="#query" style={pointer}><img src={floor1} className="img-fluid" /><h2 className="ftitle">1 BHK </h2></span> </div>
						<div className="col-md-4 col-12"> <span data-toggle="modal" id="floor-snd" data-target="#query" style={pointer}><img src={floor1} className="img-fluid" /><h2 className="ftitle">2 BHK </h2></span> </div>
						<div className="col-md-4 col-12"> <span data-toggle="modal" id="floor-trd" data-target="#query" style={pointer}><img src={floor1} className="img-fluid" /><h2 className="ftitle">3 BHK </h2></span> </div>
				</div>
				
			</div>
		</section>

        </>
    )
}
export default Configuration