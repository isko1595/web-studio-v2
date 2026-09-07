import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowLeft, FaCheck, FaRocket, FaGlobe, FaShoppingCart, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { LangContext } from '../App';
import Navbar from './Navbar';
import Footer from './Footer';

const serviceDetails = {
  landing: {
    icon: <FaRocket size={48} />,
    title: { ru: 'Лендинг', en: 'Landing Page', ky: 'Лендинг' },
    desc: {
      ru: 'Одностраничный сайт, созданный для максимальной конверсии. Идеально подходит для рекламных кампаний, запуска новых продуктов и сбора заявок.',
      en: 'A single-page website designed for maximum conversion. Perfect for ad campaigns, product launches and lead generation.',
      ky: 'Максималдуу конверсия үчүн түзүлгөн бир барактуу сайт. Жарнамалык кампаниялар, жаңы продуктуларды ишке киргизүү жана арыздарды чогултуу үчүн идеалдуу.'
    },
    features: {
      ru: ['Уникальный дизайн под ваш бренд', 'Адаптивная верстка для всех устройств', 'Форма обратной связи с уведомлениями', 'SEO-оптимизация для поисковиков', 'Подключение Google Analytics и Яндекс.Метрики', 'A/B тестирование элементов', 'Скорость загрузки < 2 секунд'],
      en: ['Unique design for your brand', 'Responsive layout for all devices', 'Contact form with notifications', 'SEO optimization for search engines', 'Google Analytics & Yandex.Metrika setup', 'A/B testing of elements', 'Loading speed < 2 seconds'],
      ky: ['Сиздин брендиңиз үчүн уникалдуу дизайн', 'Бардык түзмөктөр үчүн адаптивдүү верстка', 'Билдирүүлөр менен байланыш формасы', 'Издөө системалары үчүн SEO оптимизация', 'Google Analytics жана Яндекс.Метрика', 'A/B элементтерди тестирлөө', 'Жүктөө ылдамдыгы < 2 секунда']
    },
    price: { ru: 'от 12 000 сом', en: 'from 12,000 KGS', ky: '12 000 сомдон' },
    timeline: { ru: '3-5 дней', en: '3-5 days', ky: '3-5 күн' }
  },
  corporate: {
    icon: <FaGlobe size={48} />,
    title: { ru: 'Корпоративный сайт', en: 'Corporate Website', ky: 'Корпоративдик сайт' },
    desc: {
      ru: 'Полноценный многостраничный сайт для представления вашей компании в интернете. Включает CMS для самостоятельного управления контентом.',
      en: 'A full-featured multi-page website to represent your company online. Includes CMS for self-managed content.',
      ky: 'Интернетте компанияңызды көрсөтүү үчүн толук функциялуу көп барактуу сайт. Контентти өз алдынча башкаруу үчүн CMS камтылган.'
    },
    features: {
      ru: ['До 10 уникальных страниц', 'CMS система (WordPress / Strapi)', 'Личный кабинет клиента', 'Интеграция с CRM', 'SSL сертификат в подарок', 'Многоязычность', 'Блог и новостной раздел'],
      en: ['Up to 10 unique pages', 'CMS system (WordPress / Strapi)', 'Client personal account', 'CRM integration', 'Free SSL certificate', 'Multilingual support', 'Blog and news section'],
      ky: ['10 уникалдуу баракка чейин', 'CMS системасы (WordPress / Strapi)', 'Кардардын жеке кабинети', 'CRM интеграциясы', 'Акысыз SSL сертификат', 'Көп тилдүүлүк', 'Блог жана жаңылыктар бөлүмү']
    },
    price: { ru: 'от 28 000 сом', en: 'from 28,000 KGS', ky: '28 000 сомдон' },
    timeline: { ru: '7-14 дней', en: '7-14 days', ky: '7-14 күн' }
  },
  shop: {
    icon: <FaShoppingCart size={48} />,
    title: { ru: 'Интернет-магазин', en: 'Online Store', ky: 'Онлайн дүкөн' },
    desc: {
      ru: 'Полнофункциональный интернет-магазин с каталогом товаров, корзиной, онлайн-оплатой и системой управления заказами.',
      en: 'Full-featured online store with product catalog, shopping cart, online payment and order management system.',
      ky: 'Товарлар каталогу, араба, онлайн төлөө жана заказдарды башкаруу системасы менен толук функциялуу онлайн дүкөн.'
    },
    features: {
      ru: ['Неограниченный каталог товаров', 'Корзина с сохранением', 'Интеграция платежных систем', 'Фильтры и умный поиск', 'Управление заказами и складом', 'Интеграция служб доставки', 'Email и SMS уведомления'],
      en: ['Unlimited product catalog', 'Persistent shopping cart', 'Payment system integration', 'Filters and smart search', 'Order and inventory management', 'Delivery service integration', 'Email & SMS notifications'],
      ky: ['Чексиз товарлар каталогу', 'Сакталган араба', 'Төлөө системаларынын интеграциясы', 'Фильтрлер жана акылдуу издөө', 'Заказдарды жана кампаны башкаруу', 'Жеткирүү кызматтарынын интеграциясы', 'Email жана SMS билдирүүлөр']
    },
    price: { ru: 'от 44 000 сом', en: 'from 44,000 KGS', ky: '44 000 сомдон' },
    timeline: { ru: '14-21 день', en: '14-21 days', ky: '14-21 күн' }
  },
  webapp: {
    icon: <FaRocket size={48} />,
    title: { ru: 'Веб-приложение', en: 'Web Application', ky: 'Веб-колдонмо' },
    desc: {
      ru: 'Сложное веб-приложение с базой данных, API и админ-панелью для автоматизации процессов вашего бизнеса.',
      en: 'Complex web application with database, API and admin panel for automating your business processes.',
      ky: 'Бизнес процесстериңизди автоматташтыруу үчүн маалыматтар базасы, API жана админ панели менен татаал веб-колдонмо.'
    },
    features: {
      ru: ['Современная архитектура', 'База данных PostgreSQL / MongoDB', 'REST / GraphQL API', 'Админ-панель управления', 'Ролевая модель доступа', 'Масштабируемая инфраструктура', 'Docker контейнеризация'],
      en: ['Modern architecture', 'PostgreSQL / MongoDB database', 'REST / GraphQL API', 'Management admin panel', 'Role-based access', 'Scalable infrastructure', 'Docker containerization'],
      ky: ['Заманбап архитектура', 'PostgreSQL / MongoDB маалыматтар базасы', 'REST / GraphQL API', 'Башкаруу админ панели', 'Ролдуу жетүү модели', 'Масштабдалуу инфраструктура', 'Docker контейнерлөө']
    },
    price: { ru: 'от 70 000 сом', en: 'from 70,000 KGS', ky: '70 000 сомдон' },
    timeline: { ru: '21-45 дней', en: '21-45 days', ky: '21-45 күн' }
  },
  mobile: {
    icon: <FaMobileAlt size={48} />,
    title: { ru: 'Мобильное приложение', en: 'Mobile App', ky: 'Мобилдик колдонмо' },
    desc: {
      ru: 'Нативные мобильные приложения для iOS и Android с пуш-уведомлениями, офлайн-режимом и публикацией в App Store / Google Play.',
      en: 'Native mobile apps for iOS and Android with push notifications, offline mode and publishing to App Store / Google Play.',
      ky: 'Push билдирүүлөрү, офлайн режими жана App Store / Google Play жарыялоо менен iOS жана Android үчүн нативдик мобилдик колдонмолор.'
    },
    features: {
      ru: ['iOS + Android одновременно', 'Пуш-уведомления Firebase', 'Офлайн-режим работы', 'Интеграция с backend', 'Публикация в App Store / Play Market', 'Аналитика использования', 'Биометрическая авторизация'],
      en: ['iOS + Android simultaneously', 'Firebase push notifications', 'Offline mode', 'Backend integration', 'Publishing to App Store / Play Market', 'Usage analytics', 'Biometric authentication'],
      ky: ['iOS + Android бир убакта', 'Firebase push билдирүүлөр', 'Офлайн режими', 'Backend интеграциясы', 'App Store / Play Market жарыялоо', 'Колдонуу аналитикасы', 'Биометриялык аутентификация']
    },
    price: { ru: 'от 90 000 сом', en: 'from 90,000 KGS', ky: '90 000 сомдон' },
    timeline: { ru: '30-60 дней', en: '30-60 days', ky: '30-60 күн' }
  },
  design: {
    icon: <FaPaintBrush size={48} />,
    title: { ru: 'UI/UX Дизайн', en: 'UI/UX Design', ky: 'UI/UX Дизайн' },
    desc: {
      ru: 'Продуманный дизайн интерфейсов, который повышает конверсию и делает ваш продукт удобным и запоминающимся.',
      en: 'Thoughtful interface design that increases conversion and makes your product user-friendly and memorable.',
      ky: 'Конверсияны жогорулаткан жана сиздин продуктуңузду ыңгайлуу жана эсте калтырган кылган ойлонулган интерфейс дизайны.'
    },
    features: {
      ru: ['Интерактивное прототипирование', 'User Research и CJM', 'Полная дизайн-система', 'Микро-анимации', 'Юзабилити тестирование', 'Адаптация под iOS / Android / Web'],
      en: ['Interactive prototyping', 'User Research & CJM', 'Complete design system', 'Micro-animations', 'Usability testing', 'Adaptation for iOS / Android / Web'],
      ky: ['Интерактивдүү прототиптөө', 'User Research жана CJM', 'Толук дизайн системасы', 'Микро-анимациялар', 'Usability тестирлөө', 'iOS / Android / Web үчүн адаптация']
    },
    price: { ru: 'от 8 000 сом', en: 'from 8,000 KGS', ky: '8 000 сомдон' },
    timeline: { ru: '5-10 дней', en: '5-10 days', ky: '5-10 күн' }
  }
};

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang, t } = useContext(LangContext);
  const service = serviceDetails[id];

  if (!service) {
    return (
      <Container className="py-5 text-center">
        <h2>Услуга не найдена</h2>
        <Button onClick={() => navigate('/')} className="btn-primary-custom mt-3">{t.back}</Button>
      </Container>
    );
  }

  const scrollToContacts = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('contacts');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <Navbar />
      <div style={{background: 'var(--light)', minHeight: '100vh'}}>
      <div className="service-detail-hero">
        <Container>
          <Button 
            variant="link" 
            onClick={() => navigate('/')} 
            style={{color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}
          >
            <FaArrowLeft /> {t.back}
          </Button>
          <div className="d-flex align-items-center gap-4 flex-wrap">
            <div style={{width: 80, height: 80, background: 'var(--gradient-1)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
              {service.icon}
            </div>
            <div>
              <h1 style={{fontWeight: 800, fontSize: '2.5rem', color: 'var(--text-main)'}}>{service.title[lang]}</h1>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0}}>{service.price[lang]} · {service.timeline[lang]}</p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="service-detail-content">
          <Row className="g-5">
            <Col lg={8}>
              <h3 style={{fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-main)'}}>
                {lang === 'ru' ? 'Описание' : lang === 'en' ? 'Description' : 'Сүрөттөмө'}
              </h3>
              <p style={{fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)'}}>{service.desc[lang]}</p>

              <h3 style={{fontWeight: 700, marginTop: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-main)'}}>
                {lang === 'ru' ? 'Что входит' : lang === 'en' ? "What's Included" : 'Эмне кирет'}
              </h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                {service.features[lang].map((feat, i) => (
                  <li key={i} style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem 0', borderBottom: '1px solid var(--border-color)', color: 'var(--text-main)'}}>
                    <FaCheck color="#dc2626" /> {feat}
                  </li>
                ))}
              </ul>
            </Col>

            <Col lg={4}>
              <div style={{background: 'var(--light)', borderRadius: '20px', padding: '2rem', border: '1px solid var(--border-color)', position: 'sticky', top: 100}}>
                <h4 style={{fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)'}}>
                  {lang === 'ru' ? 'Стоимость' : lang === 'en' ? 'Price' : 'Баасы'}
                </h4>
                <div style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem'}}>
                  {service.price[lang]}
                </div>
                <div style={{color: 'var(--text-muted)', marginBottom: '2rem'}}>
                  {lang === 'ru' ? 'Срок: ' : lang === 'en' ? 'Timeline: ' : 'Мөөнөт: '}{service.timeline[lang]}
                </div>
                <Button className="btn-submit w-100" onClick={scrollToContacts}>
                  {t.serviceDetailBtn}
                </Button>
                <div style={{marginTop: '1.5rem', padding: '1rem', background: 'var(--card-bg)', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-color)'}}>
                  <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>
                    {lang === 'ru' ? 'Или напишите нам в' : lang === 'en' ? 'Or message us on' : 'Же бизге жазгыла'}
                  </div>
                  <a href="https://api.whatsapp.com/send/?phone=996556991154" target="_blank" rel="noopener noreferrer" style={{color: '#dc2626', fontWeight: 700, textDecoration: 'none'}}>
                    WhatsApp
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      </div>
      <Footer />
    </>
  );
}

export default ServiceDetail;
