import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMobileAlt, FaGlobe, FaRocket, FaShoppingCart, FaPaintBrush, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../App';

const servicesData = [
  {
    id: 'landing',
    icon: <FaRocket />,
    title: { ru: 'Лендинг', en: 'Landing Page', ky: 'Лендинг' },
    desc: {
      ru: 'Одностраничный сайт для быстрого запуска продаж и сбора заявок. Идеален для рекламных кампаний.',
      en: 'Single-page website for quick sales launch and lead generation. Perfect for ad campaigns.',
      ky: 'Сатууларды тез баштоо жана арыздарды чогултуу үчүн бир барактуу сайт. Жарнамалык кампаниялар үчүн идеалдуу.'
    },
    features: {
      ru: ['Уникальный дизайн', 'Адаптивная верстка', 'Форма обратной связи', 'SEO-оптимизация', 'Подключение аналитики', 'Срок: 3-5 дней'],
      en: ['Unique design', 'Responsive layout', 'Contact form', 'SEO optimization', 'Analytics setup', 'Timeline: 3-5 days'],
      ky: ['Уникалдуу дизайн', 'Адаптивдүү верстка', 'Байланыш формасы', 'SEO оптимизация', 'Аналитика', 'Мөөнөт: 3-5 күн']
    },
    price: { ru: 'от 12 000 сом', en: 'from 12,000 KGS', ky: '12 000 сомдон' }
  },
  {
    id: 'corporate',
    icon: <FaGlobe />,
    title: { ru: 'Корпоративный сайт', en: 'Corporate Website', ky: 'Корпоративдик сайт' },
    desc: {
      ru: 'Полноценный веб-сайт для вашего бизнеса с множеством страниц и CMS системой.',
      en: 'Full-featured business website with multiple pages and CMS system.',
      ky: 'Көп барактуу жана CMS системасы бар толук функциялуу бизнес сайты.'
    },
    features: {
      ru: ['До 10 страниц', 'CMS система', 'Личный кабинет', 'Интеграция CRM', 'SSL сертификат', 'Срок: 7-14 дней'],
      en: ['Up to 10 pages', 'CMS system', 'User account', 'CRM integration', 'SSL certificate', 'Timeline: 7-14 days'],
      ky: ['10 баракка чейин', 'CMS системасы', 'Жеке кабинет', 'CRM интеграция', 'SSL сертификат', 'Мөөнөт: 7-14 күн']
    },
    price: { ru: 'от 28 000 сом', en: 'from 28,000 KGS', ky: '28 000 сомдон' }
  },
  {
    id: 'shop',
    icon: <FaShoppingCart />,
    title: { ru: 'Интернет-магазин', en: 'Online Store', ky: 'Онлайн дүкөн' },
    desc: {
      ru: 'Полнофункциональный интернет-магазин с каталогом, корзиной, оплатой и управлением заказами.',
      en: 'Full-featured online store with catalog, cart, payment and order management.',
      ky: 'Каталог, араба, төлөө жана заказдарды башкаруу менен толук функциялуу онлайн дүкөн.'
    },
    features: {
      ru: ['Каталог товаров', 'Корзина и оплата', 'Фильтры и поиск', 'Управление заказами', 'Интеграция доставки', 'Срок: 14-21 день'],
      en: ['Product catalog', 'Cart & payment', 'Filters & search', 'Order management', 'Delivery integration', 'Timeline: 14-21 days'],
      ky: ['Товарлар каталогу', 'Араба жана төлөө', 'Фильтрлер жана издөө', 'Заказдарды башкаруу', 'Жеткирүү интеграциясы', 'Мөөнөт: 14-21 күн']
    },
    price: { ru: 'от 44 000 сом', en: 'from 44,000 KGS', ky: '44 000 сомдон' }
  },
  {
    id: 'webapp',
    icon: <FaRocket />,
    title: { ru: 'Веб-приложение', en: 'Web Application', ky: 'Веб-колдонмо' },
    desc: {
      ru: 'Сложное веб-приложение с базой данных, API и админ-панелью для автоматизации бизнеса.',
      en: 'Complex web application with database, API and admin panel for business automation.',
      ky: 'База маалыматтары, API жана бизнесди автоматташтыруу үчүн админ панели менен татаал веб-колдонмо.'
    },
    features: {
      ru: ['Сложная архитектура', 'База данных', 'API интеграции', 'Админ-панель', 'Масштабируемость', 'Срок: 21-45 дней'],
      en: ['Complex architecture', 'Database', 'API integrations', 'Admin panel', 'Scalability', 'Timeline: 21-45 days'],
      ky: ['Татаал архитектура', 'Маалыматтар базасы', 'API интеграциялары', 'Админ панели', 'Масштабдалуулук', 'Мөөнөт: 21-45 күн']
    },
    price: { ru: 'от 70 000 сом', en: 'from 70,000 KGS', ky: '70 000 сомдон' }
  },
  {
    id: 'mobile',
    icon: <FaMobileAlt />,
    title: { ru: 'Мобильное приложение', en: 'Mobile App', ky: 'Мобилдик колдонмо' },
    desc: {
      ru: 'Нативные мобильные приложения для iOS и Android с пуш-уведомлениями и офлайн-режимом.',
      en: 'Native mobile apps for iOS and Android with push notifications and offline mode.',
      ky: 'Push билдирүүлөрү жана офлайн режими менен iOS жана Android үчүн нативдик мобилдик колдонмолор.'
    },
    features: {
      ru: ['iOS + Android', 'Пуш-уведомления', 'Офлайн-режим', 'Интеграция с backend', 'Публикация в сторах', 'Срок: 30-60 дней'],
      en: ['iOS + Android', 'Push notifications', 'Offline mode', 'Backend integration', 'Store publishing', 'Timeline: 30-60 days'],
      ky: ['iOS + Android', 'Push билдирүүлөр', 'Офлайн режими', 'Backend интеграциясы', 'Store жарыялоо', 'Мөөнөт: 30-60 күн']
    },
    price: { ru: 'от 90 000 сом', en: 'from 90,000 KGS', ky: '90 000 сомдон' }
  },
  {
    id: 'design',
    icon: <FaPaintBrush />,
    title: { ru: 'UI/UX Дизайн', en: 'UI/UX Design', ky: 'UI/UX Дизайн' },
    desc: {
      ru: 'Продуманный дизайн интерфейсов, который повышает конверсию и делает продукт удобным.',
      en: 'Thoughtful interface design that increases conversion and makes the product user-friendly.',
      ky: 'Конверсияны жогорулаткан жана продуктту ыңгайлуу кылган ойлонулган интерфейс дизайны.'
    },
    features: {
      ru: ['Прототипирование', 'User Research', 'Дизайн-система', 'Анимации', 'Тестирование юзабилити', 'Срок: 5-10 дней'],
      en: ['Prototyping', 'User Research', 'Design system', 'Animations', 'Usability testing', 'Timeline: 5-10 days'],
      ky: ['Прототиптөө', 'User Research', 'Дизайн системасы', 'Анимациялар', 'Usability тестирлөө', 'Мөөнөт: 5-10 күн']
    },
    price: { ru: 'от 8 000 сом', en: 'from 8,000 KGS', ky: '8 000 сомдон' }
  }
];

function Services() {
  const navigate = useNavigate();
  const { lang, t } = useContext(LangContext);

  const openService = (id) => {
    navigate(`/service/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="services-section section-padding" id="services">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <div className="section-label">{t.sectionServices}</div>
          <h2 className="section-title">{t.sectionServicesTitle}</h2>
          <p className="section-subtitle">{t.sectionServicesSub}</p>
        </div>
        <Row className="g-4">
          {servicesData.map((service, index) => (
            <Col lg={4} md={6} key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-card" onClick={() => openService(service.id)}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title[lang]}</h3>
                <p className="service-desc">{service.desc[lang]}</p>
                <span className="service-link">
                  {lang === 'ru' ? 'Подробнее' : lang === 'en' ? 'Learn more' : 'Кененирээк'} <FaArrowRight />
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
