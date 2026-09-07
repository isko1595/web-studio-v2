import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { technologies } from '../data';
import { LangContext } from '../App';

const labels={ru:{k:'ТЕХНОЛОГИИ',h:'Используем эффективные технологии',p:'Подбираем стек под задачу: производительность, безопасность, масштабирование и удобство поддержки.',all:'Все'},en:{k:'TECHNOLOGIES',h:'Powered by efficient technologies',p:'We choose the right stack for performance, security, scalability and maintainability.',all:'All'},ky:{k:'ТЕХНОЛОГИЯЛАР',h:'Натыйжалуу технологияларды колдонобуз',p:'Өндүрүмдүүлүк, коопсуздук, масштабдоо жана колдоо ыңгайлуулугу үчүн туура стекти тандайбыз.',all:'Баары'}};
const names={ru:['Backend','Frontend','Design','DevOps','QA','Management'],en:['Backend','Frontend','Design','DevOps','QA','Management'],ky:['Backend','Frontend','Дизайн','DevOps','QA','Башкаруу']};

export default function Technologies(){
 const {lang}=useContext(LangContext); const [active,setActive]=useState(0); const c=labels[lang];
 return <><Navbar/><main className="technology-page"><Container>
   <div className="tech-hero"><span className="page-kicker">{c.k}</span><h1>{c.h}</h1><p>{c.p}</p></div>
   <div className="tech-tabs"><button className={active===0?'active':''} onClick={()=>setActive(0)}>{c.all}</button>{technologies.map((x,i)=><button key={x.title} className={active===i+1?'active':''} onClick={()=>setActive(i+1)}>{names[lang][i]}</button>)}</div>
   <section className="tech-showcase">
    {(active===0?technologies:[technologies[active-1]]).map((group,i)=> <article className="tech-row" key={group.title}>
      <div className="tech-row-index">0{active===0?technologies.indexOf(group)+1:active}</div>
      <div className="tech-row-title"><span>{names[lang][technologies.indexOf(group)]}</span><h2>{group.title}</h2></div>
      <div className="tech-row-items">{group.items.map(x=><span key={x}>{x}</span>)}</div>
    </article>)}
   </section>
   <div className="tech-bottom-note"><span>Web.it · 2026</span><span>{lang==='ru'?'Стек развивается вместе с продуктом':lang==='en'?'The stack evolves with the product':'Стек продукт менен бирге өнүгөт'}</span></div>
 </Container></main><Footer/></>;
}
