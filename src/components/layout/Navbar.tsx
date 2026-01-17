'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false);
    }
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="container">
        <div className="logo cursor-pointer" onClick={() => scrollToSection('home')}>
             <img src="/assets/logo.avif" alt="CISS Logo" style={{height: '50px'}} />
        </div>
        <button 
          className="nav-toggle" 
          aria-label="Open menu" 
          onClick={toggleNav}
        >
          <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <ul id="nav-menu" className={isNavOpen ? 'show' : ''}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#why-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }}>Why CISS</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          <li>
              <button 
                  className="btn-primary" 
                  style={{padding: '10px 20px', fontSize: '0.9rem'}}
                  onClick={() => scrollToSection('contact')}
              >
                  Get Quote
              </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
