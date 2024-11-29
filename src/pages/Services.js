import React from 'react';
import Footer from '../common/footer/Footer';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ServicePropOne from '../component/service/ServicePropOne';
import AboutThree from '../component/about/About';
import CounterUpTwo from '../component/counterup/CounterUpTwo';
import Header from '../common/header/Header';


const Services = () => {


    return (
        <>
        <SEO title="Services" />

        <ColorSwitcher />
        <main className="main-wrapper">
            <Header />
            <BreadCrumbOne 
                title="Services"
                page="Service"
                />
            <CounterUpTwo />
            <div className="section section-padding bg-color-light">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can <br> help you with"
                        description=""
                        textAlignment="heading-left"
                        textColor=""
                    />
                    <div className="row">
                        <ServicePropOne colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" itemShow="6" marginTop="no" />
                    </div>
                </div>
            </div>

            <AboutThree />
            
            <CtaLayoutOne />
            <Footer parentClass="" />
        </main>
        </>
    )
}

export default Services;