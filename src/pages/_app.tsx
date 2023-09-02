import React, {useEffect} from 'react';
import {AppProps} from 'next/app';
import 'aos/dist/aos.css';
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import 'popper.js';
import 'jquery';
import '../styles/bootstrap/bootstrap.min.css'
import '../styles/style.css'
import '../styles/custom-style.css'
import '../styles/special-classes.css'
import '../styles/responsive.css'
import '../styles/owl.carousel.min.css'
import '../styles/owl.theme.default.min.css'

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