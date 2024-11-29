import React from 'react';
import Footer from '../common/footer/Footer';
import SEO from '../common/SEO';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import BrandOne from '../component/brand/BrandOne';
import Header from '../common/header/Header';

const OurClients = () => {

    return (
        <>
        <SEO title="Our Clients" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BreadCrumbOne 
                title="Our Clients"
                page="Our Client"
                />
                <BrandOne />
                <CtaLayoutOne />
                <Footer parentClass="" />
            </main>
        </>
    )
}

export default OurClients;