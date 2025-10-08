import React from "react";
import Offer from "../components/Offer";
import { useLanguage } from "../contexts/LanguageContext";

export default function Services() {
    const { t } = useLanguage();

    return (
        <>
            <section className="servicepage-section service-section">
                <figure className="service-dotimage mb-0">
                    <img src="./images/service-dotimage.png" alt="" className="img-fluid"/>
                </figure>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="servicepage_content" data-aos="fade-right">
                                <h6>{t('services.subtitle')}</h6>
                                <h2>{t('services.title')}</h2>
                                <p>{t('services.description')}</p>
                                <figure className="offer-circleimage mb-0">
                                    <img src="./images/offer-circleimage.png" alt="" className="img-fluid"/>
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
                                            <img src="./images/service-producticon.png" alt=""
                                                 className="img-fluid"/>
                                        </figure>
                                        <h4>{t('services.odc.title')}</h4>
                                        <p className="text-size-18">{t('services.odc.description')}</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-box box-mb">
                                        <figure className="service-producticon">
                                            <img src="./images/service-producticon.png" alt=""
                                                 className="img-fluid"/>
                                        </figure>
                                        <h4>{t('services.mobile.title')}</h4>
                                        <p className="text-size-18">{t('services.mobile.description')}</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-box">
                                        <figure className="service-designicon">
                                            <img src="./images/service-producticon.png" alt=""
                                                 className="img-fluid"/>
                                        </figure>
                                        <h4>{t('services.web.title')}</h4>
                                        <p className="text-size-18">{t('services.web.description')}</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-box">
                                        <figure className="service-dataicon">
                                            <img src="./images/service-dataicon.png" alt=""
                                                 className="img-fluid"/>
                                        </figure>
                                        <h4>{t('services.dataLabeling.title')}</h4>
                                        <p className="text-size-18">{t('services.dataLabeling.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack Section */}
            <section className="aboutoffer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="offer_content">
                                <h6>{t('technology.subtitle')}</h6>
                                <h2>{t('technology.title')}</h2>
                                <p>{t('technology.description')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-orange" data-aos="fade-up">
                                <h3 className="card-title">{t('technology.languages')}</h3>
                                <p className="text1">{t('technology.languagesContent')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-blue" data-aos="fade-up">
                                <h3 className="card-title">{t('technology.frameworks')}</h3>
                                <p className="text1"><strong>{t('technology.frameworksFrontend')}</strong> {t('technology.frameworksFrontendContent')}</p>
                                <p className="text1"><strong>{t('technology.frameworksBackend')}</strong> {t('technology.frameworksBackendContent')}</p>
                                <p className="text1"><strong>{t('technology.frameworksMobile')}</strong> {t('technology.frameworksMobileContent')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-green" data-aos="fade-up">
                                <h3 className="card-title">{t('technology.databases')}</h3>
                                <p className="text1"><strong>{t('technology.databasesLabel')}</strong> {t('technology.databasesContent')}</p>
                                <p className="text1"><strong>{t('technology.cloudLabel')}</strong> {t('technology.cloudContent')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-lightblue" data-aos="fade-up">
                                <h3 className="card-title">{t('technology.web3')}</h3>
                                <p className="text1">{t('technology.web3Content')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="aboutoffer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="offer_content">
                                <h6>{t('workflow.subtitle')}</h6>
                                <h2>{t('workflow.title')}</h2>
                                <p>{t('workflow.description')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-orange" data-aos="fade-up">
                                <h3 className="card-title">1. {t('workflow.discovery')}</h3>
                                <p className="text1">{t('workflow.discoveryDescription')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-blue" data-aos="fade-up">
                                <h3 className="card-title">2. {t('workflow.design')}</h3>
                                <p className="text1">{t('workflow.designDescription')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-green" data-aos="fade-up">
                                <h3 className="card-title">3. {t('workflow.development')}</h3>
                                <p className="text1">{t('workflow.developmentDescription')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-lightblue" data-aos="fade-up">
                                <h3 className="card-title">4. {t('workflow.testing')}</h3>
                                <p className="text1">{t('workflow.testingDescription')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-blueviolet" data-aos="fade-up">
                                <h3 className="card-title">5. {t('workflow.deployment')}</h3>
                                <p className="text1">{t('workflow.deploymentDescription')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-orange" data-aos="fade-up">
                                <h3 className="card-title">6. {t('workflow.maintenance')}</h3>
                                <p className="text1">{t('workflow.maintenanceDescription')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Offer />
        </>
    )
}