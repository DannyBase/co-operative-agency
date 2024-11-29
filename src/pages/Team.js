import React from 'react';
import Footer from '../common/footer/Footer';
import SEO from '../common/SEO';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import CounterUpTwo from '../component/counterup/CounterUpTwo';
import TeamOne from '../component/team/TeamOne';
import VideoTwo from '../component/video/VideoTwo';
import Header from '../common/header/Header';

const Team = () => {

    return (
        <>
        <SEO title="Team" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BreadCrumbOne 
                title="Team Members"
                page="Team"
                />
                <CounterUpTwo />
                <TeamOne />
                <VideoTwo />
                <CtaLayoutOne />
                <Footer parentClass="" />
            </main>
        </>
    )
}

export default Team;