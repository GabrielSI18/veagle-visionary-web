
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Methodology from '@/components/Methodology';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero id="hero"/>
        <About id="about"/>
        <Methodology id="methodology" />
        <Services id="services" />
        <Testimonials id="testimonials" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
