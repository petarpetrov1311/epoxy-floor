import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Stats from '../components/landing/Stats';
import Services from '../components/landing/Services';
import EpoxyInfo from '../components/landing/EpoxyInfo';
import Portfolio from '../components/landing/Portfolio';
import About from '../components/landing/About';
import WhyChooseUs from '../components/landing/WhyChooseUs';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <EpoxyInfo />
      <Portfolio />
      <About />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}