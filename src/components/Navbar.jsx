import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars, FaWhatsapp, FaInstagram, FaSun, FaMoon, FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext, LangContext } from '../App';

const NavLogo = () => (
  <svg width="42" height="42" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-label="Web.it">
    <defs><linearGradient id="cosmicGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#5b8cff"/><stop offset="50%" stopColor="#9b5cff"/><stop offset="100%" stopColor="#e65cff"/></linearGradient></defs>
    <circle cx="200" cy="200" r="190" fill="url(#cosmicGradient)"/><circle cx="200" cy="200" r="175" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="5"/>
    <text x="200" y="190" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="800" fontSize="130">W</text>
    <text x="200" y="260" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="300" fontSize="40" letterSpacing="5">web.it</text>
  </svg>
);

export default function CustomNavbar(){
  const [scrolled,setScrolled]=useState(false); const [expanded,setExpanded]=useState(false); const [langOpen,setLangOpen]=useState(false);
  const navigate=useNavigate(); const location=useLocation();
  const langOptions=[['ru','RU'],['ky','KG'],['en','EN']];
  const {darkMode,setDarkMode}=useContext(ThemeContext); const {lang,setLang,t}=useContext(LangContext);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>40); window.addEventListener('scroll',fn); fn(); return()=>window.removeEventListener('scroll',fn)},[]);
  const scrollTo=(id)=>{setExpanded(false); setLangOpen(false); if(location.pathname!=='/'){navigate('/'); setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}),350)} else document.getElementById(id)?.scrollIntoView({behavior:'smooth'});};
  return <Navbar expanded={expanded} onToggle={setExpanded} expand="lg" fixed="top" className={`custom-navbar ${scrolled?'scrolled':''}`}>
    <Container>
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2" onClick={()=>setExpanded(false)}><NavLogo/><span className="logo-text">Web<span className="logo-dot">.</span><span className="logo-studio">it</span></span></Navbar.Brand>
      <Navbar.Toggle aria-controls="main-nav" className="border-0"><FaBars size={24}/></Navbar.Toggle>
      <Navbar.Collapse id="main-nav">
        <Nav className="ms-auto align-items-lg-center">
          <Nav.Link as={Link} to="/" onClick={()=>setExpanded(false)} className="nav-link-custom">{t.navHome}</Nav.Link>
          <Nav.Link as={Link} to="/solutions" onClick={()=>setExpanded(false)} className="nav-link-custom">{t.navSolutions}</Nav.Link>
          <Nav.Link onClick={()=>scrollTo('services')} className="nav-link-custom">{t.navServices}</Nav.Link>
          <Nav.Link as={Link} to="/technologies" onClick={()=>setExpanded(false)} className="nav-link-custom">{lang==='ru'?'Технологии':lang==='en'?'Technologies':'Технологиялар'}</Nav.Link>
          <Nav.Link onClick={()=>scrollTo('whyus')} className="nav-link-custom">{t.navWhy}</Nav.Link>
          <Nav.Link onClick={()=>scrollTo('pricing')} className="nav-link-custom">{t.navPricing}</Nav.Link>
          <Nav.Link onClick={()=>scrollTo('contacts')} className="nav-link-custom">{t.navContacts}</Nav.Link>
          <Nav.Link as={Link} to="/employees" onClick={()=>setExpanded(false)} className="nav-link-custom employee-nav-link">{t.navEmployees}</Nav.Link>
          <button className="contact-nav-button" onClick={()=>scrollTo('contacts')}>{t.btnContact}</button>
          <div className="nav-tools">
            <a href="https://api.whatsapp.com/send/?phone=996556991154" target="_blank" rel="noopener noreferrer" className="social-link-nav" aria-label="WhatsApp"><FaWhatsapp/></a>
            <a href="https://instagram.com/Web_itt" target="_blank" rel="noopener noreferrer" className="social-link-nav" aria-label="Instagram"><FaInstagram/></a>
            <button className="theme-toggle" onClick={()=>setDarkMode(!darkMode)} title={darkMode?'Light theme':'Dark theme'}>{darkMode?<FaSun/>:<FaMoon/>}</button>
            <div className={`lang-switcher ${langOpen ? 'open' : ''}`}>
              <button className="lang-select" type="button" onClick={()=>setLangOpen(v=>!v)} aria-expanded={langOpen} aria-label="Language">
                <span>{langOptions.find(([code])=>code===lang)?.[1] || 'RU'}</span><FaChevronDown className="lang-chevron" />
              </button>
              <div className="lang-menu">
                {langOptions.map(([code,label])=>(
                  <button key={code} type="button" className={lang===code?'active':''} onClick={()=>{setLang(code);setLangOpen(false)}}>
                    <span className="lang-option-dot" />{label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
}
