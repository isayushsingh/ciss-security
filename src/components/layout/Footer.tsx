export default function Footer() {
  return (
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
  );
}
