import React, {useRef, useState} from "react";
import {ContactForm} from "../components/ContactForm";
import {useRouter} from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Contact() {
  const router = useRouter();
  const { email } = router.query;
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  // @ts-ignore
  const submitContact = async (e) => {
    e.preventDefault();

    const objectParam = {
      "entry.195424463": e.target[0].value,
      "entry.523675412": e.target[1].value,
      "entry.655646402": e.target[2].value,
    };

    const params = new URLSearchParams();

    Object.entries(objectParam).forEach(([key, value]) => {
      params.append(key, value);
    });

    var formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfzclPs0xYECxknJnW3NVMB-ugOFhM3Zi5p76VqMptr1nLmSA/formResponse?&submit=Submit?usp=pp_url&${params.toString()}`;

    try {
      const res = await fetch(formUrl, {
        mode: "no-cors",
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (res) {
        formRef.current?.reset();
        toast(
          "Thanks for contacting us! We will be in touch with you shortly!"
        );
      }
    } catch (error) {
      toast("An error occurred, please try again later!");
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
                                            <Link href="mailto:contact@smew.tech"
                                               className="text-decoration-none">contact@smew.tech</Link>
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
                                    <form id="contactpage" onSubmit={submitContact} ref={formRef}>
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

