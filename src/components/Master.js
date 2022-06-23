import React from "react";
import Innerimg from "../components/Innerimg";
import Footer from '../components/Footer';
import masterimg from '../images/master-plan.jpg';
const Master = () => {
    return(
        <>
           <Innerimg />
            <section className="pr-master left-bg mb-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h1 className="main-hds text-center">Master Plan </h1> </div>
                    <div className="col-md-3 col-12">
                        <div className="master-desc">
                            <ul className="am_list">
                                <li>Basement Entry Ramp </li>
                                <li>Visitor Car Parking </li>
                                <li>Half Basketball Court</li>
                                <li>Pavilion Seating </li>
                                <li>Outdoor Banquet Hall</li>
                                <li>Children's Play Area </li>
                                <li>Swimming Pool</li>
                                <li>Outdoor Gym</li>
                                <li>Toddlers' Play Area</li>
                                <li>Skating Rink</li>
                                <li>Multipurpose Court</li>
                                <li>Basement Ramp Exit</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="prj-img">
                            <a href={masterimg}><img src={masterimg} className="img-fluid" /></a>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        <Footer />
           
        </>
    )
}
export default Master;