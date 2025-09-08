import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Footer() {
    const router = useRouter()
    // @ts-ignore
    const submitContact = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        router.push('/contact?email=' + e.target[0].value)
    };

    return (
        <>
            <section className="footer-section">
                <div className="container">
                    <figure className="footer-leftimage mb-0">
                        <img src="./images/footer-leftimage.png" alt="" className="img-fluid"/>
                    </figure>
                    <figure className="mb-0 about-leftcircle">
                        <img src="./images/about-rightcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <div className="middle-portion">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                                <div className="first-column">
                                    <Link href="/">
                                        <figure className="footer-logo">
                                            <img src="./images/logo.png" className="img-fluid h-150 logo-resize" alt=""/>
                                        </figure>
                                    </Link>
                                    <p className="text-size-18 footer-text">Speed, Scale, Global Presence, Quality and Compliance.</p>
                                    <div className="lower">
                                        <div className="lower-content">
                                            <figure className="icon">
                                                <img src="./images/footer-emailicon.png" alt="" className="img-fluid"/>
                                            </figure>
                                            <div className="content">
                                                <span className="text-white">Email us:</span>
                                                <a href="/contact"
                                                   className="text-size-18 mb-0 text-decoration-none">contact@smew.tech</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-md-block d-none">
                                <div className="links list-pd">
                                    <h4 className="heading text-white">Quick Links</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="https://smew.tech/"
                                                  className="text-size-18 text text-decoration-none">Home</a></li>
                                        <li><Link href="/about"
                                                  className="text-size-18 text text-decoration-none">About</Link></li>
                                        <li><a href="https://smew.tech/services"
                                                  className="text-size-18 text text-decoration-none">Services</a>
                                        </li>
                                        <li><Link href="/projects"
                                                  className="text-size-18 text text-decoration-none">Projects</Link>
                                        </li>
                                        <li><Link href="/contact"
                                                  className="text-size-18 text text-decoration-none">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-12 d-lg-block d-none">
                                <div className="links">
                                    <h4 className="heading text-white">Our Services</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="https://smew.tech/services" className="text-size-18 text text-decoration-none">ODC</a></li>
                                        <li><a href="https://smew.tech/services"
                                                  className="text-size-18 text text-decoration-none">Mobile</a>
                                        </li>
                                        <li><a href="https://smew.tech/services" className="text-size-18 text text-decoration-none">Website</a></li>
                                        <li><a href="https://smew.tech/services"
                                                  className="text-size-18 text text-decoration-none">Data Labels</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-sm-block d-none">
                                <div className="icons">
                                    <h4 className="heading mb-0 text-white">More questions?</h4>
                                    <h4 className="heading text-white">Get in touch below</h4>
                                    <p className="text-size-18 footer-text text-white">Stay connected in your country via email.</p>
                                    <form id="contactpage1" method="POST" onSubmit={submitContact}>
                                        <div className="form-group mb-0">
                                            <input type="text" className="form_style" placeholder="Enter Email Address:"
                                                   name="email"/>
                                        </div>
                                        <button type="submit"
                                                className="subscribe_now text-white text-decoration-none">Contact Now
                                            <i className="circle fa-thin fa-arrow-right"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row copyright-border">
                                <div className="col-lg-6 col-md-6 col-sm-12 co-12 column">
                                    <p className="text-size-16">Copyright ©2023 SMEW.tech All Rights Reserved</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 co-12 d-md-block d-none">
                                    <div className="social-icons position-relative">
                                        <ul className="list-unstyled position-absolute">
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
                </div>
            </section>
        </>
    )
}