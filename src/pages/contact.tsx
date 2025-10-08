import React, {useRef, useState} from "react";
import {ContactForm} from "../components/ContactForm";
import {useRouter} from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
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
        toast(t('contact.successMessage'));
      }
    } catch (error) {
      toast(t('contact.errorMessage'));
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
                                <h6>{t('contact.subtitle')}</h6>
                                <h2>{t('contact.title')}</h2>
                                <div className="contact-box">
                                    <div className="box-image">
                                        <figure className="contact-location">
                                            <img src="./images/contact-location.png" alt="" className="img-fluid"/>
                                        </figure>
                                    </div>
                                    <div className="box-content">
                                        <h4>{t('contact.locationLabel')}</h4>
                                        <p className="text">{t('contact.locationAddress')}</p>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="box-image">
                                        <figure className="contact-email">
                                            <img src="./images/contact-email.png" alt="" className="img-fluid"/>
                                        </figure>
                                    </div>
                                    <div className="box-content">
                                        <h4 className="heading">{t('contact.emailLabel')}</h4>
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
                                    <h6 className="text-white">{t('contact.formSubtitle')}</h6>
                                    <h2 className="text-white">{t('contact.formTitle')}</h2>
                                    <form id="contactpage" onSubmit={submitContact} ref={formRef}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group mb-0">
                                                    <input type="text" required className="form_style" placeholder={t('contact.namePlaceholder')}
                                                           name="name"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-0">
                                                    <input type="email"  defaultValue={email} required className="form_style" placeholder={t('contact.emailPlaceholder')}
                                                           name="email"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className=" form-group mb-0">
                                                    <textarea className="form_style" placeholder={t('contact.messagePlaceholder')} rows={3}
                                                              name="comment"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="manage-button text-center">
                                            <button type="submit"
                                                    className="send_now text-white text-decoration-none">{t('contact.sendButton')}
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

