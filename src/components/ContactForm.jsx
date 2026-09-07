import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { LangContext } from '../App';

function ContactForm() {
  const { lang, t } = useContext(LangContext);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', projectType: 'landing', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [savedRequests, setSavedRequests] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('webStudioRequests');
    if (saved) setSavedRequests(JSON.parse(saved));
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = { ...formData, id: Date.now(), date: new Date().toLocaleString(lang === 'ru' ? 'ru-RU' : lang === 'en' ? 'en-US' : 'ky-KG') };
    const updated = [...savedRequests, newRequest];
    localStorage.setItem('webStudioRequests', JSON.stringify(updated));
    setSavedRequests(updated);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', projectType: 'landing', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const projectTypes = [
    { value: 'landing', label: t.serviceLanding },
    { value: 'corporate', label: t.serviceCorporate },
    { value: 'shop', label: t.serviceShop },
    { value: 'webapp', label: t.serviceWebapp },
    { value: 'mobile', label: t.serviceMobile },
    { value: 'other', label: t.serviceOther }
  ];

  return (
    <section className="contact-section section-padding" id="contacts">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <div className="section-label">{t.sectionContact}</div>
          <h2 className="section-title">{t.sectionContactTitle}</h2>
          <p className="section-subtitle">{t.sectionContactSub}</p>
        </div>

        <Row className="g-5 align-items-start">
          <Col lg={7} data-aos="fade-right">
            <div className="contact-form-wrapper">
              {submitted && (
                <Alert variant="success" className="mb-4" style={{borderRadius: '12px'}}>
                  <strong>✅ {t.formSuccess}</strong>
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{fontWeight: 600, color: 'var(--text-main)'}}>{t.formName}</Form.Label>
                      <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} className="form-control-custom" placeholder={t.namePlaceholder} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{fontWeight: 600, color: 'var(--text-main)'}}>{t.formPhone}</Form.Label>
                      <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control-custom" placeholder={t.phonePlaceholder} required />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label style={{fontWeight: 600, color: 'var(--text-main)'}}>{t.formEmail}</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} className="form-control-custom" placeholder={t.emailPlaceholder} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{fontWeight: 600, color: 'var(--text-main)'}}>{t.formProjectType}</Form.Label>
                  <Form.Select name="projectType" value={formData.projectType} onChange={handleChange} className="form-control-custom">
                    {projectTypes.map(type => <option key={type.value} value={type.value}>{type.label}</option>)}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={{fontWeight: 600, color: 'var(--text-main)'}}>{t.formMessage}</Form.Label>
                  <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} className="form-control-custom" placeholder={t.messagePlaceholder} />
                </Form.Group>

                <button type="submit" className="btn-submit">
                  <FaPaperPlane style={{marginRight: '8px'}} /> {t.formSubmit}
                </button>
              </Form>
            </div>
          </Col>

          <Col lg={5} data-aos="fade-left">
            <div className="ps-lg-4">
              <h3 style={{fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--text-main)'}}>
                {lang === 'ru' ? 'Свяжитесь с нами' : lang === 'en' ? 'Contact Us' : 'Биз менен байланышыңыз'}
              </h3>

              <div className="contact-info-item">
                <div className="contact-icon-box"><FaWhatsapp /></div>
                <div>
                  <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>WhatsApp</div>
                  <a href="https://api.whatsapp.com/send/?phone=996556991154" target="_blank" rel="noopener noreferrer" className="contact-link">+996 556 991 154</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box"><FaInstagram /></div>
                <div>
                  <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>Instagram</div>
                  <a href="https://instagram.com/Web_itt" target="_blank" rel="noopener noreferrer" className="contact-link">@Web_itt</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box"><FaPhone /></div>
                <div>
                  <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>{lang === 'ru' ? 'Телефон' : lang === 'en' ? 'Phone' : 'Телефон'}</div>
                  <a href="tel:+996556991154" className="contact-link">+996 556 991 154</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box"><FaMapMarkerAlt /></div>
                <div>
                  <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>{lang === 'ru' ? 'Адрес' : lang === 'en' ? 'Address' : 'Дарек'}</div>
                  <span style={{fontWeight: 600, color: 'var(--text-main)'}}>{t.address}</span>
                </div>
              </div>

              <div className="mt-4 p-3" style={{background: 'var(--light)', borderRadius: '16px', border: '1px solid var(--border-color)'}}>
                <h5 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-main)'}}>💡 {t.quickStart}</h5>
                <p style={{fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0}}>{t.quickStartText}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;
