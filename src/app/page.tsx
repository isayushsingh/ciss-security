'use client';

import { useEffect } from 'react';
import Carousel from '@/components/Carousel';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {

  useEffect(() => {
    // Scroll fade-in observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Initial check for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />
      <Services />
      <WhyUs />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
