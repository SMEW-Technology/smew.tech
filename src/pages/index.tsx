import React from "react";
import Testimonial from "../components/Testimonial";
import Offer from "../components/Offer";
import AboutUs from "../components/AboutUs";


export default function Index() {
    return (<>
            <section className="service-section">
                <figure className="service-leftlayer mb-0">
                    <img src="./images/service-leftlayer.png" alt="" className="img-fluid"/>
                </figure>
                <figure className="service-dotimage mb-0">
                    <img src="./images/service-dotimage.png" alt="" className="img-fluid"/>
                </figure>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="service_contentbox">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="service-box box-mb">
                                            <figure className="service-marketicon">
                                                <img src="./images/service-producticon.png" alt=""
                                                     className="img-fluid"/>
                                            </figure>
                                            <h4>ODC</h4>
                                            <p className="text-size-18">Cost savings of 35% - 60%,
                                                Dedicated full-time employees.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="box-top">
                                            <div className="service-box box-mb">
                                                <figure className="service-producticon">
                                                    <img src="./images/service-producticon.png" alt=""
                                                         className="img-fluid"/>
                                                </figure>
                                                <h4>MOBILE DEVELOPMENT</h4>
                                                <p className="text-size-18">iOS, Android, Flutter, React Native apps,
                                                    app testing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="service-box">
                                            <figure className="service-designicon">
                                                <img src="./images/service-producticon.png" alt=""
                                                     className="img-fluid"/>
                                            </figure>
                                            <h4>WEB DEVELOPMENT</h4>
                                            <p className="text-size-18">E-learning, e-commerce, Fintech, Web3, Custom
                                                Web,
                                                Cloud-Architecture Solutions.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="box-top">
                                            <div className="service-box">
                                                <figure className="service-dataicon">
                                                    <img src="./images/service-dataicon.png" alt=""
                                                         className="img-fluid"/>
                                                </figure>
                                                <h4>DATA LABELS</h4>
                                                <p className="text-size-18">Data annotation, HITL, In-house,
                                                    Crowdsourcing, Computer Vision.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="service_content position-relative" data-aos="fade-right">
                                <figure className="service-rightcircle mb-0">
                                    <img src="./images/service-rightcircle.png" alt="" className="img-fluid"/>
                                </figure>
                                <h6>Our Services</h6>
                                <h2>Accompany clients through every step of the digital journey.</h2>
                                <p>Our solutions are tailored to help
                                    overcome any business IT challenge.</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text"><i className="circle fa-duotone fa-check"></i>ODC - Offshore
                                        Development Center.
                                    </li>
                                    <li className="text"><i className="circle fa-duotone fa-check"></i>Mobile
                                        Development.
                                    </li>
                                    <li className="text"><i className="circle fa-duotone fa-check"></i>Web Development.
                                    </li>
                                    <li className="text text1"><i className="circle fa-duotone fa-check"></i>Data
                                        Labels.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="service-rightlayer mb-0">
                    <img src="./images/service-rightlayer.png" alt="" className="img-fluid"/>
                </figure>
            </section>
            {/*Offer*/}
            <Offer/>
            {/*About Us*/}
            <section className="about-section">
                <AboutUs/>
                <figure className="mb-0 about-rightimage">
                    <img src="./images/about-rightimage.png" alt="" className="img-fluid"/>
                </figure>
                <figure className="mb-0 about-rightcircle">
                    <img src="./images/about-rightcircle.png" alt="" className="img-fluid"/>
                </figure>
            </section>
            {/*Achievements*/}
            <section className="achievement-section">
                <figure className="service-rightlayer mb-0">
                    <img src="./images/service-leftlayer.png" alt="" className="img-fluid"/>
                </figure>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="achievement_content" data-aos="fade-right">
                                <figure className="offer-circleimage mb-0">
                                    <img src="./images/offer-circleimage.png" alt="" className="img-fluid"/>
                                </figure>
                                <h6>Achievements</h6>
                                <h2>Some Number of Our Achievements</h2>
                                <p>Our accomplishments stand as a testament to our commitment to quality, demonstrated
                                    through the enduring partnerships we uphold with both longstanding and new
                                    customers.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="achievement_wrapper">
                                <div className="achievement-box box1">
                                    <figure className="icon achievement-icon">
                                        <img src="./images/achievement-clienticon.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <div className="wrapper">
                                        <h3>200+</h3>
                                        <p className="text-size-18 mb-0">Clients</p>
                                    </div>
                                </div>
                                <div className="achievement-box box2">
                                    <figure className="icon1 achievement-icon">
                                        <img src="./images/achievement-projecticon.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <div className="wrapper">
                                        <h3>500+</h3>
                                        <p className="text-size-18 mb-0">Projects</p>
                                    </div>
                                </div>
                                <div className="achievement-box box3">
                                    <figure className="icon achievement-icon">
                                        <img src="./images/achievement-teamicon.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <div className="wrapper">
                                        <div className="number number1">
                                            <h3 className="value counter">100</h3>
                                            <span className="plus">+</span>
                                        </div>
                                        <p className="text text-size-18 mb-0">Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="service-leftlayer mb-0">
                    <img src="./images/service-rightlayer.png" alt="" className="img-fluid"/>
                </figure>
            </section>
            {/*Project*/}
            <section className="project-section">
                <figure className="offer-toplayer mb-0">
                    <img src="./images/offer-toplayer.png" alt="" className="img-fluid"/>
                </figure>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="project_content" data-aos="fade-right">
                                <h6>RECENT PROJECTS</h6>
                                <h2>Our Latest Case Studies</h2>
                                <p>Showcasing projects we've develop, authorized by our customers to be publicly
                                    displayed on our website.</p>
                                <figure className="offer-circleimage mb-0">
                                    <img src="./images/offer-circleimage.png" alt="" className="img-fluid"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="case-box1 case-box overlay">
                                    <div className="overlay-image">
                                        <figure className="image mb-0">
                                            <img src="./images/case-image1.png" alt="" className=""/>
                                        </figure>
                                    </div>
                                    <div className="content">
                                        <span className="text-white">Development</span>
                                        <h5 className="text-white">Chat Official</h5>
                                        <p className="text-white text-size-18">Chat Platform Financial...</p>
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="case-box overlay">
                                    <div className="overlay-image">
                                        <figure className="image mb-0">
                                            <img src="./images/case-image2.png" alt="" className=""/>
                                        </figure>
                                    </div>
                                    <div className="content">
                                        <span className="text-white">Mobile</span>
                                        <h5 className="text-white">Xtatuz</h5>
                                        <p className="text-white text-size-18">Hotel booking app...</p>
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="case-box2 case-box overlay">
                                    <div className="overlay-image">
                                        <figure className="image mb-0">
                                            <img src="./images/case-image3.png" alt="" className=""/>
                                        </figure>
                                    </div>
                                    <div className="content">
                                        <span className="text-white">Mobile</span>
                                        <h5 className="text-white">Live Shop</h5>
                                        <p className="text-white text-size-18">Live Shopping...</p>
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="case-box overlay">
                                    <div className="overlay-image">
                                        <figure className="image mb-0">
                                            <img src="./images/case-image4.png" alt="" className=""/>
                                        </figure>
                                    </div>
                                    <div className="content">
                                        <span className="text-white">Website</span>
                                        <h5 className="text-white">Lebo finance</h5>
                                        <p className="text-white text-size-18">Web3 application...</p>
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="case-box overlay">
                                    <div className="overlay-image">
                                        <figure className="image mb-0">
                                            <img src="./images/case-image5.png" alt="" className=""/>
                                        </figure>
                                    </div>
                                    <div className="content">
                                        <span className="text-white">Mobile</span>
                                        <h5 className="text-white">Position Exchange</h5>
                                        <p className="text-white text-size-18">Web3 decentralized exchanges...</p>
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="case-box1 case-box overlay">
                                    <div className="overlay-image">
                                        <figure className="image mb-0">
                                            <img src="./images/case-image6.png" alt="" className=""/>
                                        </figure>
                                    </div>
                                    <div className="content">
                                        <span className="text-white">Mobile</span>
                                        <h5 className="text-white">Enstack</h5>
                                        <p className="text-white text-size-18">Delivery manager...</p>
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="case-box overlay">
                                    <div className="overlay-image">
                                        <figure className="image mb-0">
                                            <img src="./images/case-image7.png" alt="" className=""/>
                                        </figure>
                                    </div>
                                    <div className="content">
                                        <span className="text-white">Website</span>
                                        <h5 className="text-white">Lexor</h5>
                                        <p className="text-white text-size-18">Platform Salon...</p>
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="case-box2 case-box overlay">
                                    <div className="overlay-image">
                                        <figure className="image mb-0">
                                            <img src="./images/case-image8.png" alt="" className=""/>
                                        </figure>
                                    </div>
                                    <div className="content">
                                        <span className="text-white">Website</span>
                                        <h5 className="text-white">91.com.vn</h5>
                                        <p className="text-white text-size-18">Traffic social network...</p>
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="case-box overlay">
                                    <div className="overlay-image">
                                        <figure className="image mb-0">
                                            <img src="./images/case-image9.png" alt="" className=""/>
                                        </figure>
                                    </div>
                                    <div className="content">
                                        <span className="text-white">Mobile</span>
                                        <h5 className="text-white">Tiamo</h5>
                                        <p className="text-white text-size-18">Vietnamobile social...</p>
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="case-box overlay">
                                    <div className="overlay-image">
                                        <figure className="image mb-0">
                                            <img src="./images/case-image10.png" alt="" className=""/>
                                        </figure>
                                    </div>
                                    <div className="content">
                                        <span className="text-white">Development</span>
                                        <h5 className="text-white">Web3 Lottery</h5>
                                        <p className="text-white text-size-18">Web3 Lottery...</p>
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="offer-bottomlayer mb-0">
                    <img src="./images/offer-bottomlayer.png" alt="" className="img-fluid"/>
                </figure>
            </section>
            {/*Testimonial*/}
            <section className="testimonial-section position-relative">
                <figure className="service-leftlayer mb-0">
                    <img src="./images/service-leftlayer.png" alt="" className="img-fluid"/>
                </figure>
                <Testimonial/>
                <figure className="service-rightlayer mb-0">
                    <img src="./images/service-rightlayer.png" alt="" className="img-fluid"/>
                </figure>
            </section>
        </>
    )
}