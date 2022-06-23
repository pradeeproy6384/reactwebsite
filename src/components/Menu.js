import React from "react";

import { NavLink } from "react-router-dom";
import logo from '../images/logo.png';
const Menu = () => {
    return(
        <>
            <div className="pr_navigation"> 
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid conatiner-pad">
                <div className="row">
                <NavLink className="navbar-brand l-logo" to="/"><img src={logo} /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                <span className="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span> 
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"> <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/gallery">Gallery</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/master">Master Plan</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/floor">Floor Plan</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/location">Location Map</NavLink> </li>
                    </ul>
                </div>
                <div className="phone_call"><a href="tel:+919871784140"><span className="blinking_logo text-uppercase"><i className="fa fa-mobile an_bounce" aria-hidden="true"></i></span>&nbsp;+91-98-7178-4140 </a></div>
                </div>
            </div>
            </nav>
            </div>
        </>
    )
}
export default Menu;