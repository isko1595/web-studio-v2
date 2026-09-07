import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { solutions } from '../data';
import { LangContext } from '../App';

const copy = {
  ru: { kicker:'РЕШЕНИЯ', title:'Решения для сложных задач', desc:'Проектируем цифровые системы от идеи и архитектуры до запуска — с понятным UX, безопасностью и запасом для роста.', more:'Подробнее →' },
  en: { kicker:'SOLUTIONS', title:'Solutions for complex tasks', desc:'We design digital systems from idea and architecture to launch — with clear UX, security and room to scale.', more:'Learn more →' },
  ky: { kicker:'ЧЕЧИМДЕР', title:'Татаал маселелер үчүн чечимдер', desc:'Идеядан архитектурага жана ишке киргизүүгө чейин коопсуз, ыңгайлуу жана масштабдалуучу санарип системаларды түзөбүз.', more:'Кененирээк →' }
};

export default function Solutions() {
  const { lang } = useContext(LangContext);
  const c = copy[lang];
  return <><Navbar /><main className="inner-page">
    <Container>
      <div className="page-hero">
        <span className="page-kicker">{c.kicker}</span>
        <h1>{c.title}</h1>
        <p>{c.desc}</p>
      </div>
      <Row className="g-4 pb-5">
        {solutions.map((item, i) => <Col lg={4} md={6} key={item.id}>
          <article className="solution-card" data-aos="fade-up" data-aos-delay={i * 50}>
            <div className="solution-icon">{item.icon}</div>
            <h3>{item.title[lang]}</h3>
            <p>{item.desc[lang]}</p>
            <Link className="solution-more" to={`/solutions/${item.id}`}>{c.more}</Link>
          </article>
        </Col>)}
      </Row>
    </Container>
  </main><Footer /></>;
}
