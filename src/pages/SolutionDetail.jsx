import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { solutions } from '../data';
import { LangContext } from '../App';

const details = {
  cbs: {
    ru:['АБС','Автоматизируем банковские операции','Централизованная система для счетов, продуктов, операций, ролей и внутренних процессов банка.'],
    en:['CBS','Automate banking operations','A centralized platform for accounts, products, operations, roles and internal banking processes.'],
    ky:['АБС','Банк операцияларын автоматташтыруу','Эсептерди, продукттарды, операцияларды, ролдорду жана ички банк процесстерин башкаруучу борбордук система.']
  },
  processing:{ru:['Процессинг','Обработка транзакций без лишних задержек','Надёжный контур для маршрутизации, проверки и контроля карточных транзакций.'],en:['Processing','Transaction processing without unnecessary delays','A reliable layer for routing, validation and monitoring of card transactions.'],ky:['Процессинг','Транзакцияларды тез жана туруктуу иштетүү','Карталык транзакцияларды багыттоо, текшерүү жана көзөмөлдөө үчүн ишенимдүү контур.']},
  'mobile-banking':{ru:['Мобильный интернет-банкинг','Финансы всегда под рукой','Мобильный продукт с понятным UX, безопасной авторизацией, платежами и историей операций.'],en:['Mobile Internet Banking','Your finances always at hand','A mobile product with clear UX, secure authentication, payments and transaction history.'],ky:['Мобилдик интернет-банкинг','Каржы ар дайым колуңузда','Ыңгайлуу UX, коопсуз авторизация, төлөмдөр жана операциялар тарыхы бар мобилдик продукт.']},
  crm:{ru:['CRM','Управление клиентами и продажами','Единое пространство для клиентов, задач, коммуникаций, воронок и аналитики.'],en:['CRM','Manage customers and sales','A single workspace for customers, tasks, communication, funnels and analytics.'],ky:['CRM','Кардарларды жана сатууларды башкаруу','Кардарлар, тапшырмалар, байланыштар, воронкалар жана аналитика үчүн бирдиктүү мейкиндик.']},
  payments:{ru:['Платежная система','Безопасный приём платежей','Инфраструктура для приема, маршрутизации и контроля платежей с интеграциями API.'],en:['Payment System','Secure payment acceptance','Infrastructure for payment acceptance, routing and monitoring with API integrations.'],ky:['Төлөм системасы','Коопсуз төлөм кабыл алуу','API интеграциялары менен төлөмдөрдү кабыл алуу, багыттоо жана көзөмөлдөө инфраструктурасы.']},
  crypto:{ru:['Крипто-платформа','Цифровые активы в одном продукте','Интерфейсы и backend для управления цифровыми активами и интеграции внешних сервисов.'],en:['Crypto Platform','Digital assets in one product','Interfaces and backend for digital asset operations and external service integrations.'],ky:['Крипто-платформа','Санарип активдер бир продуктта','Санарип активдерди башкаруу жана тышкы сервистерди интеграциялоо үчүн интерфейс жана backend.']},
  scoring:{ru:['Скоринг-система','Быстрее принимаем решения по рискам','Система расчёта и оценки параметров, которая помогает автоматизировать кредитные решения.'],en:['Scoring System','Faster risk decisions','A calculation and evaluation system that helps automate credit decisions.'],ky:['Скоринг-система','Тобокелдик боюнча чечимди тез кабыл алуу','Көрсөткүчтөрдү эсептөө жана баалоо аркылуу кредиттик чечимдерди автоматташтырууга жардам берет.']},
  loyalty:{ru:['Система лояльности','Увеличиваем вовлечённость клиентов','Бонусы, уровни, правила начисления и аналитика в единой системе лояльности.'],en:['Loyalty System','Increase customer engagement','Bonuses, levels, earning rules and analytics in one loyalty platform.'],ky:['Лоялдуулук системасы','Кардарлардын кызыгуусун күчөтүү','Бонустар, деңгээлдер, эсептөө эрежелери жана аналитика бир системада.']},
  'open-banking':{ru:['Open Banking','Открытые финансовые интеграции','Безопасный обмен данными и подключение банковских сервисов через современные API.'],en:['Open Banking','Open financial integrations','Secure data exchange and banking-service connectivity through modern APIs.'],ky:['Open Banking','Ачык финансылык интеграциялар','Заманбап API аркылуу маалыматтарды коопсуз алмашуу жана банк сервистерин туташтыруу.']}
};

const includes = {
  ru:['Анализ бизнес-процессов','Проектирование UX/UI','Frontend и backend-разработка','API-интеграции','Тестирование и контроль качества','Подготовка к запуску и поддержка'],
  en:['Business process analysis','UX/UI design','Frontend and backend development','API integrations','Testing and quality assurance','Launch preparation and support'],
  ky:['Бизнес процесстерин талдоо','UX/UI дизайн','Frontend жана backend иштеп чыгуу','API интеграциялары','Тестирлөө жана сапатты көзөмөлдөө','Ишке киргизүү жана колдоо']
};

export default function SolutionDetail(){
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useContext(LangContext);
  const item = solutions.find(x=>x.id===id);
  const d = details[id];
  if(!item || !d) return <><Navbar/><main className="inner-page"><Container className="text-center"><h1>404</h1><Link to="/solutions" className="hero-white-button">Solutions</Link></Container></main><Footer/></>;
  const contact = ()=>{ navigate('/'); setTimeout(()=>document.getElementById('contacts')?.scrollIntoView({behavior:'smooth'}),350); };
  return <><Navbar/><main className="solution-detail-page">
    <Container>
      <Link to="/solutions" className="detail-back"><FaArrowLeft/> {lang==='ru'?'Все решения':lang==='en'?'All solutions':'Бардык чечимдер'}</Link>
      <div className="solution-detail-head"><div className="solution-detail-icon">{item.icon}</div><div><div className="page-kicker">{d[lang][0]}</div><h1>{d[lang][1]}</h1><p>{d[lang][2]}</p></div></div>
      <Row className="g-4 align-items-start">
        <Col lg={8}><div className="detail-panel"><h2>{lang==='ru'?'Что мы делаем':lang==='en'?'What we do':'Эмне кылабыз'}</h2><p>{d[lang][2]}</p><div className="detail-list">{includes[lang].map(x=><div key={x}><FaCheckCircle/>{x}</div>)}</div></div></Col>
        <Col lg={4}><aside className="detail-cta"><span>{lang==='ru'?'Готовы обсудить задачу?':lang==='en'?'Ready to discuss the task?':'Маселени талкуулайбызбы?'}</span><h3>{lang==='ru'?'Давайте создадим решение':lang==='en'?'Let’s build the solution':'Келгиле чечим түзөлү'}</h3><button onClick={contact}>{lang==='ru'?'Связаться':lang==='en'?'Contact us':'Байланышуу'}</button></aside></Col>
      </Row>
    </Container>
  </main><Footer/></>;
}
