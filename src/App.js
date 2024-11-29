import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss';

// Spinner (can be replaced with any spinner)
import { PulseLoader } from 'react-spinners';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogArchive = lazy(() => import('./pages/Archive'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const OurClients = lazy(() => import('./pages/OurClients'));
const Team = lazy(() => import('./pages/Team'));
const TeamDetails = lazy(() => import('./pages/TeamDetails'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const CaseDetails = lazy(() => import('./pages/CaseStudyDetails'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const PricingTable = lazy(() => import('./pages/PricingTable'));
const Contact = lazy(() => import('./pages/Contact'));
const ErrorPage = lazy(() => import('./pages/404'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const NotFoundPage = lazy(() => import('./pages/404'));

const Spinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <PulseLoader color="#5956e9" size={18} />
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Blogs */}
            <Route path={process.env.PUBLIC_URL + "/blog"} element={<Blog />} />
            <Route path={process.env.PUBLIC_URL + "/archive/:slug"} element={<BlogArchive />} />
            <Route path={process.env.PUBLIC_URL + "/blog-details/:id"} element={<BlogDetails />} />
            {/* Service */}
            <Route path={process.env.PUBLIC_URL + "/services"} element={<Services />} />
            <Route path={process.env.PUBLIC_URL + "/service-details/:slug"} element={<ServiceDetails />} />
            {/* Project */}
            <Route path={process.env.PUBLIC_URL + "/projects"} element={<Projects />} />
            <Route path={process.env.PUBLIC_URL + "/project-details/:slug"} element={<ProjectDetails />} />
            {/* Pages */}
            <Route path={process.env.PUBLIC_URL + "/about-us"} element={<AboutUs />} />
            <Route path={process.env.PUBLIC_URL + "/our-clients"} element={<OurClients />} />
            <Route path={process.env.PUBLIC_URL + "/team"} element={<Team />} />
            <Route path={process.env.PUBLIC_URL + "/team-details/:slug"} element={<TeamDetails />} />
            <Route path={process.env.PUBLIC_URL + "/case-study"} element={<CaseStudy />} />
            <Route path={process.env.PUBLIC_URL + "/case-details/:slug"} element={<CaseDetails />} />
            <Route path={process.env.PUBLIC_URL + "/testimonials"} element={<Testimonials />} />
            <Route path={process.env.PUBLIC_URL + "/pricing"} element={<PricingTable />} />
            <Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />} />
            <Route path={process.env.PUBLIC_URL + "/404"} element={<ErrorPage />} />
            <Route path={process.env.PUBLIC_URL + "/privacy-policy"} element={<PrivacyPolicy />} />
            <Route path={process.env.PUBLIC_URL + "/terms-use"} element={<TermsOfUse />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
