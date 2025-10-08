import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function AboutUs() {
    const { t } = useLanguage();

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
                                    <span className="text-white text">{t('about.yearsOfExperience')}</span>
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
                            <h6>{t('about.subtitle')}</h6>
                            <h2 className="text-white">{t('about.title')}</h2>
                            <p className="text1"><strong>{t('about.mission')}</strong> {t('about.missionText')}</p>
                            <p className="text1"><strong>{t('about.vision')}</strong> {t('about.visionText')}</p>
                            <p className="text1">{t('about.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}