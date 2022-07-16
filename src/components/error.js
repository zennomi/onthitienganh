import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import ErrorPage from './section-components/error';
import Footer from './global-components/footer';

const Error = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="404" />
        <ErrorPage />
        <Footer />
    </div>
}

export default Error

