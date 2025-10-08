import React from "react";
import Testimonial from "../components/Testimonial";

export default function About() {
    return (
        <>
            <section className="aboutus-section">
                <figure className="offer-toplayer mb-0">
                    <img src="./images/offer-toplayer.png" alt="" className="img-fluid"/>
                </figure>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
                            <div className="about_wrapper">
                                <figure className="mb-0 aboutus-image1">
                                    <img src="./images/about-image1.jpg" alt="" className=""/>
                                </figure>
                                <figure className="mb-0 aboutus-image2">
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
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
                            <div className="service_content position-relative" data-aos="fade-right">
                                <figure className="service-rightcircle mb-0">
                                    <img src="./images/service-rightcircle.png" alt="" className="img-fluid"/>
                                </figure>
                                <h6>About Us</h6>
                                <h2>Building the Digital Future</h2>
                                <h3>Our Mission</h3>
                                <p className="text1">We are committed to providing advanced, flexible, and efficient technology solutions that help clients optimize operations, enhance competitive capabilities, and achieve exceptional growth in the digital era.</p>
                                <h3>Our Vision</h3>
                                <p className="text1">By 2030, SMEW Tech aims to become one of the leading technology companies in the region, a symbol of innovation, creativity, and quality, bringing Vietnam's technology products to the world stage.</p>
                                <p className="text1">With over 10 years of experience in the global market, SMEW Technology has empowered digital transformation for businesses worldwide across various industries: Healthcare, BFSI, Communications, Media and Services, Logistics and Transportation, Consumer Packaged Goods, Public Sector, and Blockchain.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <figure className="offer-bottomlayer mb-0">
                    <img src="./images/offer-bottomlayer.png" alt="" className="img-fluid"/>
                </figure>
            </section>

            <section className="aboutoffer-section">
                <div className="container">
                    <div className="component fsoft-container component-section" data-title="Core Values"
                         data-white-section="" id="core-values">
                        <div className="component-content">
                            <div className="component slide-our-value core-values m-b-75-mb">
                                <div className="core-values-slider row g-4">
                                    <div className="slide-first-item col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card content-card-title">
                                            <h2 className="section-title">Our Core Values in Action</h2>
                                            <p className="text1">Living our philosophy of Technology for Business</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-orange aos-init aos-animate"
                                             data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">Innovation Focused on Effectiveness</h3>
                                            <p className="text1">We apply new technologies not to follow trends, but to find the most effective solutions to your business challenges.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-blue aos-init aos-animate" data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">Quality for Business Goals</h3>
                                            <p className="text1">Quality products are not just bug-free—they must be stable, secure, and directly contribute to your revenue and cost objectives.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-green aos-init aos-animate" data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">Customer-Centric Strategy</h3>
                                            <p className="text1">We listen to understand, consult to optimize, and partner as an integral part of your company.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-lightblue aos-init aos-animate"
                                             data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">Transparency in All Processes</h3>
                                            <p className="text1">You will always know where your project stands, what the progress is, and every decision is discussed openly.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-blueviolet aos-init aos-animate"
                                             data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">Collaboration to Create Value</h3>
                                            <p className="text1">We work closely with clients because we believe the best solutions come from collective strength.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial-section  aboutus-section">
                <figure className="offer-toplayer mb-0">
                    <img src="./images/offer-toplayer.png" alt="" className="img-fluid"/>
                </figure>
                <Testimonial/>
                <figure className="offer-bottomlayer mb-0">
                    <img src="./images/offer-bottomlayer.png" alt="" className="img-fluid"/>
                </figure>
            </section>

            <section className="aboutoffer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="offer_content">
                                <h6>Why Choose SMEW Tech</h6>
                                <h2>Your Technology Partner for Sustainable Growth</h2>
                                <p>We are more than a service provider—we are your dedicated partner, committed to listening, supporting, and helping you achieve your goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative mb-5">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-orange" data-aos="fade-up">
                                <h3 className="card-title">International Experience</h3>
                                <p className="text1">Over 10 years working with global partners, deeply understanding different markets and industries.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-blue" data-aos="fade-up">
                                <h3 className="card-title">Expert Team</h3>
                                <p className="text1">Talented engineers, developers, and design specialists always updated with the latest technologies.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-green" data-aos="fade-up">
                                <h3 className="card-title">Optimal Costs</h3>
                                <p className="text1">Competitive solutions with significant budget savings, especially our ODC model.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-lightblue" data-aos="fade-up">
                                <h3 className="card-title">Top Quality</h3>
                                <p className="text1">Rigorous quality management processes at every project stage ensure the highest standards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="offer_content">
                                <h6>Our Achievements</h6>
                                <h2>Numbers That Speak for Themselves</h2>
                                <p>Our accomplishments stand as a testament to our commitment to quality, demonstrated through the enduring partnerships we uphold with both longstanding and new customers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="achievement_wrapper">
                        <div className="row">
                            <figure className="offer-circleimage mb-0">
                                <img src="./images/offer-circleimage.png" alt="" className="img-fluid"/>
                            </figure>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="achievement-box box1">
                                    <figure className="icon achievement-icon">
                                        <img src="./images/achievement-clienticon.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <div className="wrapper">
                                        <div className="number">
                                            <h3 className="value counter">200</h3>
                                            <span className="plus">+</span>
                                        </div>
                                        <p className="text-size-18 mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="achievement-box box2">
                                    <figure className="icon1 achievement-icon">
                                        <img src="./images/achievement-projecticon.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <div className="wrapper">
                                        <div className="number">
                                            <h3 className="value counter">500</h3>
                                            <span className="plus">+</span>
                                        </div>
                                        <p className="text-size-18 mb-0">Projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="achievement-box box3">
                                    <figure className="icon achievement-icon">
                                        <img src="./images/achievement-teamicon.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <div className="wrapper">
                                        <div className="number">
                                            <h3 className="value counter">100</h3>
                                            <span className="plus">+</span>
                                        </div>
                                        <p className="text text-size-18 mb-0">Members</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="achievement-box box4">
                                    <figure className="icon1 achievement-icon">
                                        <img src="./images/achievement-awardicon.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <div className="wrapper">
                                        <div className="number">
                                            <h3 className="value">2</h3>
                                        </div>
                                        <p className="text text-size-18 mb-0">Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}