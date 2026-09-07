import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LangContext } from '../App';

const FooterLogo = () => (
  <svg width="36" height="36" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="footerLogoGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#5b8cff"/><stop offset="52%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#d946ef"/></linearGradient></defs>
    <circle cx="100" cy="100" r="95" fill="url(#footerLogoGradient)" />
    <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
    <text x="100" y="85" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="60">W</text>
    <circle cx="145" cy="55" r="12" fill="white" />
    <text x="100" y="130" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="22" letterSpacing="3">web.it</text>
  </svg>
);

function Footer() {
  const { lang, t } = useContext(LangContext);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{background: '#0f172a', color: 'rgba(255,255,255,0.8)', padding: '4rem 0 2rem'}}>
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <FooterLogo />
              <span style={{fontSize: '1.8rem', fontWeight: 800, color: 'white'}}>
                Web<span style={{color: '#fbbf24'}}>.</span>it
              </span>
            </div>
            <p style={{color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '1.5rem'}}>{t.footerDesc}</p>
            <div style={{display: 'flex', gap: '1rem', marginTop: '1.5rem'}}>
              <a href="https://api.whatsapp.com/send/?phone=996556991154" target="_blank" rel="noopener noreferrer" style={{width: 45, height: 45, background: 'rgba(255,255,255,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.3rem', transition: 'all 0.3s', textDecoration: 'none'}} title="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/Web_itt" target="_blank" rel="noopener noreferrer" style={{width: 45, height: 45, background: 'rgba(255,255,255,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.3rem', transition: 'all 0.3s', textDecoration: 'none'}} title="Instagram">
                <FaInstagram />
              </a>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h4 style={{color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem'}}>{t.footerSections}</h4>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{marginBottom: '0.8rem'}}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} style={{color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block'}}>{t.navServices}</a></li>
              <li style={{marginBottom: '0.8rem'}}><a href="#whyus" onClick={(e) => { e.preventDefault(); scrollTo('whyus'); }} style={{color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block'}}>{t.navWhy}</a></li>
              <li style={{marginBottom: '0.8rem'}}><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollTo('pricing'); }} style={{color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block'}}>{t.navPricing}</a></li>
              <li style={{marginBottom: '0.8rem'}}><a href="#map" onClick={(e) => { e.preventDefault(); scrollTo('map'); }} style={{color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block'}}>{t.navContacts}</a></li>
              <li style={{marginBottom: '0.8rem'}}><Link to="/admin" style={{color: 'rgba(255,255,255,0.6)', textDecoration: 'none'}}>{t.navEmployees}</Link></li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h4 style={{color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem'}}>{t.footerServices}</h4>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{marginBottom: '0.8rem'}}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} style={{color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block'}}>{t.serviceMobile}</a></li>
              <li style={{marginBottom: '0.8rem'}}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} style={{color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block'}}>{t.serviceCorporate}</a></li>
              <li style={{marginBottom: '0.8rem'}}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} style={{color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block'}}>{t.serviceWebapp}</a></li>
              <li style={{marginBottom: '0.8rem'}}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} style={{color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block'}}>{t.serviceShop}</a></li>
              <li style={{marginBottom: '0.8rem'}}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} style={{color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block'}}>UI/UX Design</a></li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h4 style={{color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem'}}>{t.footerContacts}</h4>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{marginBottom: '0.8rem', color: 'rgba(255,255,255,0.6)'}}>+996 556 991 154</li>
              <li style={{marginBottom: '0.8rem', color: 'rgba(255,255,255,0.6)'}}>{t.address}</li>
              <li style={{marginBottom: '0.8rem', color: 'rgba(255,255,255,0.6)'}}>{t.workHours}</li>
            </ul>
          </Col>
        </Row>

        <div style={{borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)'}}>
          <div className="mb-2">
            <Link to="/privacy" className="footer-legal-link">{t.privacy}</Link>
            <Link to="/terms" className="footer-legal-link">{t.terms}</Link>
          </div>
          <div>© {new Date().getFullYear()} Web.it. {t.rights}</div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
