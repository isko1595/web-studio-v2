import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LangContext } from '../App';

export default function Hero(){
 const {lang,t}=useContext(LangContext);
 const copy={ru:{badge:'DIGITAL PRODUCT STUDIO · 2026',title:'Разрабатываем сложные цифровые системы',sub:'От идеи и архитектуры до запуска — создаём стабильные, масштабируемые и понятные продукты для бизнеса.'},en:{badge:'DIGITAL PRODUCT STUDIO · 2026',title:'Building complex digital systems',sub:'From idea and architecture to launch — we create stable, scalable and clear digital products for business.'},ky:{badge:'DIGITAL PRODUCT STUDIO · 2026',title:'Татаал санарип системаларды иштеп чыгабыз',sub:'Идеядан жана архитектурадан ишке киргизүүгө чейин — бизнес үчүн туруктуу жана масштабдалуучу продукттарды түзөбүз.'}}[lang];
 const contact=()=>document.getElementById('contacts')?.scrollIntoView({behavior:'smooth'});
 return <section className="hero-section devolution-hero" id="hero"><div className="aurora aurora-one"/><div className="aurora aurora-two"/><div className="aurora aurora-three"/><div className="grid-overlay"/><div className="stars-layer"/>
  <Container className="hero-content"><Row className="align-items-center min-vh-100"><Col lg={9}>
   <div className="hero-badge">{copy.badge}</div><h1 className="hero-title">{copy.title}</h1><p className="hero-subtitle">{copy.sub}</p>
   <div className="hero-actions"><button className="hero-white-button" onClick={contact}>{t.btnContact}</button></div>
   <div className="hero-stats"><div><b>50+</b><span>{lang==='ru'?'проектов':lang==='en'?'projects':'долбоор'}</span></div><div><b>9</b><span>{lang==='ru'?'решений':lang==='en'?'solutions':'чечим'}</span></div><div><b>24/7</b><span>{lang==='ru'?'поддержка':lang==='en'?'support':'колдоо'}</span></div></div>
  </Col></Row></Container>
 </section>;
}
