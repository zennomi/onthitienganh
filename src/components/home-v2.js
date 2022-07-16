import React from 'react';
import Navbar from './global-components/navbar-v2';
import Banner from './section-components/banner-v2';
import ProductV1 from './section-components/product-v2';
import Featured from './section-components/featured-v2';
import NewProduct from './section-components/new-product';
import FunFact from './section-components/funfact';
import Testimonial from './section-components/testimonial-v2';
import LatestPost from './blog-components/latest-news-v2';
import Footer from './global-components/footer-v2';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <FunFact />
        <Featured />
        <LatestPost />
        <ProductV1 />
        <Testimonial />
        <NewProduct />
        <Footer />
    </div>
}

export default Home_V1

