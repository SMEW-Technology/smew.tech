import React from "react";
import NavBar from "../../components/NavBar";

export default function ServiceBanner() {

    return (
        <div className="sub-banner sub-banner4">
            <figure className="sub-bannerleftlayer mb-0">
                <img src="./images/sub-bannerleftlayer.png" alt="" className="img-fluid" />
            </figure>
            <NavBar/>
            <section className="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="banner_content" data-aos="fade-up">
                                <figure className="service-rightcircle mb-0">
                                    <img src="./images/service-rightcircle.png" alt="" className="img-fluid"/>
                                </figure>
                                <h1 className="text-white">Our Services</h1>
                                <p>Comprehensive Technology Solutions for Sustainable Growth</p>
                                <div className="box">
                                    <span className="mb-0">Home</span>
                                    <figure className="mb-0 arrow">
                                        <img src="./images/button-arrow.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <span className="mb-0 box_span">Services</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <figure className="banner-circleright mb-0">
                <img src="./images/banner-circleright.png" className="img-fluid" alt=""/>
            </figure>
            <figure className="sub-bannerrightlayer mb-0">
                <img src="./images/sub-bannerrightlayer.png" alt="" className="img-fluid"/>
            </figure>
        </div>
    )
}

