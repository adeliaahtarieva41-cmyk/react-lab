import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { value: '120+', label: 'лекторов' },
    { value: '45', label: 'компаний-партнёров' },
    { value: '3 500+', label: 'проведённых лекций' }
  ];

  return (
    <div className="about-container">
      <section className="lectors-hero">
        <div className="hero-image">
          <div className="image-placeholder">
            <img
              src="/photo1.jpg"
              alt="Преподаватель в аудитории"
              className="hero-img"
            />
          </div>
        </div>

        <div className="hero-content">
          <h1>Наши лекторы — признанные специалисты в своих областях</h1>
          <p>
            Готовые делиться опытом и знаниями. Мы соединяем компании,
            образовательные учреждения и НКО с лучшими экспертами страны.
          </p>

          <div className="hero-stats">
            {stats.map((s, i) => (
              <div key={i} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <button className="cta-btn">Найти лектора</button>
        </div>
      </section>

      <section className="platform-info">
        <h2>О нашей платформе</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Единая площадка</h3>
            <p>
              Наша учебная платформа соединяет компании, образовательные
              учреждения и НКО с профессиональными лекторами, спикерами
              и тренерами.
            </p>
          </div>
          <div className="info-card">
            <h3>Простой подбор</h3>
            <p>
              Мы упрощаем процесс подбора, бронирования и организации лекций,
              помогая находить экспертов быстро и удобно.
            </p>
          </div>
          <div className="info-card">
            <h3>Вдохновляющие спикеры</h3>
            <p>
              Наши лекторы не просто делятся знаниями — они вдохновляют
              аудиторию и помогают раскрыть потенциал каждого слушателя.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;