import React from 'react';
import Footer from '../common/footer/Footer';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import BlogSidebar from '../component/blog/BlogSidebar';
import BlogGridOne from '../component/blog/BlogGridOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import Header from '../common/header/Header';


const Blog = () => {

    return (
        <>
            <SEO title="Blog" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BreadCrumbOne 
                title="Blogs"
                page="Blog"
                />
                <div className="section-padding-equal">
                    <div className="container">
                       <div className="row row-40">
                            <div className="col-lg-8">
                                <BlogGridOne />
                            </div>
                            <div className="col-lg-4">
                                <BlogSidebar />
                            </div>
                       </div>
                    </div>
                </div>
                <CtaLayoutOne />
            <Footer parentClass="" />
            </main>
        </>
    )
}

export default Blog;