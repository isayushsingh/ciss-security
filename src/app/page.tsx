'use client';

import { useEffect, useState } from 'react';

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
             <span>CISS KANPUR</span>
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
                <div style={{marginTop: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
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
                <div style={{
                    width: '100%', 
                    height: '500px', 
                    background: 'url(/assets/logo.avif) no-repeat center',
                    backgroundSize: 'contain',
                    filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))',
                    opacity: 0.8
                }}></div>
            </div>
        </div>
      </section>

      {/* Services Section (Bento Grid) */}
      <section id="services">
        <div className="container">
            <h2>Our <span>Premium</span> Security Services</h2>
            <p style={{maxWidth: '700px', marginBottom: '40px'}}>
                We don't just provide guards; we provide peace of mind. Our personnel are rigorously trained in conflict resolution, 
                emergency response, and surveillance protocols to ensure comprehensive protection.
            </p>

            <div className="bento-grid">
                {/* Service 1 */}
                <div className="bento-card">
                    <div className="icon-wrapper"><i className="fas fa-user-shield"></i></div>
                    <h3>Security Guards</h3>
                    <p className="desc">
                        Our unarmed security guards are the first line of defense. Selected for their alertness and integrity, 
                        they manage access control, monitor surveillance systems, and patrol premises to deter unauthorized activity.
                    </p>
                    <div className="ideal-for">
                        <strong>Ideal For:</strong>
                        Retail Stores, Corporate Offices, Residential Societies
                    </div>
                </div>

                {/* Service 2 */}
                <div className="bento-card">
                    <div className="icon-wrapper"><i className="fas fa-shield-alt"></i></div>
                    <h3>Armed Security</h3>
                    <p className="desc">
                        Licensed and highly-trained armed personnel for high-risk environments. Our guards are experts in 
                        weapon safety and tactical response, providing a powerful deterrent against criminal threats.
                    </p>
                    <div className="ideal-for">
                        <strong>Ideal For:</strong>
                        Banks, Jewelry Showrooms, CIT (Cash-in-Transit)
                    </div>
                </div>

                {/* Service 3 */}
                <div className="bento-card">
                    <div className="icon-wrapper"><i className="fas fa-user-tie"></i></div>
                    <h3>VIP & Executive Protection</h3>
                    <p className="desc">
                         Discreet and elite protection services for high-net-worth individuals, executives, and celebrities. 
                         Our Personal Security Officers (PSOs) are trained in route planning, threat assessment, and defensive driving.
                    </p>
                    <div className="ideal-for">
                        <strong>Ideal For:</strong>
                        CEOs, Politicians, VIP Events
                    </div>
                </div>

                {/* Service 4 */}
                <div className="bento-card">
                    <div className="icon-wrapper"><i className="fas fa-industry"></i></div>
                    <h3>Industrial & Factory Security</h3>
                    <p className="desc">
                        Specific protocols for large-scale industrial sites. We implement gate management, worker frisking, 
                        material inward/outward registers, and perimeter patrolling to prevent theft and sabotage.
                    </p>
                    <div className="ideal-for">
                        <strong>Ideal For:</strong>
                        Factories, Warehouses, Construction Sites
                    </div>
                </div>

                 {/* Service 5 */}
                 <div className="bento-card">
                    <div className="icon-wrapper"><i className="fas fa-home"></i></div>
                    <h3>Residential Security</h3>
                    <p className="desc">
                        24/7 safety for your home and family. Our guards are trained to be courteous yet vigilant, managing 
                        visitor logs and ensuring a secure environment for apartment complexes and private villas.
                    </p>
                    <div className="ideal-for">
                        <strong>Ideal For:</strong>
                        Apartments, Gated Communities, Private Villas
                    </div>
                </div>

                {/* Service 6 */}
                <div className="bento-card">
                    <div className="icon-wrapper"><i className="fas fa-calendar-check"></i></div>
                    <h3>Event Security Management</h3>
                    <p className="desc">
                        Comprehensive crowd control and safety management for weddings, corporate events, and concerts. 
                        We handle guest screening, VIP escorting, and emergency evacuation planning.
                    </p>
                    <div className="ideal-for">
                        <strong>Ideal For:</strong>
                        Weddings, Corporate Functions, Public Gatherings
                    </div>
                </div>
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
