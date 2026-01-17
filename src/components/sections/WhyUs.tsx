export default function WhyUs() {
  return (
    <section id="why-us" style={{background: 'var(--color-bg-tertiary)'}}>
      <div className="container">
          <h2>Why <span>CISS</span> Stands Apart</h2>
          <div className="features-split-layout">
              <div className="feature-image-container">
                    {/* Placeholder for future image */}
                    <img src="/assets/security_team_placeholder.jpg" alt="Security Team" style={{opacity: 0.6}} onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="features-grid">
                  <div className="feature-item">
                      <h3>Ex-Defense Leadership</h3>
                      <p>
                          Founded and led by <strong>Mr. S.P. Singh Rawat</strong> (Ex-Indian Navy), we bring military-grade discipline.
                      </p>
                      <a href="#about" className="feature-link">
                          Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                  </div>
                  <div className="feature-item">
                      <h3>Rigorous Vetting</h3>
                      <p>
                          Extensive background checks, police verification, and physical fitness tests.
                      </p>
                      <a href="#about" className="feature-link">
                          Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                  </div>
                  <div className="feature-item">
                      <h3>24/7 Rapid Support</h3>
                      <p>
                          Round-the-clock control room monitoring and Quick Response Team (QRT) standby serving you anytime.
                      </p>
                      <a href="#contact" className="feature-link">
                          Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                  </div>
                  <div className="feature-item">
                      <h3>100% Compliance</h3>
                      <p>
                          Fully licensed (PSARA), ensuring all legal compliances (PF, ESI) for hassle-free operations.
                      </p>
                      <a href="#about" className="feature-link">
                          Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
