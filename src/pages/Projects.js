import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const ProjectGridThree = () => {

    return (
        <>
        <SEO title="Projects" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <Header />
            <BreadCrumbOne 
                title="Projects"
                page="Project"
                />
            <ProjectOne colSize="col-xl-3 col-lg-4 col-md-6" itemShow="12" columnGap="row-15" parentClass="project-column-4"/>
            <CtaLayoutOne />
            <Footer parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridThree;