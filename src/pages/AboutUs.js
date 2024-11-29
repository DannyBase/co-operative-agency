import React from 'react';
import Footer from '../common/footer/Footer';
import SEO from '../common/SEO';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ProcessOne from '../component/process/ProcessOne';
import About from '../component/about/About';
import Header from '../common/header/Header';



const AboutUs = () => {

    return (
        <>
        <SEO title="About us" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BreadCrumbOne 
                title="About Us"
                page="About"
                />
                <About />
                <ProcessOne />
                <CtaLayoutOne />
                <Footer parentClass="" />
            </main>
        </>
    )
}

export default AboutUs;