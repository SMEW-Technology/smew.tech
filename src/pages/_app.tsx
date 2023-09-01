import React, {useEffect} from 'react';
import {AppProps} from 'next/app';
import 'aos/dist/aos.css';
import AOS from "aos";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'popper.js';
import 'jquery';
import Script from "next/script";
import {Head} from "next/document";

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        AOS.init({
            easing: "ease-in-out",
            duration: 1000,
            delay: 0
        });
    }, []);

    return (
        <>
            <main>
                <Header/>
                <Component {...pageProps} />
                <Footer/>

                <Script type="text/javascript" src="/src/assets/js/jquery-3.6.0.min.js" strategy={"beforeInteractive"}/>
                <Script type="text/javascript" src="/src/assets/js/bootstrap.min.js"/>
                <Script type="text/javascript" src="/src/assets/js/video_link.js" strategy={"beforeInteractive"}/>
                <Script type="text/javascript" src="/src/assets/js/video.js" strategy={"beforeInteractive"}/>
                <Script type="text/javascript" src="/src/assets/js/counter.js"/>
                <Script type="text/javascript" src="/src/assets/js/owl.carousel.js" strategy={"beforeInteractive"}/>
                <Script type="text/javascript" src="/src/assets/js/custom-carousel.js"/>
                <Script type="text/javascript" src="/src/assets/js/custom.js"/>
                <Script type="text/javascript" src="/src/assets/js/animation_links.js"/>
                <Script type="text/javascript" src="/src/assets/js/custom.js"/>

            </main>
        </>
    );
}