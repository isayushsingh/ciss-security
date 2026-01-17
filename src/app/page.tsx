'use client';

import { useEffect, useState } from 'react';
import Carousel from '@/components/Carousel';

const SERVICES_DATA = [
    { 
        title: "Industrial & Factory Security", 
        icon: "fa-industry", 
        description: "Industrial grade protection including gate management, material checks, and perimeter patrols.", 
        price: "₹18K - ₹25K / month" 
    },
    { 
        title: "Corporate & Office Security", 
        icon: "fa-building", 
        description: "Professional front-desk security and premises monitoring for corporate offices.", 
        price: "₹18K - ₹25K / month" 
    },
    { 
        title: "Residential & Apartment Security", 
        icon: "fa-home", 
        description: "24/7 safety for gated communities, apartments, and private residences.", 
        price: "₹18K - ₹25K / month" 
    },
    { 
        title: "Bank & ATM Security", 
        icon: "fa-university", 
        description: "High-level armed and unarmed security for financial institutions and ATMs.", 
        price: "₹18K - ₹25K / month" 
    },
    { 
        title: "Hotel & Hospitality Security", 
        icon: "fa-hotel", 
        description: "Guest safety, luggage scanning, and lobby management for hotels and restaurants.", 
        price: "₹18K - ₹25K / month" 
    },
    { 
        title: "School & College Security", 
        icon: "fa-school", 
        description: "Safe and secure environment for students and staff in educational institutions.", 
        price: "₹18K - ₹25K / month" 
    },
    { 
        title: "Events & Wedding Security", 
        icon: "fa-ring", 
        description: "Crowd control, guest management, and VIP escorting for large events and weddings.", 
        price: "₹18K - ₹25K / month" 
    },
    { 
        title: "Bouncers & VIP Protection", 
        icon: "fa-user-secret", 
        description: "Trained bouncers for clubs, private parties, and personal security.", 
        price: "Request Price" 
    },
    { 
        title: "Cash Van Services", 
        icon: "fa-truck-moving", 
        description: "Secure cash-in-transit services with armed guards.", 
        price: "₹18K - ₹25K / month" 
    },
    { 
        title: "Women Security Guards", 
        icon: "fa-female", 
        description: "Specialized lady guards for frisking and female-staffed environments.", 
        price: "₹18K - ₹25K / month" 
    },
    { 
        title: "Ex-Servicemen Supervisors", 
        icon: "fa-medal", 
        description: "Experienced former service personnel for high-stakes security supervision.", 
        price: "₹18K - ₹25K / month" 
    },
    { 
        title: "Mall & Cinema Hall Security", 
        icon: "fa-film", 
        description: "Public area surveillance and crowd management.", 
        price: "₹18K - ₹25K / month" 
    },
    { 
        title: "Construction & Property Security", 
        icon: "fa-map-marked-alt", 
        description: "Protection for construction sites, farm houses, and vacant properties.", 
        price: "₹18K - ₹25K / month" 
    },
    {
        title: "24/7 General Security Guard",
        icon: "fa-user-shield",
        description: "Round-the-clock security personnel for any general purpose requirement.",
        price: "₹18K - ₹25K / month"
    }
];

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Navbar scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
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

      {/* Hero Section */}
      <section id="home">
        <div className="container hero-content">
            <div className="hero-text">
                <h1>
                    <span>Uncompromising</span> Security Solutions for a Complex World.
                </h1>
                <p>
                    Civil Industrial Security Services (CISS) provides elite security personnel, 
                    armed protection, and industrial surveillance. Trusted by Kanpur's leading 
                    businesses and residential estates for over two decades.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary" onClick={() => scrollToSection('contact')}>
                        Secure Your Assets
                    </button>
                    <button className="btn-outline" onClick={() => scrollToSection('services')}>
                        Explore Services
                    </button>
                </div>

                <div className="stat-row">
                    <div className="stat-item">
                        <h4>20+</h4>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-item">
                        <h4>500+</h4>
                        <p>Trained Guards</p>
                    </div>
                    <div className="stat-item">
                        <h4>100%</h4>
                        <p>Client Retention</p>
                    </div>
                </div>
            </div>
            
            {/* Hero Visual/Image Logic */}
            <div className="hero-visual" style={{position: 'relative'}}>
                <div className="hero-image-container"></div>
            </div>
        </div>
      </section>
{/* Gallery Carousel Section */}
      <Carousel />
      {/* Services Section (Bento Grid) */}
      <section id="services">
        <div className="container">
            <h2>Our <span>Premium</span> Security Services</h2>
            <p style={{maxWidth: '700px', marginBottom: '40px'}}>
                We don't just provide guards; we provide peace of mind. Our personnel are rigorously trained to ensure comprehensive protection.
            </p>

            <div className="bento-grid">
                {SERVICES_DATA.map((service, index) => (
                    <div className="bento-card" key={index}>
                        <div className="icon-wrapper">
                            <i className={`fas ${service.icon || 'fa-shield-alt'}`}></i>
                        </div>
                        <h3>{service.title}</h3>
                        <p className="desc">
                            {service.description || "Professional security services tailored to your specific requirements, ensuring safety and peace of mind 24/7."}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" style={{background: 'var(--color-bg-tertiary)'}}>
          <div className="container">
              <h2>Why <span>CISS</span> Stands Apart</h2>
              <div className="features-grid">
                  <div className="feature-item">
                      <i className="fas fa-medal" style={{fontSize: '2rem', color: 'var(--color-brand)'}}></i>
                      <h3>Ex-Defense Leadership</h3>
                      <p>
                          Founded and led by <strong>Mr. S.P. Singh Rawat</strong> (Ex-Indian Navy), we bring military-grade discipline 
                          and strategic planning to civilian security.
                      </p>
                  </div>
                  <div className="feature-item">
                      <i className="fas fa-check-circle" style={{fontSize: '2rem', color: 'var(--color-brand)'}}></i>
                      <h3>Rigorous Vetting</h3>
                      <p>
                          Every guard undergoes extensive background checks, police verification, and physical fitness tests before wearing our uniform.
                      </p>
                  </div>
                  <div className="feature-item">
                      <i className="fas fa-headset" style={{fontSize: '2rem', color: 'var(--color-brand)'}}></i>
                      <h3>24/7 Rapid Support</h3>
                      <p>
                          Our control room monitors active sites round-the-clock. In case of emergency, our Quick Response Team (QRT) is always on standby.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      

      {/* About Section */}
      <section id="about">
          <div className="container" style={{textAlign: 'center', maxWidth: '900px'}}>
              <h2>About the <span>Company</span></h2>
              <p style={{marginBottom: '20px'}}>
                  Civil Industrial Security Services (CISS) was established with a singular vision: to raise the standard of private security in Uttar Pradesh.
              </p>
              <p>
                  We understand that security is not a "one size fits all" solution. Whether it's a bustling mall needing friendly crowd control 
                  or a remote factory needing strict access protocols, we tailor our deployment to match your specific risk profile.
                  Our guards are not just watchers; they are trained responders.
              </p>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '60px'}}>Request a <span>Free Assessment</span></h2>
            
            <div className="contact-wrapper">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p style={{color: 'rgba(255,255,255,0.8)', marginBottom: '30px'}}>
                        Reach out to us for a customized security plan. We are available 24/7 for urgent requirements.
                    </p>
                    
                    <div style={{marginBottom: '20px'}}>
                        <strong style={{display: 'block', fontSize: '1.1rem'}}>Head Office</strong>
                        Hargovind Niwas, 128/558, K Block,<br/>
                        Kidwai Nagar, Kanpur, Uttar Pradesh 208011
                    </div>
                    
                    <div style={{marginBottom: '20px'}}>
                         <strong style={{display: 'block', fontSize: '1.1rem'}}>Phone</strong>
                         +91 8417981064
                    </div>
                    
                    <div>
                         <strong style={{display: 'block', fontSize: '1.1rem'}}>Email</strong>
                         cisskanpur@gmail.com
                    </div>
                </div>

                <div className="contact-form-container">
                    <form action="mailto:ayushs704@gmail.com" method="post" encType="text/plain">
                        <label className="sr-only">Name</label>
                        <input type="text" name="name" placeholder="Full Name or Company Name" required />
                        
                        <label className="sr-only">Phone</label>
                        <input type="tel" name="phone" placeholder="Phone Number" required />
                        
                        <label className="sr-only">Service Type</label>
                        <input type="text" name="service" placeholder="Service Needed (e.g. Armed Guard)" />
                        
                        <label className="sr-only">Message</label>
                        <textarea name="message" placeholder="Details about your security requirement..." rows={5} required></textarea>
                        
                        <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '10px'}}>
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </div>

            <div style={{marginTop: '60px', borderRadius: 'var(--radius-md)', overflow: 'hidden'}}>
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.8611501531186!2d80.3239663!3d26.427957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c470726cc4c77%3A0xbefac35b0bd3d1f!2sCivil%20Industrial%20Security%20Services!5e0!3m2!1sen!2sin!4v1755268105309!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container" style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px'}}>
            <div style={{maxWidth: '300px'}}>
                <h4 style={{marginBottom: '20px'}}>CISS KANPUR</h4>
                <p style={{fontSize: '0.9rem'}}>
                    Professional security solutions for a safer tomorrow. Licensed, trained, and trusted.
                </p>
            </div>
            
            <div>
                <h4 style={{marginBottom: '20px', fontSize: '1.1rem'}}>Quick Links</h4>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4 style={{marginBottom: '20px', fontSize: '1.1rem'}}>Legal</h4>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Guard Licensing</a></li>
                </ul>
            </div>
        </div>
        <div style={{textAlign: 'center', marginTop: '60px', paddingTop: '20px', borderTop: '1px solid var(--color-border)', width: '100%', color: 'var(--color-text-secondary)', fontSize: '0.8rem'}}>
            &copy; 2025 Civil Industrial Security Services Kanpur. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
