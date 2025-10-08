import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
    const router = useRouter()
    const { t } = useLanguage();

    // @ts-ignore
    const submitContact = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        router.push('/contact?email=' + e.target[0].value)
    };

    return (
        <>
            <section className="footer-section">
                <figure className="footer-leftimage mb-0">
                    <img src="./images/footer-leftimage.png" alt="" className="img-fluid"/>
                </figure>
                <figure className="mb-0 about-leftcircle">
                    <img src="./images/about-rightcircle.png" alt="" className="img-fluid"/>
                </figure>

                <div className="container-fluid px-lg-5 px-md-4 px-3">
                    <div className="middle-portion">
                        <div className="row g-4">
                            {/* Logo and Email Column */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="first-column">
                                    <Link href="/">
                                        <figure className="footer-logo">
                                            <img src="./images/logo.png" className="img-fluid h-150 logo-resize" alt=""/>
                                        </figure>
                                    </Link>
                                    <p className="text-size-18 footer-text">{t('footer.tagline')}</p>
                                    <div className="lower">
                                        <div className="lower-content">
                                            <figure className="icon">
                                                <img src="./images/footer-emailicon.png" alt="" className="img-fluid"/>
                                            </figure>
                                            <div className="content">
                                                <span className="text-white">{t('footer.email')}</span>
                                                <a href="/contact"
                                                   className="text-size-18 mb-0 text-decoration-none">contact@smew.tech</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links Column */}
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="links">
                                    <h4 className="heading text-white">{t('footer.quickLinks')}</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li><Link href="/" className="text-size-18 text text-decoration-none">{t('nav.home')}</Link></li>
                                        <li><Link href="/about" className="text-size-18 text text-decoration-none">{t('nav.about')}</Link></li>
                                        <li><Link href="/services" className="text-size-18 text text-decoration-none">{t('nav.services')}</Link></li>
                                        <li><Link href="/projects" className="text-size-18 text text-decoration-none">{t('nav.projects')}</Link></li>
                                        <li><Link href="/contact" className="text-size-18 text text-decoration-none">{t('nav.contact')}</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Our Services Column */}
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="links">
                                    <h4 className="heading text-white">{t('footer.ourServices')}</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li><Link href="/services" className="text-size-18 text text-decoration-none">ODC</Link></li>
                                        <li><Link href="/services" className="text-size-18 text text-decoration-none">Mobile</Link></li>
                                        <li><Link href="/services" className="text-size-18 text text-decoration-none">Website</Link></li>
                                        <li><Link href="/services" className="text-size-18 text text-decoration-none">Data Labels</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3 col-sm-6"> </div>
                            {/* Contact Form Column */}
                            <div className="col-lg-4 col-md-12 col-sm-12 ms-lg-auto">
                                <div className="icons" style={{maxWidth: '380px'}}>
                                    <h4 className="heading mb-0 text-white">{t('footer.moreQuestions')}</h4>
                                    <h4 className="heading text-white">{t('footer.getInTouch')}</h4>
                                    <p className="text-size-18 footer-text text-white">{t('footer.contactCTA')}</p>
                                    <form id="contactpage1" method="POST" onSubmit={submitContact}>
                                        <div className="form-group mb-0">
                                            <input type="text" className="form_style" placeholder={t('footer.emailPlaceholder')}
                                                   name="email"/>
                                        </div>
                                        <button type="submit"
                                                className="subscribe_now text-white text-decoration-none">{t('footer.contactNow')}
                                            <i className="circle fa-thin fa-arrow-right"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="copyright">
                        <div className="row copyright-border g-0">
                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                <p className="text-size-16 mb-0">{t('footer.copyright')}</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-md-block d-none">
                                <div className="social-icons position-relative">
                                    <ul className="list-unstyled position-absolute mb-0">
                                        <li><a href="https://www.facebook.com/profile.php?id=61561884150369" className="text-decoration-none"><i
                                            className="fa-brands fa-facebook-f social-networks"></i></a></li>
                                        <li><a href="" className="text-decoration-none"><i
                                            className="fa-brands fa-twitter social-networks"></i></a></li>
                                        <li><a href="" className="text-decoration-none"><i
                                            className="fa-brands fa-google-plus-g social-networks"></i></a></li>
                                        <li><a href="" className="text-decoration-none"><i
                                            className="fa-brands fa-instagram social-networks"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <figure className="footer-dotimage mb-0">
                    <img src="./images/footer-dotimage.png" alt="" className="img-fluid"/>
                </figure>
                <figure className="footer-leftlayer mb-0">
                    <img src="./images/footer-leftlayer.png" alt="" className="img-fluid"/>
                </figure>
            </section>
        </>
    )
}
