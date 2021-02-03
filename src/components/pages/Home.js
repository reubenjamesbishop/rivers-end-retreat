import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer'
import Who from '../Who';
import Where from '../Where';
import Why from '../Why';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Who />
            <Where />
            <Why />
            <Footer />
        </>
    );
}

export default Home;