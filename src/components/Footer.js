import React from "react";

const Footer = () => {
    return(
        <>
            <section className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-desc text-center">
                               <p>RERA Registration No - PRM/KA/RERA/1251/310/AG/170824/000146  <span>&nbsp;|&nbsp;<a data-toggle="modal" id="form-query" data-target="#disclaimer">Disclaimer </a></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="new_footer">
            <div className="container-fluid conatiner-pad">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-4 pt-1 fixed-cta-item text-center border-right-white  border-white wchats wbg"> 
                    <a href="https://wa.me/+919871784140" target="_blank" className="chat-btns"><span className="wicons blinking animated"><i className="fa fa-whatsapp faa-wrench animated" aria-hidden="true"></i></span> Whatsapp </a> </div>
                    <div className="col-md-4 col-4 pt-1 fixed-cta-item text-center border-right-white">
                        <a href="tel:+919910006120"> <span className="blinking text-uppercase"><i className="fa fa-phone faa-wrench animated" aria-hidden="true"></i></span>&nbsp; <span>Call Us</span> </a>
                    </div>
                    <div className="col-md-4 col-4 pt-1 fixed-cta-item text-center ebg">
                        <a className="n-ftr_qruey" data-toggle="modal" id="contact-query" data-target="#query"> <i className="fa fa-envelope-open faa-wrench animated" aria-hidden="true"></i><span className="blinking1"> &nbsp; Enquiry</span></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;