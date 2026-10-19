import React, { useState } from 'react';
import './About.css';

const reviewsData = [
  {
    id: 1,
    name: 'Анна Смирнова',
    role: 'HR-директор, IT-компания',
    text: 'Платформа помогла нам быстро найти лектора по Python для корпоративного обучения. Удобный поиск и понятные тарифы!',
    rating: 5
  },
  {
    id: 2,
    name: 'Михаил Иванов',
    role: 'Студент МФТИ',
    text: 'Занимался с Дмитрием Сергеевичем. Очень доступно объясняет сложные алгоритмы. Заявку оставил прямо на сайте — перезвонили через 15 минут.',
    rating: 5
  },
  {
    id: 3,
    name: 'Елена Петрова',
    role: 'Организатор конференций',
    text: 'Сотрудничаем с платформой уже год. Всегда находим спикеров на любые темы: от экономики до дизайна.',
    rating: 5
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const currentReview = reviewsData[currentIndex];

  return (
    <section className="reviews-section" id="reviews">
      <h2>Отзывы о платформе</h2>
      
      <div className="reviews-carousel">
        <button className="carousel-btn prev" onClick={prevReview} aria-label="Предыдущий отзыв">
          ←
        </button>

        <div className="review-card">
          <div className="review-stars">
            {'★'.repeat(currentReview.rating)}
          </div>
          <p className="review-text">«{currentReview.text}»</p>
          <div className="review-author">
            <strong>{currentReview.name}</strong>
            <span>{currentReview.role}</span>
          </div>
        </div>

        <button className="carousel-btn next" onClick={nextReview} aria-label="Следующий отзыв">
          →
        </button>
      </div>

      <div className="carousel-dots">
        {reviewsData.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

const About = () => {
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
            <div className="stat">
              <span className="stat-value">120+</span>
              <span className="stat-label">лекторов</span>
            </div>
            <div className="stat">
              <span className="stat-value">45</span>
              <span className="stat-label">компаний-партнёров</span>
            </div>
            <div className="stat">
              <span className="stat-value">3 500+</span>
              <span className="stat-label">проведённых лекций</span>
            </div>
          </div>

          <button className="cta-btn">Найти лектора</button>
        </div>
      </section>

      <Reviews />

      <section className="platform-info" id="about">
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
