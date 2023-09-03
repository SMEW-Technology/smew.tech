import React from "react";

export default function AboutUs() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
                        <div className="about_wrapper">
                            <figure className="mb-0 about-image1">
                                <img src="./images/about-image1.jpg" alt="" className=""/>
                            </figure>
                            <figure className="mb-0 about-image2">
                                <img src="./images/about-image2.jpg" alt="" className="img-fluid"/>
                            </figure>
                            <div className="image-circle">
                                <div className="years">
                                    <span className="text-white value counter">10</span>
                                    <sup className="text-white mb-0 plus">+</sup>
                                    <span className="text-white text">Years</span>
                                </div>
                                <figure className="mb-0 about-imagecircle">
                                    <img src="./images/about-imagecircle.png" alt="" className=""/>
                                </figure>
                            </div>
                            <figure className="mb-0 about-dot">
                                <img src="./images/about-dot.png" alt="" className="img-fluid"/>
                            </figure>
                            <figure className="mb-0 about-leftcircle">
                                <img src="./images/about-leftcircle.png" alt="" className="img-fluid"/>
                            </figure>
                            <figure className="mb-0 about-layer">
                                <img src="./images/about-layer.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
                        <div className="about_content" data-aos="fade-right">
                            <h6>About us</h6>
                            <h2 className="text-white">Global IT consulting & service provider.</h2>
                            <p className="text1">SMEW Technology is a global technology and IT services provider with headquarter in Vietnam.
                                Its 10 Years of experiences in the global market have seen SMEW Technology empowering digital transformation for businesses worldwide, from various industries:
                                Healthcare, BFSI, Communications, Media and Services, Logistics and Transportation, Consumer Packaged Goods, and Public Sector, Blockchain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}