import React from 'react';
import { Link } from 'react-router-dom';
import FormOne from '../contact/FormOne';


const BannerFive = () => {
    return (
        <div className="banner banner-style-5" style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/images/banner/h-bg.jpg"})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-7">
                        <div className="banner-content">
                            <h1 className="title">Innovation &amp; Creative Solutions Hub</h1>
                            <div>
                                <Link to={process.env.PUBLIC_URL + "/projects"} className="axil-btn btn-fill-white btn-large">Explore Portfolio</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-5">
                        <div className="banner-form">
                            <div className="contact-form-box shadow-box">
                                <h3 className="title">Request a Free Quote Today</h3>
                                <FormOne />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerFive;