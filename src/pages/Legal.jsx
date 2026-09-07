import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LangContext } from '../App';

const content = {
  privacy: {
    ru: {k:'ПРАВОВАЯ ИНФОРМАЦИЯ',h:'Политика конфиденциальности',p:'Мы бережно относимся к данным посетителей сайта. Информация из форм обратной связи используется только для обработки обращений, связи с клиентом и подготовки предложения по проекту.',items:['Мы не передаём персональные данные третьим лицам без законного основания.','Данные из формы заявки используются для связи по указанному проекту.','Вы можете попросить уточнить или удалить предоставленные вами данные.']},
    en: {k:'LEGAL INFORMATION',h:'Privacy Policy',p:'We treat visitor data responsibly. Information submitted through contact forms is used to process requests, communicate with clients and prepare project proposals.',items:['We do not share personal data with third parties without a lawful basis.','Form data is used to contact you about the requested project.','You may ask us to correct or delete the information you provided.']},
    ky: {k:'УКУКТУК МААЛЫМАТ',h:'Купуялык саясаты',p:'Биз сайтка киргендердин маалыматтарына жоопкерчилик менен мамиле кылабыз. Формалар аркылуу берилген маалымат арыздарды иштетүү жана кардар менен байланышуу үчүн колдонулат.',items:['Жеке маалыматтар мыйзамдуу негизсиз үчүнчү жактарга берилбейт.','Формадагы маалымат көрсөтүлгөн долбоор боюнча байланыш үчүн колдонулат.','Берген маалыматты тактоону же өчүрүүнү сурасаңыз болот.']}
  },
  terms: {
    ru: {k:'ПРАВОВАЯ ИНФОРМАЦИЯ',h:'Условия использования',p:'Используя сайт Web.it, вы соглашаетесь с правилами ниже. Содержание сайта носит информационный характер и может обновляться по мере развития услуг.',items:['Материалы сайта предназначены для общего ознакомления.','Стоимость и сроки проекта уточняются после обсуждения задачи.','Мы можем обновлять содержание, функции и условия сайта без предварительного уведомления.']},
    en: {k:'LEGAL INFORMATION',h:'Terms of Use',p:'By using Web.it, you agree to the terms below. Website content is informational and may be updated as our services evolve.',items:['Website materials are provided for general information.','Final project pricing and timelines are confirmed after discussing requirements.','We may update website content, features and terms as the service evolves.']},
    ky: {k:'УКУКТУК МААЛЫМАТ',h:'Колдонуу шарттары',p:'Web.it сайтын колдонуу менен төмөнкү шарттарга макул болосуз. Сайттагы маалыматтар маалыматтык мүнөздө болуп, кызматтар өнүккөн сайын жаңыртылышы мүмкүн.',items:['Сайттагы материалдар жалпы маалымат үчүн берилет.','Долбоордун акыркы баасы жана мөөнөтү тапшырма талкуулангандан кийин аныкталат.','Сайттын мазмуну жана функциялары кызматтардын өнүгүшүнө жараша жаңыртылышы мүмкүн.']}
  }
};

export default function Legal({ type: typeProp }){
  const {type: typeParam='privacy'}=useParams();
  const type = typeProp || typeParam; const {lang}=useContext(LangContext); const c=(content[type]||content.privacy)[lang];
  return <><Navbar/><main className="legal-page"><Container>
    <div className="legal-card" data-aos="fade-up">
      <Link to="/" className="legal-back">← {lang==='ru'?'На главную':lang==='en'?'Back to home':'Башкы бетке'}</Link>
      <span className="page-kicker">{c.k}</span><h1>{c.h}</h1><p className="legal-lead">{c.p}</p>
      <div className="legal-list">{c.items.map((x,i)=><div key={i}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}</div>
      <div className="legal-actions"><Link to="/solutions" className="legal-button secondary">{lang==='ru'?'Решения':lang==='en'?'Solutions':'Чечимдер'}</Link><Link to="/" className="legal-button">{lang==='ru'?'Связаться':lang==='en'?'Contact us':'Байланышуу'}</Link></div>
    </div>
  </Container></main><Footer/></>;
}
