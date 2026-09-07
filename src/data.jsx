import React from 'react';
import { FaUniversity, FaCreditCard, FaMobileAlt, FaUsersCog, FaCoins, FaBitcoin, FaChartLine, FaHeart, FaExchangeAlt } from 'react-icons/fa';

export const solutions = [
  { id: 'cbs', icon: <FaUniversity />, title: {ru:'АБС',en:'CBS',ky:'АБС'}, desc: {ru:'Платформа для автоматизации банковских операций и ежедневных процессов.',en:'A platform for automating banking operations and daily processes.',ky:'Банк операцияларын жана күнүмдүк процесстерди автоматташтыруучу платформа.'} },
  { id: 'processing', icon: <FaCreditCard />, title: {ru:'Процессинг',en:'Processing',ky:'Процессинг'}, desc: {ru:'Система для стабильной и быстрой обработки карточных транзакций.',en:'A stable, high-performance system for card transaction processing.',ky:'Карталык транзакцияларды туруктуу жана тез иштетүүчү система.'} },
  { id: 'mobile-banking', icon: <FaMobileAlt />, title: {ru:'Мобильный интернет-банкинг',en:'Mobile Internet Banking',ky:'Мобилдик интернет-банкинг'}, desc: {ru:'Удобное приложение для управления финансами с современным UX.',en:'A convenient app for managing finances with modern UX.',ky:'Каржыны башкаруу үчүн заманбап UX менен ыңгайлуу колдонмо.'} },
  { id: 'crm', icon: <FaUsersCog />, title: {ru:'CRM',en:'CRM',ky:'CRM'}, desc: {ru:'Управление клиентами, продажами, задачами и внутренними процессами.',en:'Manage customers, sales, tasks and internal processes.',ky:'Кардарларды, сатууларды, тапшырмаларды жана ички процесстерди башкаруу.'} },
  { id: 'payments', icon: <FaCoins />, title: {ru:'Платежная система',en:'Payment System',ky:'Төлөм системасы'}, desc: {ru:'Безопасная инфраструктура для приема и обработки платежей.',en:'Secure infrastructure for accepting and processing payments.',ky:'Төлөмдөрдү кабыл алуу жана иштетүү үчүн коопсуз инфраструктура.'} },
  { id: 'crypto', icon: <FaBitcoin />, title: {ru:'Крипто-платформа',en:'Crypto Platform',ky:'Крипто-платформа'}, desc: {ru:'Решения для управления цифровыми активами и интеграций.',en:'Solutions for digital asset operations and integrations.',ky:'Санарип активдерди башкаруу жана интеграция үчүн чечимдер.'} },
  { id: 'scoring', icon: <FaChartLine />, title: {ru:'Скоринг-система',en:'Scoring System',ky:'Скоринг-система'}, desc: {ru:'Автоматизированная оценка кредитных рисков для принятия решений.',en:'Automated credit-risk assessment for faster decisions.',ky:'Чечим кабыл алуу үчүн кредиттик тобокелдиктерди автоматтык баалоо.'} },
  { id: 'loyalty', icon: <FaHeart />, title: {ru:'Система лояльности',en:'Loyalty System',ky:'Лоялдуулук системасы'}, desc: {ru:'Бонусные механики для повышения вовлеченности клиентов.',en:'Bonus mechanics that increase customer engagement.',ky:'Кардарлардын кызыгуусун арттыруучу бонус системалары.'} },
  { id: 'open-banking', icon: <FaExchangeAlt />, title: {ru:'Open Banking',en:'Open Banking',ky:'Open Banking'}, desc: {ru:'Безопасный обмен финансовыми данными и интеграция с сервисами.',en:'Secure financial data exchange and service integrations.',ky:'Финансылык маалыматтарды коопсуз алмашуу жана сервистерди интеграциялоо.'} },
];

export const technologies = [
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'MySQL', 'Kafka', 'Microservices'] },
  { title: 'Frontend', items: ['React', 'Vue.js', 'Nuxt', 'JavaScript', 'TypeScript', 'REST API'] },
  { title: 'Design', items: ['Figma', 'Prototype', 'UX Research', 'User Flow', 'Design System', 'A/B Test'] },
  { title: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'GitLab', 'Grafana', 'Terraform', 'Cloud'] },
  { title: 'QA', items: ['Test Planning', 'API Testing', 'Automation', 'Security Testing', 'Bug Tracking', 'Reporting'] },
  { title: 'Management', items: ['Jira', 'Confluence', 'Agile', 'Scrum', 'Product Vision', 'Stakeholder Management'] },
];

