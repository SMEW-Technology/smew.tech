import Document, { DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import React from "react";

export default class MyDocument extends Document<DocumentProps> {
    render(): React.JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <link rel="icon" type="image/png" href="./favicon-96x96.png" sizes="96x96" />
                    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
                    <link rel="shortcut icon" href="./favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
                    <meta name="apple-mobile-web-app-title" content="smew.tech" />
                    <link rel="manifest" href="./site.webmanifest" />
                    <meta name="msapplication-TileColor" content="#ffffff"/>
                    <meta name="msapplication-TileImage" content="./ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff"/>
                    <link rel="stylesheet" href="./js/bootstrap.min.js" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css"/>
                    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
                </Head>
                <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <Main/>
                <NextScript/>
                <script src="./js/jquery-3.6.0.min.js"></script>
                <script src="./js/bootstrap.min.js"></script>
                <script src="./js/video_link.js"></script>
                <script src="./js/video.js"></script>
                <script src="./js/counter.js"></script>
                <script src="./js/owl.carousel.js"></script>
                <script src="./js/custom-carousel.js"></script>
                <script src="./js/custom.js"></script>
                <script src="./js/animation_links.js"></script>
                <script src="./js/animation.js"></script>
                </body>
                </Html>
        );
    }
}