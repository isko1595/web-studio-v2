import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaClock, FaUsers, FaShieldAlt, FaHeadset, FaChartLine, FaCode, FaMoneyBillWave, FaLightbulb } from 'react-icons/fa';
import { LangContext } from '../App';

const reasons = [
  { 
    icon: <FaClock />, 
    title: { ru: 'Быстрые сроки', en: 'Fast Delivery', ky: 'Тез мөөнөттөр' }, 
    desc: { 
      ru: 'От идеи до запуска — от 3 дней. Мы не тянем время и всегда соблюдаем дедлайны. Срочный проект? Сделаем ещё быстрее без потери качества.', 
      en: 'From idea to launch — from 3 days. We never delay and always meet deadlines. Urgent project? We will do it even faster without losing quality.', 
      ky: 'Идеядан ишке киргизүүгө чейин — 3 күндан. Биз эч качан созбойбуз жана ар дайым мөөнөттөрдү сактап калабыз. Шашылыш долбоор? Сапатсыз жогору ылдамдыкта жасайбыз.' 
    } 
  },
  { 
    icon: <FaUsers />, 
    title: { ru: 'Опытная команда', en: 'Experienced Team', ky: 'Тажрыйбалуу команда' }, 
    desc: { 
      ru: '5+ лет опыта в веб-разработке. 50+ реализованных проектов для бизнеса, образования и e-commerce. Каждый проект — это уникальное решение под ваши задачи.', 
      en: '5+ years in web development. 50+ completed projects for business, education and e-commerce. Every project is a unique solution tailored to your needs.', 
      ky: 'Веб-иштеп чыгууда 5+ жыл тажрыйба. Бизнес, билим берүү жана e-commerce үчүн 50+ ишке ашырылган долбоорлор. Ар бир долбоор — сиздин муктаждыктарыңызга ылайыкташтырылган уникалдуу чечим.' 
    } 
  },
  { 
    icon: <FaShieldAlt />, 
    title: { ru: 'Гарантия качества', en: 'Quality Guarantee', ky: 'Сапат кепилдиги' }, 
    desc: { 
      ru: 'Бесплатная техподдержка 3 месяца после сдачи проекта. Исправляем баги бесплатно. Даём гарантию на код и дизайн. Ваш сайт будет работать стабильно 24/7.', 
      en: 'Free tech support for 3 months after delivery. We fix bugs for free. We guarantee code and design quality. Your website will run stably 24/7.', 
      ky: 'Долбоорду тапшыруудан кийин 3 ай акысыз техникалык колдоо. Биз катачаларды акысыз оңдойбуз. Код жана дизайн сапатына кепилдик беребиз. Сиздин сайт 24/7 туруктуу иштейт.' 
    } 
  },
  { 
    icon: <FaHeadset />, 
    title: { ru: 'Поддержка 24/7', en: '24/7 Support', ky: '24/7 колдоо' }, 
    desc: { 
      ru: 'Всегда на связи через WhatsApp и Instagram. Отвечаем в течение часа. Не бросаем клиентов после запуска — сопровождаем и консультируем постоянно.', 
      en: 'Always available via WhatsApp and Instagram. We respond within an hour. We do not abandon clients after launch — we provide ongoing support and consultation.', 
      ky: 'WhatsApp жана Instagram аркылуу ар дайым байланышта. Бир саат ичинде жооп беребиз. Ишке киргизүүдөн кийин кардарларды таштап кетпейбиз — ар дайым колдоо көрсөтүп, кеңеш беребиз.' 
    } 
  },
  { 
    icon: <FaChartLine />, 
    title: { ru: 'Рост продаж', en: 'Sales Growth', ky: 'Сатуулардын өсүшү' }, 
    desc: { 
      ru: 'Создаём сайты, которые продают, а не просто красивые. SEO-оптимизация, быстрая загрузка, удобная воронка — всё для роста вашего бизнеса и привлечения клиентов.', 
      en: 'We create websites that sell, not just look pretty. SEO optimization, fast loading, convenient funnel — everything for your business growth and customer acquisition.', 
      ky: 'Гана кооз эмес, саткан сайттарды жасайбыз. SEO оптимизация, тез жүктөө, ыңгайлуу воронка — сиздин бизнесиңизди өнүктүрүү жана кардарларды тартуу үчүн бардыгы.' 
    } 
  },
  { 
    icon: <FaCode />, 
    title: { ru: 'Современный стек', en: 'Modern Stack', ky: 'Заманбап стек' }, 
    desc: { 
      ru: 'React, Node.js, Flutter, PostgreSQL — только актуальные технологии. Ваш сайт будет быстрым, безопасным и готовым к масштабированию. Никакого устаревшего кода.', 
      en: 'React, Node.js, Flutter, PostgreSQL — only up-to-date technologies. Your website will be fast, secure and ready to scale. No outdated code.', 
      ky: 'React, Node.js, Flutter, PostgreSQL — актуалдуу технологиялар гана. Сиздин сайт тез, коопсуз жана масштабдалуу болот. Эскирген код жок.' 
    } 
  },
  { 
    icon: <FaMoneyBillWave />, 
    title: { ru: 'Честные цены', en: 'Fair Pricing', ky: 'Адилеттүү баалар' }, 
    desc: { 
      ru: 'Никаких скрытых платежей и дополнительных сборов. Цена фиксируется в договоре. Платите поэтапно: 50% предоплата, 50% после сдачи. Всё прозрачно.', 
      en: 'No hidden fees or extra charges. The price is fixed in the contract. Pay in stages: 50% prepayment, 50% after delivery. Everything is transparent.', 
      ky: 'Жашырылган төлөмдөр же кошумча акы жок. Баа келишимде бекитилет. Этап-этабы менен төлөңүз: 50% алдын ала, 50% тапшыруудан кийин. Баары ачык-айкын.' 
    } 
  },
  { 
    icon: <FaLightbulb />, 
    title: { ru: 'Индивидуальный подход', en: 'Individual Approach', ky: 'Жеке мамиле' }, 
    desc: { 
      ru: 'Не используем шаблоны. Каждый проект разрабатывается с нуля под ваш бренд, целевую аудиторию и бизнес-цели. Ваш сайт будет уникальным и запоминающимся.', 
      en: 'No templates. Every project is developed from scratch for your brand, target audience and business goals. Your website will be unique and memorable.', 
      ky: 'Шаблондорду колдонбойбуз. Ар бир долбоор сиздин брендиңиз, максаттуу аудиторияңыз жана бизнес максаттарыңыз үчүн нөлдөн баштап иштелип чыгат. Сайт уникалдуу жана эсте калтырган болот.' 
    } 
  },
];

function WhyUs() {
  const { lang, t } = useContext(LangContext);
  return (
    <section className="why-section section-padding" id="whyus">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <div className="section-label">{t.sectionWhy}</div>
          <h2 className="section-title">{t.sectionWhyTitle}</h2>
          <p className="section-subtitle">{t.sectionWhySub}</p>
        </div>
        <Row className="g-4">
          {reasons.map((r, i) => (
            <Col lg={3} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="why-card">
                <div className="why-icon">{r.icon}</div>
                <h4 className="why-title">{r.title[lang]}</h4>
                <p className="why-desc">{r.desc[lang]}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WhyUs;
