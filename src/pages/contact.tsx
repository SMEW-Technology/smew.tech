import React, {useRef, useState} from "react";
import {ContactForm} from "../components/ContactForm";
import {useRouter} from "next/router";

export default function Contact() {
    const router = useRouter()
    const {email} = router.query
    const [message, setMessage] = useState("");
    const formRef = useRef();
    // @ts-ignore
    const submitContact = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        const res = await ContactForm({
            name: e.target[0].value,
            email: e.target[1].value,
            comment: e.target[2].value,
        });
        if (res == 0) {
            setMessage("Thank you for your valuable comment!");
            // @ts-ignore
            formRef.current.reset();
        } else {
            setMessage("Something went wrong! Please try again");
        }
    };

    return (
        <>
            <section className="contact-section">
                <figure className="offer-toplayer mb-0">
                    <img src="./images/offer-toplayer.png" alt="" className="img-fluid"/>
                </figure>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="contact_content" data-aos="fade-right">
                                <h6>Contact Info</h6>
                                <h2>Get in Touch</h2>
                                <div className="contact-box">
                                    <div className="box-image">
                                        <figure className="contact-location">
                                            <img src="./images/contact-location.png" alt="" className="img-fluid"/>
                                        </figure>
                                    </div>
                                    <div className="box-content">
                                        <h4>Location:</h4>
                                        <p className="text">No.51 Cau Giay street, Dich Vong
                                            Ward, Cau Giay District, Hanoi City, Vietnam.</p>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="box-image">
                                        <figure className="contact-email">
                                            <img src="./images/contact-email.png" alt="" className="img-fluid"/>
                                        </figure>
                                    </div>
                                    <div className="box-content">
                                        <h4 className="heading">Email:</h4>
                                        <p>
                                            <a href="mailto:contact@smew.tech"
                                               className="text-decoration-none">contact@smew.tech</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="need-section">
                                <figure className="offer-circleimage mb-0">
                                    <img src="./images/offer-circleimage.png" alt="" className="img-fluid"/>
                                </figure>
                                <div className="need_content">
                                    <h6 className="text-white">Write to us</h6>
                                    <h2 className="text-white">send us a Message</h2>
                                    <form id="contactpage" onSubmit={submitContact}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group mb-0">
                                                    <input type="text" required className="form_style" placeholder="Your Name:"
                                                           name="name"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-0">
                                                    <input type="email"  defaultValue={email} required className="form_style" placeholder="Your Email:"
                                                           name="email"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className=" form-group mb-0">
                                                    <textarea className="form_style" placeholder="Message" rows={3}
                                                              name="comment"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="manage-button text-center">
                                            <button type="submit"
                                                    className="send_now text-white text-decoration-none">Send Now
                                                <i className="circle fa-thin fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </form>
                                    <figure className="faq-image mb-0">
                                        <img src="./images/faq-image.png" alt="" className="img-fluid"/>
                                    </figure>
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
    )
}

