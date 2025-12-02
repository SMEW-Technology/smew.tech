import React, {useEffect, useState} from 'react';
import {AppProps} from 'next/app';
import 'aos/dist/aos.css';
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import { LanguageProvider } from "../contexts/LanguageContext";
import 'popper.js';
import 'jquery';
import '../styles/bootstrap/bootstrap.min.css'
import '../styles/style.css'
import '../styles/custom-style.css'
import '../styles/special-classes.css'
import '../styles/responsive.css'
import '../styles/owl.carousel.min.css'
import '../styles/owl.theme.default.min.css'
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify"

export default function App({Component, pageProps}: AppProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        AOS.init({
            easing: "ease-in-out",
            duration: 1000,
            delay: 0
        });
    }, []);

    return (
        <>
            <LanguageProvider>
                <main>
                    <Header/>
                    <Component {...pageProps} />
                    <ToastContainer />
                    <Footer/>
                    {mounted && <FloatingButtons />}

                    <Script type="text/javascript" src="./js/jquery-3.6.0.min.js" strategy={"beforeInteractive"}/>
                    <Script type="text/javascript" src="./js/bootstrap.min.js"/>
                    <Script type="text/javascript" src="./js/video_link.js" strategy={"beforeInteractive"}/>
                    <Script type="text/javascript" src="./js/video.js" strategy={"beforeInteractive"}/>
                    <Script type="text/javascript" src="./js/counter.js"/>
                    <Script type="text/javascript" src="./js/owl.carousel.js" strategy={"beforeInteractive"}/>
                    <Script type="text/javascript" src="./js/custom-carousel.js"/>
                    <Script type="text/javascript" src="./js/custom.js"/>
                    <Script type="text/javascript" src="./js/animation_links.js"/>
                    <Script type="text/javascript" src="./js/custom.js"/>
                </main>
            </LanguageProvider>
        </>
    );
}