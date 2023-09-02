import React from "react";
import HomeBanner from "../components/banners/HomeBanner";
import {useRouter} from "next/router";
import AboutBanner from "../components/banners/AboutBanner";
import ServiceBanner from "../components/banners/ServiceBanner";
import ContactBanner from "../components/banners/ContactBanner";
import ProjectBanner from "../components/banners/ProjectBanner";

export default function Header() {
    const router = useRouter()
    return (
        <>
            {
                router.pathname === "/" ? <HomeBanner/> :
                    router.pathname === "/about" ? <AboutBanner/> :
                        router.pathname === "/services" ? <ServiceBanner/> :
                            router.pathname === "/contact" ? <ContactBanner/> :
                                router.pathname === "/projects" ? <ProjectBanner/> :
                                        <></>
            }
        </>
    )
}