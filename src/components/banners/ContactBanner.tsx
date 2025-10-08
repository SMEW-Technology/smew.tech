import React from "react";
import NavBar from "../../components/NavBar";
import { useLanguage } from "../../contexts/LanguageContext";

export default function ContactBanner() {
    const { t } = useLanguage();

    return (
        <div className="sub-banner">
            <figure className="sub-bannerleftlayer mb-0">
                <img src="./images/sub-bannerleftlayer.png" alt="" className="img-fluid"/>
            </figure>
            <NavBar/>
            <section className="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="banner_content" data-aos="fade-up">
                                <figure className="service-rightcircle mb-0">
                                    <img src="./images/service-rightcircle.png" alt="" className="img-fluid" />
                                </figure>
                                <h1 className="text-white">{t('contact.bannerTitle')}</h1>
                                <p>{t('contact.bannerDescription')}</p>
                                <div className="box">
                                    <span className="mb-0">{t('contact.breadcrumbHome')}</span>
                                    <figure className="mb-0 arrow">
                                        <img src="./images/button-arrow.png" alt="" className="img-fluid" />
                                        </figure>
                                    <span className="mb-0 box_span">{t('contact.breadcrumbContact')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <figure className="banner-circleright mb-0">
                <img src="./images/banner-circleright.png" className="img-fluid" alt="" />
            </figure>
            <figure className="sub-bannerrightlayer mb-0">
                <img src="./images/sub-bannerrightlayer.png" alt="" className="img-fluid" />
            </figure>
        </div>
)
}

