import React from "react";
import NavBar from "../../components/NavBar";
import Link from "next/link";

export default function HomeBanner() {
    return (
        <div className="banner_outer">
            <NavBar/>
            <figure className="banner-layerright mb-0">
                <img src="./images/banner-layerright.png" className="img-fluid" alt=""/>
            </figure>
            <section className="banner-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12" data-aos="fade-right">
                            <div className="social-icons position-relative" data-aos="fade-up">
                                <ul className="list-unstyled position-absolute">
                                    <li><a href="https://www.facebook.com/profile.php?id=61561884150369" className="text-decoration-none"><i
                                        className="fa-brands fa-facebook-f social-networks"></i></a></li>
                                    <li><a href="" className="text-decoration-none"><i
                                        className="fa-brands fa-twitter social-networks"></i></a></li>
                                    <li><a href="" className="text-decoration-none"><i
                                        className="fa-brands fa-google-plus-g social-networks"></i></a></li>
                                    <li><a href="" className="text-decoration-none"><i
                                        className="fa-brands fa-instagram social-networks"></i></a></li>
                                </ul>
                            </div>
                            <div className="banner_content">
                                <figure className="banner-line mb-0">
                                    <img src="./images/banner-line.png" alt="" className="img-fluid"/>
                                </figure>
                                <h6 className="text-white">WE PROVIDE OUTSOURCED</h6>
                                <h1 className="text-white">IT Services & Solutions</h1>
                                <p>We are committed to delivering world-class technology solutions for complex business
                                    opportunities and challenges, leveraging from our five most compelling strengths of<br/>
                                    <b>Speed, Scale, Global Presence, Quality and Compliance.</b></p>
                                <Link className="get_started button2 text-white text-decoration-none" href="/contact">Contact
                                    Us
                                    <figure className="mb-0">
                                        <img src="./images/button-arrow.png" alt="" className="img-fluid"/>
                                    </figure>
                                </Link>
                                <figure className="banner-circleleft mb-0">
                                    <img src="./images/banner-circleleft.png" className="img-fluid" alt=""/>
                                </figure>
                                <figure className="banner-dotleft mb-0">
                                    <img src="./images/banner-dotleft.png" className="img-fluid" alt=""/>
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="banner_wrapper">
                                <figure className="mb-0 banner-image">
                                    <img src="./images/banner-image.jpg" alt="" className="img-fluid"/>
                                </figure>
                                <figure className="banner-circleright mb-0">
                                    <img src="./images/banner-circleright.png" className="img-fluid" alt=""/>
                                </figure>
                                <figure className="banner-dotright mb-0">
                                    <img src="./images/banner-dotright.png" className="img-fluid" alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

