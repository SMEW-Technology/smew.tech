import React from "react";
import Offer from "../components/Offer";

export default function Services() {
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
                                <h6>Our Services</h6>
                                <h2>Comprehensive Technology Solutions</h2>
                                <p>Strategic solutions tailored to overcome any business IT challenge and drive sustainable growth. We don't just provide services—we architect business solutions.</p>
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
                                        <h4>Strategic Development Center (ODC)</h4>
                                        <p className="text-size-18"><strong>Not just outsourcing—strategic team expansion.</strong> Different from traditional outsourcing, our ODC operates as an extension of your R&D and strategic team. We don't just receive and execute requirements—we analyze and consult alongside you. Custom-built teams based on technical skills and cultural fit, deeply integrated into your core workflows. Superior ROI: 35%-60% cost savings while maintaining a dedicated team with deep product understanding and business goal alignment.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-box box-mb">
                                        <figure className="service-producticon">
                                            <img src="./images/service-producticon.png" alt=""
                                                 className="img-fluid"/>
                                        </figure>
                                        <h4>MOBILE APP DEVELOPMENT</h4>
                                        <p className="text-size-18">We build applications that are not only beautiful in interface but also optimized for conversion rates and increased user engagement. Expertise in iOS, Android, Flutter, and React Native to deliver seamless cross-platform experiences.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-box">
                                        <figure className="service-designicon">
                                            <img src="./images/service-producticon.png" alt=""
                                                 className="img-fluid"/>
                                        </figure>
                                        <h4>WEB DEVELOPMENT</h4>
                                        <p className="text-size-18">Building powerful, scalable web platforms that help you operate efficiently, reduce costs, and are ready for future growth. Specializing in e-learning, e-commerce, Fintech, Web3, custom web solutions, and cloud-architecture platforms.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-box">
                                        <figure className="service-dataicon">
                                            <img src="./images/service-dataicon.png" alt=""
                                                 className="img-fluid"/>
                                        </figure>
                                        <h4>DATA LABELING</h4>
                                        <p className="text-size-18">Providing absolutely accurate input data as a solid foundation for your AI models to make smarter and more effective business decisions. Services include data annotation, HITL (Human-in-the-Loop), in-house labeling, crowdsourcing, and computer vision solutions.</p>
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
                                <h6>Technology Platform</h6>
                                <h2>Technologies We Use</h2>
                                <p>We constantly update and apply the most powerful technologies to create optimal solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-orange" data-aos="fade-up">
                                <h3 className="card-title">Programming Languages</h3>
                                <p className="text1">JavaScript, Python, Java, Golang, Rust, PHP, Swift, Kotlin, TypeScript</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-blue" data-aos="fade-up">
                                <h3 className="card-title">Platforms & Frameworks</h3>
                                <p className="text1"><strong>Frontend:</strong> NextJS, NestJS, ReactJS, AngularJS, Vue.js</p>
                                <p className="text1"><strong>Backend:</strong> Node.js, Django, Laravel, Spring Boot, Go</p>
                                <p className="text1"><strong>Mobile:</strong> React Native, Flutter, Native (iOS, Android)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-green" data-aos="fade-up">
                                <h3 className="card-title">Databases & Cloud</h3>
                                <p className="text1"><strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, Firebase, Redis</p>
                                <p className="text1"><strong>Cloud Platforms:</strong> AWS, Google Cloud Platform (GCP), Microsoft Azure</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="content-card card-lightblue" data-aos="fade-up">
                                <h3 className="card-title">Web3 & Blockchain</h3>
                                <p className="text1">Solidity, Rust, Ethereum, Solana, Binance Smart Chain, Smart Contracts</p>
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
                                <h6>Our Professional Workflow</h6>
                                <h2>Optimized Project Implementation Process</h2>
                                <p>We believe a clear workflow is the key to success. At SMEW Tech, we apply a 6-phase working model.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-orange" data-aos="fade-up">
                                <h3 className="card-title">1. Discovery & Analysis</h3>
                                <p className="text1">Listen, clarify ideas, goals, and project requirements. Research market and competitors.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-blue" data-aos="fade-up">
                                <h3 className="card-title">2. UI/UX Design</h3>
                                <p className="text1">Build wireframes and prototypes. Design modern, user-friendly interfaces optimized for user experience.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-green" data-aos="fade-up">
                                <h3 className="card-title">3. Development & Programming</h3>
                                <p className="text1">Engineering team programs features. Apply Agile/Scrum methodology to ensure timeline.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-lightblue" data-aos="fade-up">
                                <h3 className="card-title">4. Testing</h3>
                                <p className="text1">Comprehensive testing across multiple devices and scenarios to detect and fix bugs, ensuring stable product operation.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-blueviolet" data-aos="fade-up">
                                <h3 className="card-title">5. Deployment & Handover</h3>
                                <p className="text1">Deploy product to production environment. Handover source code and detailed documentation.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="content-card card-orange" data-aos="fade-up">
                                <h3 className="card-title">6. Maintenance & Support</h3>
                                <p className="text1">Monitor and ensure system operates stably post-launch. Provide technical support and upgrade packages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Offer />
        </>
    )
}