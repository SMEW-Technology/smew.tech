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
            </main>
        </>
    );
}