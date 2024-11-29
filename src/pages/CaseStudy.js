import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import CaseStudyProp from '../component/casestudy/CaseStudyProp';


const CaseStudy = () => {

    return (
        <>
        <SEO title="Case Study" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BreadCrumbOne 
                title="Case Study"
                page="Case Study"
                />
                <div className="pt--250 pt_lg--200 pt_md--100 pt_sm--80 case-study-page-area">
                    <div className="container">
                        <CaseStudyProp />
                    </div>
                </div>
                <CtaLayoutOne />
                <Footer parentClass="" />
            </main>
        </>
    )
}

export default CaseStudy;