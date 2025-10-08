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
                                <div className="years" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                                    <div>
                                        <span className="text-white value">10</span>
                                        <sup className="text-white mb-0 plus">+</sup>
                                    </div>
                                    <span className="text-white text">Years of Experience</span>
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
                            <h2 className="text-white">Building the Digital Future</h2>
                            <p className="text1"><strong>Our Mission:</strong> We are committed to providing advanced, flexible, and efficient technology solutions that help clients optimize operations, enhance competitive capabilities, and achieve exceptional growth in the digital era.</p>
                            <p className="text1"><strong>Our Vision:</strong> By 2030, SMEW Tech aims to become one of the leading technology companies in the region, a symbol of innovation, creativity, and quality, bringing Vietnam's technology products to the world stage.</p>
                            <p className="text1">With over 10 years of experience in the global market, SMEW Technology has empowered digital transformation for businesses worldwide across various industries: Healthcare, BFSI, Communications, Media and Services, Logistics and Transportation, Consumer Packaged Goods, Public Sector, and Blockchain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}