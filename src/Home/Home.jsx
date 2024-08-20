import React from 'react';
import Banner from '../Components/Banner/Banner';
import TrustedCompany from '../Components/Partner/TrustedCompany';
import AboutUs from '../Components/AboutUs/AboutUs';
import WhyUs from '../Components/WhyUs/WhyUs';
import Blog from '../Components/Blog/Blog';
import OurProcess from '../Components/OurProcess/OurProcess';

const Home = () => {
    return (
        <div>
            <Banner />
            <TrustedCompany />
            <AboutUs />
            <WhyUs />
            <OurProcess />
            <Blog />
        </div>
    );
};

export default Home;