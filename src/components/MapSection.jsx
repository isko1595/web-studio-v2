import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { LangContext } from '../App';

function MapSection() {
  const { lang, t } = useContext(LangContext);

  // Способ 1: Ссылка с маркером на основе ваших координат (40.53877, 72.80346)
  const mapIframeUrl = "https://www.openstreetmap.org/export/embed?bbox=72.80000746250154%2C40.537396101891645%2C72.80690610408784%2C40.540147926351146&amp;layer=mapnik";
  const bigMapUrl = "https://www.openstreetmap.org/#map=18/40.538772/72.803457";

  /* 
  // Способ 2: Использование Яндекс Карт (для СНГ часто выглядит детальнее и привычнее)
  const mapIframeUrl = "https://yandex.ru";
  const bigMapUrl = "https://yandex.ru";
  */

  return (
    <section className="section-padding" id="map" style={{background: 'var(--white)'}}>
      <Container>
        <div className="section-header" data-aos="fade-up">
          <div className="section-label">{t.sectionMap}</div>
          <h2 className="section-title">{t.sectionMapTitle}</h2>
          <p className="section-subtitle">{t.sectionMapSub}</p>
        </div>

        <Row className="g-4 align-items-stretch">
          <Col lg={8} data-aos="fade-right">
            <div className="map-iframe-wrapper" style={{ height: '100%', minHeight: '400px' }}>
              <iframe
                src={mapIframeUrl}
                allowFullScreen
                loading="lazy"
                title="ТЦ Рамазан, Ош"
                style={{ border: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </Col>

          <Col lg={4} data-aos="fade-left">
            <div style={{background: 'var(--light)', borderRadius: '24px', padding: '2.5rem', height: '100%'}}>
              <h3 style={{fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.4rem', color: 'var(--text-main)'}}>
                {t.footerContacts}
              </h3>

              <div className="contact-info-item">
                <div className="contact-icon-box"><FaMapMarkerAlt /></div>
                <div>
                  <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>{t.footerContacts}</div>
                  <span style={{fontWeight: 600, color: 'var(--text-main)'}}>{t.address}</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box"><FaClock /></div>
                <div>
                  <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>
                    {lang === 'ru' ? 'Режим работы' : lang === 'en' ? 'Working hours' : 'Иш убактысы'}
                  </div>
                  <span style={{fontWeight: 600, color: 'var(--text-main)'}}>{t.workHours}</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box"><FaPhone /></div>
                <div>
                  <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>Телефон</div>
                  <a href="tel:+996556991154" className="contact-link">+996 556 991 154</a>
                </div>
              </div>

              <div style={{marginTop: '2rem', padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '16px', textAlign: 'center', border: '1px solid var(--border-color)'}}>
                <div style={{fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem'}}>
                  {lang === 'ru' ? 'Хотите посмотреть на большой карте?' : lang === 'en' ? 'Want to see on a bigger map?' : 'Чоң картада көргүңүз келеби?'}
                </div>
                <a
                  href={bigMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color: 'var(--primary)', fontWeight: 700, textDecoration: 'none'}}
                >
                  {t.openMap}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MapSection;
