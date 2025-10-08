import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Projects() {
    const { t } = useLanguage();

    return (
       <>
           <section className="project-section projectpage-section">
               <figure className="offer-toplayer mb-0">
                   <img src="./images/offer-toplayer.png" alt="" className="img-fluid" />
               </figure>
               <div className="container">
                   <div className="row">
                       <div className="col-12">
                           <div className="project_content" data-aos="fade-right">
                               <h6>{t('projects.subtitle')}</h6>
                               <h2>{t('projects.title')}</h2>
                               <p>{t('projects.description')}</p>
                               <figure className="offer-circleimage mb-0">
                                   <img src="./images/offer-circleimage.png" alt="" className="img-fluid" />
                               </figure>
                           </div>
                       </div>
                   </div>
                   <div className="project_wrapper">
                       <div className="row" data-aos="fade-up">
                           <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                               <div className="case-box overlay">
                                   <div className="overlay-image">
                                       <figure className="image mb-0">
                                           <img src="./images/case-image2.png" alt="" className="" />
                                       </figure>
                                   </div>
                                   <div className="content">
                                       <span className="text-white">{t('projects.items.xtatuz.category')}</span>
                                       <h5 className="text-white">{t('projects.items.xtatuz.name')}</h5>
                                       <p className="text-white text-size-18">{t('projects.items.xtatuz.description')}</p>
                                       <i className=""></i>
                                   </div>
                               </div>
                           </div>
                           <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                               <div className="case-box2 case-box overlay">
                                   <div className="overlay-image">
                                       <figure className="image mb-0">
                                           <img src="./images/case-image3.png" alt="" className="" />
                                       </figure>
                                   </div>
                                   <div className="content">
                                       <span className="text-white">{t('projects.items.liveShop.category')}</span>
                                       <h5 className="text-white">{t('projects.items.liveShop.name')}</h5>
                                       <p className="text-white text-size-18">{t('projects.items.liveShop.description')}</p>
                                       <i className=""></i>
                                   </div>
                               </div>
                           </div>
                           <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                               <div className="case-box overlay">
                                   <div className="overlay-image">
                                       <figure className="image mb-0">
                                           <img src="./images/case-image4.png" alt="" className="" />
                                       </figure>
                                   </div>
                                   <div className="content">
                                       <span className="text-white">{t('projects.items.leboFinance.category')}</span>
                                       <h5 className="text-white">{t('projects.items.leboFinance.name')}</h5>
                                       <p className="text-white text-size-18">{t('projects.items.leboFinance.description')}</p>
                                       <i className=""></i>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="lower-images">
                           <div className="row">
                               <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                   <div className="case-box1 case-box overlay">
                                       <div className="overlay-image">
                                           <figure className="image mb-0">
                                               <img src="./images/case-image1.png" alt="" className="" />
                                           </figure>
                                       </div>
                                       <div className="content">
                                           <span className="text-white">{t('projects.items.chatOfficial.category')}</span>
                                           <h5 className="text-white">{t('projects.items.chatOfficial.name')}</h5>
                                           <p className="text-white text-size-18">{t('projects.items.chatOfficial.description')}</p>
                                           <i className=""></i>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                   <div className="case-box overlay">
                                       <div className="overlay-image">
                                           <figure className="image mb-0">
                                               <img src="./images/case-image6.png" alt="" className="" />
                                           </figure>
                                       </div>
                                       <div className="content">
                                           <span className="text-white">{t('projects.items.enstack.category')}</span>
                                           <h5 className="text-white">{t('projects.items.enstack.name')}</h5>
                                           <p className="text-white text-size-18">{t('projects.items.enstack.description')}</p>
                                           <i className=""></i>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                   <div className="case-box overlay">
                                       <div className="overlay-image">
                                           <figure className="image mb-0">
                                               <img src="./images/case-image5.png" alt="" className="" />
                                           </figure>
                                       </div>
                                       <div className="content">
                                           <span className="text-white">{t('projects.items.positionExchange.category')}</span>
                                           <h5 className="text-white">{t('projects.items.positionExchange.name')}</h5>
                                           <p className="text-white text-size-18">{t('projects.items.positionExchange.description')}</p>
                                           <i className=""></i>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                   <div className="case-box overlay">
                                       <div className="overlay-image">
                                           <figure className="image mb-0">
                                               <img src="./images/case-image7.png" alt="" className=""/>
                                           </figure>
                                       </div>
                                       <div className="content">
                                           <span className="text-white">{t('projects.items.lexor.category')}</span>
                                           <h5 className="text-white">{t('projects.items.lexor.name')}</h5>
                                           <p className="text-white text-size-18">{t('projects.items.lexor.description')}</p>
                                           <i className=""></i>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                   <div className="case-box2 case-box overlay">
                                       <div className="overlay-image">
                                           <figure className="image mb-0">
                                               <img src="./images/case-image8.png" alt="" className=""/>
                                           </figure>
                                       </div>
                                       <div className="content">
                                           <span className="text-white">{t('projects.items.network91.category')}</span>
                                           <h5 className="text-white">{t('projects.items.network91.name')}</h5>
                                           <p className="text-white text-size-18">{t('projects.items.network91.description')}</p>
                                           <i className=""></i>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                   <div className="case-box overlay">
                                       <div className="overlay-image">
                                           <figure className="image mb-0">
                                               <img src="./images/case-image9.png" alt="" className=""/>
                                           </figure>
                                       </div>
                                       <div className="content">
                                           <span className="text-white">{t('projects.items.tiamo.category')}</span>
                                           <h5 className="text-white">{t('projects.items.tiamo.name')}</h5>
                                           <p className="text-white text-size-18">{t('projects.items.tiamo.description')}</p>
                                           <i className=""></i>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                   <div className="case-box overlay">
                                       <div className="overlay-image">
                                           <figure className="image mb-0">
                                               <img src="./images/case-image10.png" alt="" className=""/>
                                           </figure>
                                       </div>
                                       <div className="content">
                                           <span className="text-white">{t('projects.items.web3Lottery.category')}</span>
                                           <h5 className="text-white">{t('projects.items.web3Lottery.name')}</h5>
                                           <p className="text-white text-size-18">{t('projects.items.web3Lottery.description')}</p>
                                           <i className=""></i>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                   <div className="case-box overlay">
                                       <div className="overlay-image">
                                           <figure className="image mb-0">
                                               <img src="./images/case-image11.png" alt="" className=""/>
                                           </figure>
                                       </div>
                                       <div className="content">
                                           <span className="text-white">{t('projects.items.bookvn.category')}</span>
                                           <h5 className="text-white">{t('projects.items.bookvn.name')}</h5>
                                           <p className="text-white text-size-18">{t('projects.items.bookvn.description')}</p>
                                           <i className=""></i>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                   <div className="case-box overlay">
                                       <div className="overlay-image">
                                           <figure className="image mb-0">
                                               <img src="./images/case-image12.png" alt="" className=""/>
                                           </figure>
                                       </div>
                                       <div className="content">
                                           <span className="text-white">{t('projects.items.streamCargo.category')}</span>
                                           <h5 className="text-white">{t('projects.items.streamCargo.name')}</h5>
                                           <p className="text-white text-size-18">{t('projects.items.streamCargo.description')}</p>
                                           <i className=""></i>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                   <div className="case-box overlay">
                                       <div className="overlay-image">
                                           <figure className="image mb-0">
                                               <img src="./images/case-image13.png" alt="" className=""/>
                                           </figure>
                                       </div>
                                       <div className="content">
                                           <span className="text-white">{t('projects.items.automationToolkit.category')}</span>
                                           <h5 className="text-white">{t('projects.items.automationToolkit.name')}</h5>
                                           <p className="text-white text-size-18">{t('projects.items.automationToolkit.description')}</p>
                                           <i className=""></i>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <figure className="offer-bottomlayer mb-0">
                   <img src="./images/offer-bottomlayer.png" alt="" className="img-fluid" />
               </figure>
           </section>
           <section className="aboutoffer-section">
               <div className="container">
                   <div className="row">
                       <div className="col-12">
                           <div className="offer_content">
                               <h6>{t('projects.successStoriesSubtitle')}</h6>
                               <h2>{t('projects.successStoriesTitle')}</h2>
                               <p>{t('projects.successStoriesDescription')}</p>
                           </div>
                       </div>
                   </div>
                   <div className="row mb-5">
                       <div className="col-lg-6 col-md-12">
                           <div className="content-card card-blue" data-aos="fade-up">
                               <h3 className="card-title">{t('projects.case1.title')}</h3>
                               <p className="text1"><strong>{t('projects.case1.challenge')}</strong> {t('projects.case1.challengeText')}</p>
                               <p className="text1"><strong>{t('projects.case1.solution')}</strong> {t('projects.case1.solutionText')}</p>
                               <p className="text1"><strong>{t('projects.case1.results')}</strong> {t('projects.case1.resultsText')}</p>
                           </div>
                       </div>
                       <div className="col-lg-6 col-md-12">
                           <div className="content-card card-green" data-aos="fade-up">
                               <h3 className="card-title">{t('projects.case2.title')}</h3>
                               <p className="text1"><strong>{t('projects.case2.challenge')}</strong> {t('projects.case2.challengeText')}</p>
                               <p className="text1"><strong>{t('projects.case2.solution')}</strong> {t('projects.case2.solutionText')}</p>
                               <p className="text1"><strong>{t('projects.case2.results')}</strong> {t('projects.case2.resultsText')}</p>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-12">
                           <div className="offer_content">
                               <h6>{t('achievements.subtitle')}</h6>
                               <h2>{t('achievements.title')}</h2>
                               <p>{t('achievements.description')}</p>
                           </div>
                       </div>
                   </div>
                   <div className="achievement_wrapper">
                       <div className="row">
                           <figure className="offer-circleimage mb-0">
                               <img src="./images/offer-circleimage.png" alt="" className="img-fluid"/>
                           </figure>
                           <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                               <div className="achievement-box box1">
                                   <figure className="icon achievement-icon">
                                       <img src="./images/achievement-clienticon.png" alt="" className="img-fluid"/>
                                   </figure>
                                   <div className="wrapper">
                                       <div className="number">
                                           <h3 className="value counter">200</h3>
                                           <span className="plus">+</span>
                                       </div>
                                       <p className="text-size-18 mb-0">{t('achievements.clients')}</p>
                                   </div>
                               </div>
                           </div>
                           <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                               <div className="achievement-box box2">
                                   <figure className="icon1 achievement-icon">
                                       <img src="./images/achievement-projecticon.png" alt="" className="img-fluid"/>
                                   </figure>
                                   <div className="wrapper">
                                       <div className="number">
                                           <h3 className="value counter">500</h3>
                                           <span className="plus">+</span>
                                       </div>
                                       <p className="text-size-18 mb-0">{t('achievements.projects')}</p>
                                   </div>
                               </div>
                           </div>
                           <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                               <div className="achievement-box box3">
                                   <figure className="icon achievement-icon">
                                       <img src="./images/achievement-teamicon.png" alt="" className="img-fluid"/>
                                   </figure>
                                   <div className="wrapper">
                                       <div className="number">
                                           <h3 className="value counter">100</h3>
                                           <span className="plus">+</span>
                                       </div>
                                       <p className="text text-size-18 mb-0">{t('achievements.members')}</p>
                                   </div>
                               </div>
                           </div>
                           <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                               <div className="achievement-box box4">
                                   <figure className="icon1 achievement-icon">
                                       <img src="./images/achievement-awardicon.png" alt="" className="img-fluid"/>
                                   </figure>
                                   <div className="wrapper">
                                       <div className="number">
                                           <h3 className="value">2</h3>
                                       </div>
                                       <p className="text text-size-18 mb-0">{t('achievements.awards')}</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
       </>
    )
}