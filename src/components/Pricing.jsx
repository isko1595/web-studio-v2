import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { LangContext } from '../App';

const plansData = [
  {
    id: 'landing',
    name: { ru: 'Лендинг', en: 'Landing Page', ky: 'Лендинг' },
    price: { ru: '12 000', en: '12,000', ky: '12 000' },
    features: {
      ru: ['Уникальный дизайн', 'Адаптивная верстка', 'Форма обратной связи', 'SEO-оптимизация', 'Подключение аналитики'],
      en: ['Unique design', 'Responsive layout', 'Contact form', 'SEO optimization', 'Analytics setup'],
      ky: ['Уникалдуу дизайн', 'Адаптивдүү верстка', 'Байланыш формасы', 'SEO оптимизация', 'Аналитика']
    },
    popular: false
  },
  {
    id: 'corporate',
    name: { ru: 'Корпоративный', en: 'Corporate', ky: 'Корпоративдик' },
    price: { ru: '28 000', en: '28,000', ky: '28 000' },
    features: {
      ru: ['До 10 страниц', 'CMS система', 'Личный кабинет', 'Интеграция CRM', 'SSL сертификат'],
      en: ['Up to 10 pages', 'CMS system', 'User account', 'CRM integration', 'SSL certificate'],
      ky: ['10 баракка чейин', 'CMS системасы', 'Жеке кабинет', 'CRM интеграция', 'SSL сертификат']
    },
    popular: true
  },
  {
    id: 'shop',
    name: { ru: 'Интернет-магазин', en: 'Online Store', ky: 'Онлайн дүкөн' },
    price: { ru: '44 000', en: '44,000', ky: '44 000' },
    features: {
      ru: ['Каталог товаров', 'Корзина и оплата', 'Фильтры и поиск', 'Управление заказами', 'Интеграция доставки'],
      en: ['Product catalog', 'Cart & payment', 'Filters & search', 'Order management', 'Delivery integration'],
      ky: ['Товарлар каталогу', 'Араба жана төлөө', 'Фильтрлер жана издөө', 'Заказдарды башкаруу', 'Жеткирүү интеграциясы']
    },
    popular: false
  },
  {
    id: 'webapp',
    name: { ru: 'Веб-приложение', en: 'Web App', ky: 'Веб-колдонмо' },
    price: { ru: '70 000', en: '70,000', ky: '70 000' },
    features: {
      ru: ['Сложная архитектура', 'База данных', 'API интеграции', 'Админ-панель', 'Масштабируемость'],
      en: ['Complex architecture', 'Database', 'API integrations', 'Admin panel', 'Scalability'],
      ky: ['Татаал архитектура', 'Маалыматтар базасы', 'API интеграциялары', 'Админ панели', 'Масштабдалуулук']
    },
    popular: false
  },
  {
    id: 'mobile',
    name: { ru: 'Мобильное приложение', en: 'Mobile App', ky: 'Мобилдик колдонмо' },
    price: { ru: '90 000', en: '90,000', ky: '90 000' },
    features: {
      ru: ['iOS + Android', 'Пуш-уведомления', 'Офлайн-режим', 'Интеграция с backend', 'Публикация в сторах'],
      en: ['iOS + Android', 'Push notifications', 'Offline mode', 'Backend integration', 'Store publishing'],
      ky: ['iOS + Android', 'Push билдирүүлөр', 'Офлайн режими', 'Backend интеграциясы', 'Store жарыялоо']
    },
    popular: false
  }
];

function Pricing() {
  const { lang, t } = useContext(LangContext);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pricing-section section-padding" id="pricing">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <div className="section-label">{t.sectionPricing}</div>
          <h2 className="section-title">{t.sectionPricingTitle}</h2>
          <p className="section-subtitle">{t.sectionPricingSub}</p>
        </div>
        <Row className="g-4 justify-content-center">
          {plansData.map((plan, index) => (
            <Col lg={4} md={6} key={plan.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">{lang === 'ru' ? 'Популярное' : lang === 'en' ? 'Popular' : 'Популярдуу'}</div>}
                <h3 className="pricing-name">{plan.name[lang]}</h3>
                <div className="pricing-price">{plan.price[lang]} <span>{t.currency}</span></div>
                <ul className="pricing-features">
                  {plan.features[lang].map((feature, i) => (
                    <li key={i}><FaCheck color="#dc2626" /> {feature}</li>
                  ))}
                </ul>
                <button 
                  className={`btn-pricing ${plan.popular ? 'btn-pricing-primary' : 'btn-pricing-outline'}`}
                  onClick={() => scrollTo('contacts')}
                >
                  {t.btnContact}
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Pricing;
