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
                        <a className="navbar-brand" href="https://smew.tech/">
                            <figure className="mb-0 banner-logo">
                                <img src="./images/logo.png" alt="" className="img-fluid"/>
                            </figure>
                        </a>
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
                                    <a className="nav-link" href="https://smew.tech/">Home</a>
                                </li>
                                <li className={`nav-item ${router.pathname === '/about' ? "active" : ""}`}>
                                    <Link className="nav-link" href="/about">About</Link>
                                </li>
                                <li className={`nav-item ${router.pathname === '/services' ? "active" : ""}`}>
                                    <Link className="nav-link" href="https://smew.tech/services">Services</Link>
                                </li>
                                <li className={`nav-item ${router.pathname === '/projects' ? "active" : ""}`}>
                                    <Link className="nav-link" href="/projects">Projects</Link>
                                </li>
                                <li className={`nav-item ${router.pathname === '/contact' ? "active" : ""}`}>
                                    <Link className="nav-link" href="/contact">Contact</Link>
                                </li>
                            </ul>
                            <div className="last_list">

                                <figure className="nav-phoneimage mb-0">
                                    <Link  href="/contact">
                                        <img className="img-fluid" src="./images/footer-emailicon.png" alt=""/>
                                    </Link>
                                </figure>
                                <div className="content">
                                    <p className="text-size-18 text-white">Contact now:</p>
                                    <Link className="text-decoration-none last_list_atag"
                                       href="/contact">contact@smew.tech</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}