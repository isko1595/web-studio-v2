import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Home from './components/Home';
import Solutions from './pages/Solutions';
import Technologies from './pages/Technologies';
import SolutionDetail from './pages/SolutionDetail';
import AdminPanel from './components/AdminPanel';
import ServiceDetail from './components/ServiceDetail';
import Legal from './pages/Legal';
import './App.css';

export const ThemeContext = createContext();
export const LangContext = createContext();

const translations = {
  ru: {
    navHome: 'Главная', navSolutions: 'Решения', navServices: 'Услуги', navWhy: 'Почему мы', navPricing: 'Цены', navContacts: 'Контакты', navEmployees: 'Для сотрудников',
    heroBadge: '✨ Студия веб-разработки',
    heroTitle1: 'Превращаем идеи в ', heroTitle2: 'цифровую реальность',
    heroSubtitle: 'Мы решаем главную проблему предпринимателей — отсутствие качественного онлайн-присутствия. Создаем сайты и приложения, которые привлекают клиентов и увеличивают продажи 24/7.',
    btnContact: 'Связаться', btnServices: 'Наши услуги',
    sectionServices: 'Услуги', sectionServicesTitle: 'Что мы создаем', sectionServicesSub: 'От простых лендингов до сложных веб-приложений — под любую задачу бизнеса',
    sectionWhy: 'Почему мы', sectionWhyTitle: 'Почему выбирают Web.it', sectionWhySub: 'Более 50 успешных проектов и довольных клиентов',
    sectionPricing: 'Цены', sectionPricingTitle: 'Стоимость разработки', sectionPricingSub: 'Честные цены без скрытых платежей',
    sectionMap: 'Где мы находимся', sectionMapTitle: 'Наш офис', sectionMapSub: 'Приходите на встречу — обсудим ваш проект за чашкой кофе',
    sectionContact: 'Контакты', sectionContactTitle: 'Оставьте заявку', sectionContactSub: 'Расскажите о вашем проекте, и мы свяжемся с вами в течение 2 часов',
    formName: 'Ваше имя', formPhone: 'Телефон', formEmail: 'Email', formProjectType: 'Тип проекта',
    formMessage: 'Описание проекта', formSubmit: 'Отправить заявку', formSuccess: 'Заявка отправлена! Мы скоро свяжемся с вами.',
    footerDesc: 'Профессиональная студия веб-разработки в Оше. Создаем цифровые продукты, которые решают бизнес-задачи.',
    footerSections: 'Разделы', footerServices: 'Услуги', footerContacts: 'Контакты',
    workHours: 'Пн-Сб: 10:00 — 22:00',
    address: 'г. Ош, ул. Масалиева 38/2, ТЦ Рамазан',
    currency: 'сом',
    promoBox: 'Промокод на скидку 10%',
    promoCode: 'WEBIT10',
    quickStart: 'Быстрый старт',
    quickStartText: 'От идеи до первого макета — всего 3 дня. Пишите прямо сейчас!',
    adminTitle: 'Панель администратора',
    adminLogin: 'Вход для администратора',
    adminPassword: 'Пароль',
    adminEnter: 'Войти',
    adminWrong: 'Неверный пароль!',
    adminRequests: 'Заявки клиентов',
    adminEmployees: 'Сотрудники в офисе',
    adminStats: 'Статистика',
    totalRequests: 'Всего заявок',
    totalEmployees: 'Сотрудников',
    weekRequests: 'За 7 дней',
    noRequests: 'Пока нет заявок',
    noEmployees: 'Нет сотрудников в офисе',
    employeeName: 'Имя', employeePhone: 'Телефон', employeeTime: 'Время входа',
    requestNumber: '№', requestDate: 'Дата', requestName: 'Имя', requestPhone: 'Телефон',
    requestEmail: 'Email', requestType: 'Тип', requestPromo: 'Промокод', requestMessage: 'Сообщение',
    delete: 'Удалить', refresh: 'Обновить',
    privacy: 'Политика конфиденциальности', terms: 'Условия использования',
    rights: 'Все права защищены',
    serviceLanding: 'Лендинг', serviceCorporate: 'Корпоративный сайт', serviceShop: 'Интернет-магазин',
    serviceWebapp: 'Веб-приложение', serviceMobile: 'Мобильное приложение', serviceOther: 'Другое',
    back: '← Назад',
    openMap: 'Открыть на карте →',
    namePlaceholder: 'Имя',
    phonePlaceholder: '+996 556 991 154',
    emailPlaceholder: 'example@mail.com',
    messagePlaceholder: 'Расскажите о ваших задачах, сроках и пожеланиях...',
    serviceDetailBtn: 'Заказать эту услугу',
  },
  en: {
    navHome: 'Home', navSolutions: 'Solutions', navServices: 'Services', navWhy: 'Why Us', navPricing: 'Pricing', navContacts: 'Contacts', navEmployees: 'Staff',
    heroBadge: '✨ Web Development Studio',
    heroTitle1: 'Turning ideas into ', heroTitle2: 'digital reality',
    heroSubtitle: "We solve the main problem of entrepreneurs — the lack of quality online presence. We create websites and apps that attract customers and increase sales 24/7.",
    btnContact: 'Contact Us', btnServices: 'Our Services',
    sectionServices: 'Services', sectionServicesTitle: 'What We Create', sectionServicesSub: 'From simple landing pages to complex web applications for any business need',
    sectionWhy: 'Why Us', sectionWhyTitle: 'Why Choose Web.it', sectionWhySub: 'Over 50 successful projects and satisfied clients',
    sectionPricing: 'Pricing', sectionPricingTitle: 'Development Cost', sectionPricingSub: 'Honest prices with no hidden fees',
    sectionMap: 'Where We Are', sectionMapTitle: 'Our Office', sectionMapSub: "Come for a meeting — let's discuss your project over a cup of coffee",
    sectionContact: 'Contacts', sectionContactTitle: 'Leave a Request', sectionContactSub: 'Tell us about your project and we will contact you within 2 hours',
    formName: 'Your Name', formPhone: 'Phone', formEmail: 'Email', formProjectType: 'Project Type',
    formMessage: 'Project Description', formSubmit: 'Send Request', formSuccess: 'Request sent! We will contact you soon.',
    footerDesc: 'Professional web development studio in Osh. We create digital products that solve business problems.',
    footerSections: 'Sections', footerServices: 'Services', footerContacts: 'Contacts',
    workHours: 'Mon-Sat: 10:00 — 22:00',
    address: 'Osh, Masalieva 38/2, Ramazan Mall',
    currency: 'KGS',
    promoBox: '10% Discount Promo Code',
    promoCode: 'WEBIT10',
    quickStart: 'Quick Start',
    quickStartText: 'From idea to first mockup in just 3 days. Write to us now!',
    adminTitle: 'Admin Panel',
    adminLogin: 'Admin Login',
    adminPassword: 'Password',
    adminEnter: 'Login',
    adminWrong: 'Wrong password!',
    adminRequests: 'Client Requests',
    adminEmployees: 'Employees in Office',
    adminStats: 'Statistics',
    totalRequests: 'Total Requests',
    totalEmployees: 'Employees',
    weekRequests: 'Last 7 Days',
    noRequests: 'No requests yet',
    noEmployees: 'No employees in office',
    employeeName: 'Name', employeePhone: 'Phone', employeeTime: 'Check-in Time',
    requestNumber: '#', requestDate: 'Date', requestName: 'Name', requestPhone: 'Phone',
    requestEmail: 'Email', requestType: 'Type', requestPromo: 'Promo', requestMessage: 'Message',
    delete: 'Delete', refresh: 'Refresh',
    privacy: 'Privacy Policy', terms: 'Terms of Use',
    rights: 'All rights reserved',
    serviceLanding: 'Landing Page', serviceCorporate: 'Corporate Website', serviceShop: 'Online Store',
    serviceWebapp: 'Web Application', serviceMobile: 'Mobile App', serviceOther: 'Other',
    back: '← Back',
    openMap: 'Open Map →',
    namePlaceholder: 'Name',
    phonePlaceholder: '+996 556 991 154',
    emailPlaceholder: 'example@mail.com',
    messagePlaceholder: 'Tell us about your tasks, deadlines and wishes...',
    serviceDetailBtn: 'Order This Service',
  },
  ky: {
    navHome: 'Башкы бет', navSolutions: 'Чечимдер', navServices: 'Кызматтар', navWhy: 'Эмне үчүн биз', navPricing: 'Баалар', navContacts: 'Байланыштар', navEmployees: 'Кызматкерлер үчүн',
    heroBadge: '✨ Веб-студия',
    heroTitle1: 'Идеяларды ', heroTitle2: 'санарип чындыкка айландырабыз',
    heroSubtitle: 'Биз ишкерлердин негизги көйгөйүн чечебиз — сапаттуу онлайн- presence жоктугун. Кардарларды тарткан жана сатууларды 24/7 көбөйткөн сайттарды жана колдонмолорду жасайбыз.',
    btnContact: 'Байланышуу', btnServices: 'Биздин кызматтар',
    sectionServices: 'Кызматтар', sectionServicesTitle: 'Биз эмне жасайбыз', sectionServicesSub: 'Жөнөкөй лендингден татаал веб-колдонмолорго чейин — ар кандай бизнес максаттары үчүн',
    sectionWhy: 'Эмне үчүн биз', sectionWhyTitle: 'Эмне үчүн Web.it тандашат', sectionWhySub: '50ден ашык ийгиликтүү долбоорлор жана ыраазы кардарлар',
    sectionPricing: 'Баалар', sectionPricingTitle: 'Иштеп чыгуунун баасы', sectionPricingSub: 'Жашырылган төлөмдөрсүз чындык баалар',
    sectionMap: 'Биз кайда жайгашканбыз', sectionMapTitle: 'Биздин офис', sectionMapSub: 'Жолугушууга келиңиз — кофе ичип долбооруңузду талкуулайлы',
    sectionContact: 'Байланыштар', sectionContactTitle: 'Арыз калтырыңыз', sectionContactSub: 'Долбооруңуз жөнүндө айтып бериңиз, биз 2 саат ичинде байланышабыз',
    formName: 'Атыңыз', formPhone: 'Телефон', formEmail: 'Email', formProjectType: 'Долбоордун түрү',
    formMessage: 'Долбоордун сүрөттөмөсү', formSubmit: 'Арыз жөнөтүү', formSuccess: 'Арыз жөнөтүлдү! Биз жакын арада байланышабыз.',
    footerDesc: 'Ош шаарындагы кесипкөй веб-иштеп чыгуу студиясы. Бизнес көйгөйлөрүн чечкен санарип продуктыларды жасайбыз.',
    footerSections: 'Бөлүмдөр', footerServices: 'Кызматтар', footerContacts: 'Байланыштар',
    workHours: 'Дш-Иб: 10:00 — 22:00',
    address: 'Ош ш., Масалиева 38/2, Рамазан соода борбору',
    currency: 'сом',
    promoBox: '10% арзандатуу промокоду',
    promoCode: 'WEBIT10',
    quickStart: 'Тез баштоо',
    quickStartText: 'Идеядан биринчи макетке чейин — болгону 3 күн. Азыр жазгыла!',
    adminTitle: 'Админ панели',
    adminLogin: 'Админ үчүн кирүү',
    adminPassword: 'Сырсөз',
    adminEnter: 'Кирүү',
    adminWrong: 'Туура эмес сырсөз!',
    adminRequests: 'Кардарлардын арыздары',
    adminEmployees: 'Офистеги кызматкерлер',
    adminStats: 'Статистика',
    totalRequests: 'Бардык арыздар',
    totalEmployees: 'Кызматкерлер',
    weekRequests: 'Акыркы 7 күн',
    noRequests: 'Азырынча арыз жок',
    noEmployees: 'Офисте кызматкерлер жок',
    employeeName: 'Аты', employeePhone: 'Телефон', employeeTime: 'Кирүү убактысы',
    requestNumber: '№', requestDate: 'Дата', requestName: 'Аты', requestPhone: 'Телефон',
    requestEmail: 'Email', requestType: 'Түрү', requestPromo: 'Промо', requestMessage: 'Билдирүү',
    delete: 'Өчүрүү', refresh: 'Жаңылоо',
    privacy: 'Купуялык саясаты', terms: 'Колдонуу шарттары',
    rights: 'Бардык укуктар корголгон',
    serviceLanding: 'Лендинг', serviceCorporate: 'Корпоративдик сайт', serviceShop: 'Онлайн дүкөн',
    serviceWebapp: 'Веб-колдонмо', serviceMobile: 'Мобилдик колдонмо', serviceOther: 'Башка',
    back: '← Артка',
    openMap: 'Картаны ачуу →',
    namePlaceholder: 'Аты',
    phonePlaceholder: '+996 556 991 154',
    emailPlaceholder: 'example@mail.com',
    messagePlaceholder: 'Тапшырмаларыңыз, мөөнөттөрүңүз жана каалооларыңыз жөнүндө айтып бериңиз...',
    serviceDetailBtn: 'Бул кызматты заказ кылуу',
  }
};

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('webit-theme') === 'dark');
  const [lang, setLang] = useState(() => localStorage.getItem('webit-lang') || 'ru');

  useEffect(() => {
    localStorage.setItem('webit-theme', darkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('webit-lang', lang);
  }, [lang]);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80, easing: 'ease-out-cubic' });
  }, []);

  const t = translations[lang] || translations.ru;

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <LangContext.Provider value={{ lang, setLang, t }}>
        <Router>
          <div className={`app ${darkMode ? 'dark' : ''}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:id" element={<SolutionDetail />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/employees" element={<AdminPanel employeeOnly />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/privacy" element={<Legal type="privacy" />} />
              <Route path="/terms" element={<Legal type="terms" />} />
            </Routes>
          </div>
        </Router>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
