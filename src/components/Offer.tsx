import React from "react";

export default function Offer() {
    return (
        <>
            <section className="offer-section">
                <figure className="offer-toplayer mb-0">
                    <img src="./images/offer-toplayer.png" alt="" className="img-fluid"/>
                </figure>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="offer_content" data-aos="fade-up">
                                <h6>OUR CORE VALUES IN ACTION</h6>
                                <h2>Our Philosophy: Technology for Business</h2>
                                <p>At SMEW Tech, we don't just code—we architect business solutions. Our philosophy is that technology must stem from a deep understanding of your challenges and strategic goals. We believe technology is truly powerful only when it solves real problems, creates competitive advantages, and drives sustainable growth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative">
                        <figure className="offer-circleimage mb-0">
                            <img src="./images/offer-circleimage.png" alt="" className="img-fluid"/>
                        </figure>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 article_padding">
                            <div className="offer_boxcontent">
                                <div className="upper_portion">
                                    <figure className="mb-0">
                                        <img src="./images/offer-image1.jpg" className="article_img" alt=""/>
                                    </figure>
                                    <div className="image_content">
                                        <figure className="offer-icon">
                                            <img src="./images/offer-icon1.png" alt="" className="img-fluid"/>
                                        </figure>
                                    </div>
                                </div>
                                <div className="lower_portion_wrapper">
                                    <div className="lower_portion">
                                        <h4 className="mb-0">Innovation Focused on Effectiveness</h4>
                                        <p className="text-size-16">We apply new technologies not to follow trends, but to find the most effective solutions to your business challenges.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 article_padding">
                            <div className="offer_boxcontent">
                                <div className="upper_portion">
                                    <figure className="mb-0">
                                        <img src="./images/offer-image2.jpg" className="article_img" alt=""/>
                                    </figure>
                                    <div className="image_content">
                                        <figure className="offer-icon offer-icon2">
                                            <img src="./images/offer-icon2.png" alt="" className="img-fluid"/>
                                        </figure>
                                    </div>
                                </div>
                                <div className="lower_portion_wrapper">
                                    <div className="lower_portion">
                                        <h4 className="mb-0">Quality for Business Goals</h4>
                                        <p className="text-size-16">Quality products are not just bug-free—they are stable, secure, and directly contribute to your revenue and cost objectives.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 article_padding">
                            <div className="offer_boxcontent mb-0">
                                <div className="upper_portion">
                                    <figure className="mb-0">
                                        <img src="./images/offer-image3.jpg" className="article_img" alt=""/>
                                    </figure>
                                    <div className="image_content">
                                        <figure className="offer-icon">
                                            <img src="./images/offer-icon3.png" alt="" className="img-fluid"/>
                                        </figure>
                                    </div>
                                </div>
                                <div className="lower_portion_wrapper">
                                    <div className="lower_portion">
                                        <h4 className="mb-0">Customer-Centric Strategy</h4>
                                        <p className="text-size-16">We listen to understand, consult to optimize, and partner as an integral part of your company.</p>
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
        </>
    );
}