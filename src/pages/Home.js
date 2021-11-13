import React from 'react'

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectsSection/>
            <TestimonialsSection/>
            <ContactBanner/>
        </>
    )
}

export default Home
