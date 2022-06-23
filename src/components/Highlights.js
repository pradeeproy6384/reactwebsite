import React from "react";
import hlts from '../images/hlts.jpg';
const Highlights = () => {
    return(
        <>
            <section class="highlits">
			<div class="container-fluid conatiner-pad">
				<div class="row">
					<div class="col-md-12">
						<div class="highlits-lft">
							 <h1 class="main-hds text-center">5 PROFESSIONAL SPORTS ACADEMIES</h1> 
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-md-4">
						<div class="master-desc">
							<h1 class="main-hds">Project Highlights</h1>
							<ul class="lists">
								<li>Land Area : 18 Acres.</li>
								<li>Units : 1100 Units.</li>
								<li>Apartments Types : 1 , 2 &amp; 3 BHK.</li>
								<li>50+ Amenities With Open Spaces </li>
								<li>No. of Floors : 3P + 27 Floors.</li>
								<li>No. Of Towers : 9 Towers.</li>
								<li>Carpet Area : 605 to 1234 sq.ft.</li>
								<li>Location : Belathur Main Road, Whitefield, East Bangalore.</li>
							</ul>
						</div>
					</div>
					<div class="col-md-6">
						<div class="prj-img"> <img src={hlts} class="img-fluid" /> </div>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}

export default Highlights