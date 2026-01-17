'use client';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
  );
}
