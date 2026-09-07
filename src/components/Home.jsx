import React, { useContext } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import WhyUs from './WhyUs';
import Pricing from './Pricing';
import MapSection from './MapSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { technologies, solutions } from '../data';
import { LangContext } from '../App';

function Home(){
 const {lang,t}=useContext(LangContext);
 const copy={ru:{sol:'Решения',solTitle:'Создаём системы для реального бизнеса',solSub:'От банковских платформ до платёжной инфраструктуры.',allSol:'Все решения →',tech:'Технологии',techTitle:'Сильный стек под каждую задачу',allTech:'Смотреть технологии →'},en:{sol:'Solutions',solTitle:'We build systems for real business',solSub:'From banking platforms to payment infrastructure.',allSol:'All solutions →',tech:'Technologies',techTitle:'A strong stack for every task',allTech:'View technologies →'},ky:{sol:'Чечимдер',solTitle:'Чыныгы бизнес үчүн системаларды түзөбүз',solSub:'Банк платформаларынан төлөм инфраструктурасына чейин.',allSol:'Бардык чечимдер →',tech:'Технологиялар',techTitle:'Ар бир тапшырма үчүн күчтүү стек',allTech:'Технологияларды көрүү →'}}[lang];
 return <><Navbar/><main><Hero/>
  <section className="home-solutions section-padding" id="solutions-preview"><div className="container"><div className="section-header"><div className="section-label">{copy.sol}</div><h2 className="section-title">{copy.solTitle}</h2><p className="section-subtitle">{copy.solSub}</p></div><div className="mini-grid">{solutions.slice(0,9).map(s=><Link to={`/solutions/${s.id}`} className="mini-card" key={s.id}><span>{s.icon}</span><strong>{s.title[lang]}</strong><small>{s.desc[lang]}</small></Link>)}</div><div className="center-action"><Link className="btn-outline-custom" to="/solutions">{copy.allSol}</Link></div></div></section>
  <Services/>
  <section className="tech-preview section-padding"><div className="container"><div className="section-header"><div className="section-label">{copy.tech}</div><h2 className="section-title">{copy.techTitle}</h2></div><div className="tech-cloud">{technologies.flatMap(x=>x.items).map(x=><span key={x}>{x}</span>)}</div><div className="center-action"><Link className="btn-primary-custom" to="/technologies">{copy.allTech}</Link></div></div></section>
  <WhyUs/><Pricing/><MapSection/><ContactForm/>
 </main><Footer/></>;
}
export default Home;
