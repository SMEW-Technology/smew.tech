import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export default function NavBar() {
    const router = useRouter()
    return (
        <header className="header">
            <div className="main-header">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" href="/">
                            <figure className="mb-0 banner-logo">
                                <img src="./images/logo.png" alt="" className="img-fluid"/>
                            </figure>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className={`nav-item ${router.pathname === '/' ? "active" : ""}`}>
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className={`nav-item ${router.pathname === '/about' ? "active" : ""}`}>
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className={`nav-item ${router.pathname === '/services' ? "active" : ""}`}>
                                    <a className="nav-link" href="/services">Services</a>
                                </li>
                                <li className={`nav-item ${router.pathname === '/projects' ? "active" : ""}`}>
                                    <a className="nav-link" href="/projects">Projects</a>
                                </li>
                                <li className={`nav-item ${router.pathname === '/contact' ? "active" : ""}`}>
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                            <div className="last_list">

                                <figure className="nav-phoneimage mb-0">
                                    <a  href="/contact">
                                        <img className="img-fluid" src="./images/footer-emailicon.png" alt=""/>
                                    </a>
                                </figure>
                                <div className="content">
                                    <p className="text-size-18 text-white">Contact now:</p>
                                    <a className="text-decoration-none last_list_atag"
                                       href="/contact">contact@smew.tech</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}