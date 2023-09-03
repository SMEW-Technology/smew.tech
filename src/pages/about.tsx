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
                                    <div className="years">
                                        <span className="text-white value">10</span>
                                        <sup className="text-white mb-0 plus">+</sup>
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
                                <h2>Innovate Solution For Success</h2>
                                <h2>Global IT consulting & service provider.</h2>
                                <p className="text1">SMEW Technology is a global technology and IT services provider
                                    with headquarter in Vietnam.
                                    Its 10 Years of experiences in the global market have seen SMEW Technology
                                    empowering digital transformation for businesses worldwide, from various industries:
                                    Healthcare, BFSI, Communications, Media and Services, Logistics and Transportation,
                                    Consumer Packaged Goods, and Public Sector, Blockchain.</p>
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
                                            <h2 className="section-title">The key drivers of our business</h2>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-orange aos-init aos-animate"
                                             data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">Speed</h3>
                                            <p className="text1 text1">Agile Factory to validate ideas, and Ready-made
                                                solutions/
                                                digital frameworks to define digital initiatives quickly.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-blue aos-init aos-animate" data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">Scale</h3>
                                            <p className="text1 text1">Strong capability to scale up the projects per
                                                customers’
                                                needs with 100+ software engineers, including the digital-wizard
                                                teams of
                                                50+ certified experts.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-green aos-init aos-animate" data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">Global Presence</h3>
                                            <p className="text1">Optimal mix of high quality near shore, offshore
                                                and
                                                onsite
                                                delivery models. This enables our partners to diversify their sourcing
                                                strategy
                                                to improve the bottom line, managing multiple language collaborations
                                                across
                                                time zones.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-lightblue aos-init aos-animate"
                                             data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">Quality</h3>
                                            <p className="text1">Global standardized Quality Management System
                                                builds
                                                trust
                                                among many customers, including across the globe global disruptors and
                                                achieved the
                                                average
                                                Customer Satisfactory Score of 94.67/100.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-blueviolet aos-init aos-animate"
                                             data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">Compliance</h3>
                                            <p className="text1">The certified Information Security Management
                                                System
                                                includes Policies, Procedures and Guidelines to ensure the security of
                                                data
                                                assets for SMEW Technology and our customers.</p>
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
                                <h6>what We Offer</h6>
                                <h2>some of Our Achievements</h2>
                                <p>Our accomplishments stand as a testament to our commitment to quality, demonstrated
                                    through the enduring partnerships we uphold with both longstanding and new
                                    customers.</p>
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