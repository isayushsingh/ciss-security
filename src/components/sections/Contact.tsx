export default function Contact() {
  return (
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
  );
}
