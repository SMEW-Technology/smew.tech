import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Testimonial() {
    const { t } = useLanguage();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                        <div className="testimonial_wrapper position-relative" data-aos="fade-right">
                            <figure className="service-rightcircle mb-0">
                                <img src="./images/service-rightcircle.png" alt="" className="img-fluid"/>
                            </figure>
                            <div className="circle_wrapper position-relative">
                                <div className="center-circle">
                                    <figure className="testimonial-centerimage mb-0">
                                        <img src="./images/testimonial-centerimage.png" alt=""
                                             className="img-fluid"/>
                                    </figure>
                                </div>
                                <figure className="testimonial-image1 position-absolute mb-0">
                                    <img src="./images/testimonial-image1.png" alt="" className="img-fluid"/>
                                </figure>
                                <figure className="testimonial-image2 position-absolute mb-0">
                                    <img src="./images/testimonial-image2.png" alt="" className="img-fluid"/>
                                </figure>
                                <figure className="testimonial-image3 position-absolute mb-0">
                                    <img src="./images/testimonial-image3.png" alt="" className="img-fluid"/>
                                </figure>
                                <figure className="testimonial-image4 position-absolute mb-0">
                                    <img src="./images/testimonial-image4.png" alt="" className="img-fluid"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                        <div className="testimonial_contentwrapper">
                            <div className="heading">
                                <h6>{t('testimonials.subtitle')}</h6>
                                <h2>{t('testimonials.title')}</h2>
                            </div>
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="testimonial_content">
                                            <div className="content-box">
                                                <p>{t('testimonials.testimonial1.text')}</p>
                                                <div className="content">
                                                    <div className="circle">
                                                        <figure className="testimonial-quote mb-0">
                                                            <img src="./images/testimonial-quote.png" alt=""
                                                                 className="img-fluid"/>
                                                        </figure>
                                                    </div>
                                                    <div className="designation-outer">
                                                        <span>{t('testimonials.testimonial1.name')}</span>
                                                        <p className="text-size-18 mb-0">{t('testimonials.happyClient')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial_content">
                                            <div className="content-box">
                                                <p>{t('testimonials.testimonial2.text')}</p>
                                                <div className="content">
                                                    <div className="circle">
                                                        <figure className="testimonial-quote mb-0">
                                                            <img src="./images/testimonial-quote.png" alt=""
                                                                 className="img-fluid"/>
                                                        </figure>
                                                    </div>
                                                    <div className="designation-outer">
                                                        <span>{t('testimonials.testimonial2.name')}</span>
                                                        <p className="text-size-18 mb-0">{t('testimonials.happyClient')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial_content">
                                            <div className="content-box">
                                                <p>{t('testimonials.testimonial3.text')}</p>
                                                <div className="content">
                                                    <div className="circle">
                                                        <figure className="testimonial-quote mb-0">
                                                            <img src="./images/testimonial-quote.png" alt=""
                                                                 className="img-fluid"/>
                                                        </figure>
                                                    </div>
                                                    <div className="designation-outer">
                                                        <span>{t('testimonials.testimonial3.name')}</span>
                                                        <p className="text-size-18 mb-0">{t('testimonials.happyClient')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial_content">
                                            <div className="content-box">
                                                <p>{t('testimonials.testimonial4.text')}</p>
                                                <div className="content">
                                                    <div className="circle">
                                                        <figure className="testimonial-quote mb-0">
                                                            <img src="./images/testimonial-quote.png" alt=""
                                                                 className="img-fluid"/>
                                                        </figure>
                                                    </div>
                                                    <div className="designation-outer">
                                                        <span>{t('testimonials.testimonial4.name')}</span>
                                                        <p className="text-size-18 mb-0">{t('testimonials.happyClient')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial_content">
                                            <div className="content-box">
                                                <p>{t('testimonials.testimonial5.text')}</p>
                                                <div className="content">
                                                    <div className="circle">
                                                        <figure className="testimonial-quote mb-0">
                                                            <img src="./images/testimonial-quote.png" alt=""
                                                                 className="img-fluid"/>
                                                        </figure>
                                                    </div>
                                                    <div className="designation-outer">
                                                        <span>{t('testimonials.testimonial5.name')}</span>
                                                        <p className="text-size-18 mb-0">{t('testimonials.happyClient')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination-outer">
                                    <a className="carousel-control-prev" href="#carouselExampleControls"
                                       role="button" data-slide="prev">
                                        <i className="fa-solid fa-arrow-left"></i>
                                        <span className="sr-only">{t('testimonials.previous')}</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls"
                                       role="button" data-slide="next">
                                        <i className="fa-solid fa-arrow-right-long"></i>
                                        <span className="sr-only">{t('testimonials.next')}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}