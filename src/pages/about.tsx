import React from "react";
import Testimonial from "../components/Testimonial";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
    const { t } = useLanguage();

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
                                        <span className="text-white text">{t('about.yearsOfExperience')}</span>
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
                                <h6>{t('about.subtitle')}</h6>
                                <h2>{t('about.title')}</h2>
                                <h3>{t('about.mission')}</h3>
                                <p className="text1">{t('about.missionText')}</p>
                                <h3>{t('about.vision')}</h3>
                                <p className="text1">{t('about.visionText')}</p>
                                <p className="text1">{t('about.description')}</p>
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
                                            <h2 className="section-title">{t('values.subtitle')}</h2>
                                            <p className="text1">{t('values.description')}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-orange aos-init aos-animate"
                                             data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">{t('values.innovation.title')}</h3>
                                            <p className="text1">{t('values.innovation.description')}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-blue aos-init aos-animate" data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">{t('values.quality.title')}</h3>
                                            <p className="text1">{t('values.quality.description')}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-green aos-init aos-animate" data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">{t('values.customer.title')}</h3>
                                            <p className="text1">{t('values.customer.description')}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-lightblue aos-init aos-animate"
                                             data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">{t('values.transparency.title')}</h3>
                                            <p className="text1">{t('values.transparency.description')}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="content-card card-blueviolet aos-init aos-animate"
                                             data-aos="fade-up"
                                             data-aos-duration="1000" data-aos-easing="ease-in-cubic">
                                            <h3 className="card-title">{t('values.collaboration.title')}</h3>
                                            <p className="text1">{t('values.collaboration.description')}</p>
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
                                <h6>{t('whyChoose.subtitle')}</h6>
                                <h2>{t('whyChoose.title')}</h2>
                                <p>{t('whyChoose.description')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative mb-5">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-orange" data-aos="fade-up">
                                <h3 className="card-title">{t('whyChoose.experience.title')}</h3>
                                <p className="text1">{t('whyChoose.experience.description')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-blue" data-aos="fade-up">
                                <h3 className="card-title">{t('whyChoose.team.title')}</h3>
                                <p className="text1">{t('whyChoose.team.description')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-green" data-aos="fade-up">
                                <h3 className="card-title">{t('whyChoose.cost.title')}</h3>
                                <p className="text1">{t('whyChoose.cost.description')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-lightblue" data-aos="fade-up">
                                <h3 className="card-title">{t('whyChoose.qualityAssurance.title')}</h3>
                                <p className="text1">{t('whyChoose.qualityAssurance.description')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="offer_content">
                                <h6>{t('achievements.subtitle')}</h6>
                                <h2>{t('achievements.title')}</h2>
                                <p>{t('achievements.description')}</p>
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
                                        <p className="text-size-18 mb-0">{t('achievements.clients')}</p>
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
                                        <p className="text-size-18 mb-0">{t('achievements.projects')}</p>
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
                                        <p className="text text-size-18 mb-0">{t('achievements.members')}</p>
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
                                        <p className="text text-size-18 mb-0">{t('achievements.awards')}</p>
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