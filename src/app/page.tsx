'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
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
    <>
      {/* Navbar */}
      <header>
        <nav>
          <div className="logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              <img src="/assets/logo.avif" alt="CISS Logo" />
            </a>
          </div>
          <button 
            className="nav-toggle" 
            aria-label="Open menu" 
            onClick={toggleNav}
          >
            <i className="fas fa-bars"></i>
          </button>
          <ul id="nav-menu" className={isNavOpen ? 'show' : ''}>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#clients" onClick={(e) => { e.preventDefault(); scrollToSection('clients'); }}>Clients</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home">
        <img src="/assets/logo.avif" alt="CISS Logo Large" />
        <h1>Protecting Your World</h1>
        <p>Professional, reliable, and highly trained security services in Kanpur.</p>
        <div style={{ marginTop: '24px' }}>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            style={{ background: 'var(--color-text-primary)', color: 'white', padding: '16px 32px', borderRadius: '32px', fontWeight: 600 }}
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Us</h2>
        <p>Established by ex-Indian Navy Officer <strong>Mr. S.P. Singh Rawat</strong>, Civil Industrial Security Services (CISS) is a leader in comprehensive security solutions.</p>
        <p>Our workforce is highly trained, smartly uniformed, and strictly supervised to ensure the safety of your assets and life. We pride ourselves on professionalism and dedication.</p>
      </section>

      {/* Services */}
      <section id="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <div className="icon"><i className="fas fa-user-shield"></i></div>
            <h3>Security Guards</h3>
            <p>Professional personnel for commercial and private property protection.</p>
          </div>
          <div className="card">
            <div className="icon"><i className="fas fa-shield-alt"></i></div>
            <h3>Armed Security</h3>
            <p>Licensed armed guards for high-risk security requirements.</p>
          </div>
          <div className="card">
            <div className="icon"><i className="fas fa-crosshairs"></i></div>
            <h3>Gunman Services</h3>
            <p>Expert gunmen trained for specialized defensive roles.</p>
          </div>
          <div className="card">
            <div className="icon"><i className="fas fa-user-tie"></i></div>
            <h3>VIP Protection</h3>
            <p>Discreet, elite protection for executives and VIPs.</p>
          </div>
          <div className="card">
            <div className="icon"><i className="fas fa-industry"></i></div>
            <h3>Industrial Security</h3>
            <p>End-to-end security management for factories and industrial sites.</p>
          </div>
          <div className="card">
            <div className="icon"><i className="fas fa-home"></i></div>
            <h3>Residential Security</h3>
            <p>24/7 safety for homes, apartments, and housing societies.</p>
          </div>
          <div className="card">
            <div className="icon"><i className="fas fa-calendar-check"></i></div>
            <h3>Event Security</h3>
            <p>Crowd control and safety management for events and projects.</p>
          </div>
          <div className="card">
            <div className="icon"><i className="fas fa-address-card"></i></div>
            <h3>Join Our Team</h3>
            <p>We are hiring guards and supervisors. <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} style={{ textDecoration: 'underline' }}>Apply now.</a></p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients">
        <h2>Trusted By</h2>
        <div className="cards">
           <div className="card" style={{ alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
              <p><strong>Client Portfolio</strong></p>
              <p style={{ fontSize: '0.9rem' }}>Adding value to businesses across Kanpur</p>
           </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container" style={{ maxWidth: '800px', padding: '0' }}>
          <h2>Contact Us</h2>
          <p style={{ textAlign: 'center', marginBottom: '32px' }}>
            <strong>Address:</strong> Hargovind Niwas, 128/558, K Block, Kidwai Nagar, Kanpur<br />
            <strong>Phone:</strong> +91 8417981064
          </p>
          <form action="mailto:ayushs704@gmail.com" method="post" encType="text/plain">
            <input type="text" name="name" placeholder="Name" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input type="email" name="email" placeholder="Email (Optional)" />
            <textarea name="message" placeholder="How can we help?" rows={5} required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.8611501531186!2d80.3239663!3d26.427957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c470726cc4c77%3A0xbefac35b0bd3d1f!2sCivil%20Industrial%20Security%20Services!5e0!3m2!1sen!2sin!4v1755268105309!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Civil Industrial Security Services Kanpur. All Rights Reserved.</p>
      </footer>

      {/* Floating CTA */}
      <div className="cta-btn" onClick={() => scrollToSection('contact')}>
        Quote
      </div>
      
      {/* FontAwesome Script (since we removed the CDN link in head) OR we should add it in layout or use next/script */}
      {/* Actually I removed the head link but didn't add it back. I should probably add the CDN link in layout.tsx or use a package. 
          For now, I'll add the link back in layout.tsx or here? Layout is better.
          I'll assume I need to add that next. but for now this file is JSX.
       */}
    </>
  );
}
