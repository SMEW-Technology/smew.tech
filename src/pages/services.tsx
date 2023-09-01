import React from "react";
import Offer from "@/components/Offer";

export default function Services() {
    return (
        <>
            <section className="servicepage-section service-section">
                <figure className="service-dotimage mb-0">
                    <img src="https://raw.githubusercontent.com/SMEW-Technology/smew.tech/main/src/assets/images/service-dotimage.png" alt="" className="img-fluid"/>
                </figure>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="servicepage_content" data-aos="fade-right">
                                <h6>Our Sevrices</h6>
                                <h2>ACCOMPANY CLIENTS THROUGH EVERY STEP OF THE DIGITAL JOURNEY.</h2>
                                <p>Our solutions are tailored to help overcome any business IT challenge.</p>
                                <figure className="offer-circleimage mb-0">
                                    <img src="https://raw.githubusercontent.com/SMEW-Technology/smew.tech/main/src/assets/images/offer-circleimage.png" alt="" className="img-fluid"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="service_contentbox">
                        <div className="row">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="service-box box-mb">
                                        <figure className="service-marketicon">
                                            <img src="https://raw.githubusercontent.com/SMEW-Technology/smew.tech/main/src/assets/images/service-producticon.png" alt=""
                                                 className="img-fluid"/>
                                        </figure>
                                        <h4>ODC</h4>
                                        <p className="text-size-18">Cost savings of 35% - 60%,
                                            Dedicated full-time employees.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-box box-mb">
                                        <figure className="service-producticon">
                                            <img src="https://raw.githubusercontent.com/SMEW-Technology/smew.tech/main/src/assets/images/service-producticon.png" alt=""
                                                 className="img-fluid"/>
                                        </figure>
                                        <h4>MOBILE DEVELOPMENT</h4>
                                        <p className="text-size-18">iOS, Android, Flutter, React Native apps,
                                            app testing.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-box">
                                        <figure className="service-designicon">
                                            <img src="https://raw.githubusercontent.com/SMEW-Technology/smew.tech/main/src/assets/images/service-producticon.png" alt=""
                                                 className="img-fluid"/>
                                        </figure>
                                        <h4>WEB DEVELOPMENT</h4>
                                        <p className="text-size-18">E-learning, e-commerce, Fintech, Web3, Custom
                                            Web,
                                            Cloud-Architecture Solutions.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-box">
                                        <figure className="service-dataicon">
                                            <img src="https://raw.githubusercontent.com/SMEW-Technology/smew.tech/main/src/assets/images/service-dataicon.png" alt="" className="img-fluid"/>
                                        </figure>
                                        <h4>Data Analysis</h4>
                                        <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit
                                            labo riosam aliruiea.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-box">
                                        <figure className="service-dataicon">
                                            <img src="https://raw.githubusercontent.com/SMEW-Technology/smew.tech/main/src/assets/images/service-dataicon.png" alt=""
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
            </section>
            <Offer />
        </>
    )
}