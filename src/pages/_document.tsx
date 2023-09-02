import Document, {DocumentProps, Head, Html, Main, NextScript,} from 'next/document';
import React from "react";

export default class MyDocument extends Document<DocumentProps> {
    render(): React.JSX.Element {
        return (
            <Html lang="zxx">
                <Head>
                    <title>SMEW Technology</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
                    <meta charSet="utf-8"/>
                    <link rel="icon" href="./favicon.ico" sizes="any" />
                    <link rel="apple-touch-icon" sizes="144x144" href="./apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
                    <link rel="manifest" href="./site.webmanifest"/>
                    <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#f08832"/>
                    <meta name="msapplication-TileColor" content="#b91d47"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css"/>
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