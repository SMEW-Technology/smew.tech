import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Offer() {
    const { t } = useLanguage();

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
                                <h6>{t('values.subtitle')}</h6>
                                <h2>{t('values.title')}</h2>
                                <p>{t('values.description')}</p>
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
                                        <h4 className="mb-0">{t('values.innovation.title')}</h4>
                                        <p className="text-size-16">{t('values.innovation.description')}</p>
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
                                        <h4 className="mb-0">{t('values.quality.title')}</h4>
                                        <p className="text-size-16">{t('values.quality.description')}</p>
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
                                        <h4 className="mb-0">{t('values.customer.title')}</h4>
                                        <p className="text-size-16">{t('values.customer.description')}</p>
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