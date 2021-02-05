import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer'
import PromoVideo from '../PromoVideo';

function Home() {
    return (
        <>
            <HeroSection />
            <PromoVideo />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;