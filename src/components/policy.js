import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import PolicyPage from './section-components/policy';
import Footer from './global-components/footer';

const Policy = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Refund Policy" subheader="Refund Policy"  />
        <PolicyPage />
        <Footer />
    </div>
}

export default Policy

