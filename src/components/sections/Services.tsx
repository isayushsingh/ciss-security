import { SERVICES_DATA } from '@/data/services';

export default function Services() {
  return (
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
  );
}
