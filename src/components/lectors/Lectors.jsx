// src/components/lectors/Lectors.jsx
import React, { useState } from 'react';
import { lecturers } from '../../data/lecturers';
import './Lectors.css';

/* ---------- Детальная карточка лектора ---------- */
const LecturerDetail = ({ lecturer, onBack }) => {
  return (
    <div className="lecturer-detail">
      <button className="back-btn" onClick={onBack}>← Назад к списку</button>

      <article className="lecturer-card">
        <div className="lecturer-photo">
          <div className="photo-placeholder">
            {lecturer.photo ? (
              <img src={lecturer.photo} alt={lecturer.name} className="lecturer-img" />
            ) : (
              <>Место для фото преподавателя<br />(ссылка на YandexCloud)</>
            )}
          </div>
        </div>

        <div className="lecturer-info">
          <h3>{lecturer.name}</h3>
          <ul className="lecturer-meta">
            <li><strong>Образование:</strong> {lecturer.education}</li>
            <li><strong>Стаж:</strong> {lecturer.experience}</li>
            <li><strong>Учёная степень:</strong> {lecturer.degree}</li>
          </ul>
        </div>
      </article>

      {lecturer.disciplines.length > 0 && (
        <section className="lecturer-section">
          <h3>Преподаваемые дисциплины</h3>
          <div className="disciplines-grid">
            {lecturer.disciplines.map((d, i) => (
              <div key={i} className="discipline-card">
                <h4>{d.title}</h4>
                <p className="discipline-desc">{d.description}</p>
                <ul className="discipline-topics">
                  {d.topics.map((t, j) => <li key={j}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {lecturer.tariffs.length > 0 && (
        <section className="lecturer-section">
          <h3>Тарифы</h3>
          <div className="tariffs-grid">
            {lecturer.tariffs.map((t, i) => (
              <div key={i} className="tariff-card">
                <span className="tariff-name">{t.name}</span>
                <span className="tariff-price">{t.price}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

/* ---------- Карточка лектора в списке ---------- */
const LecturerCard = ({ lecturer, onClick }) => {
  return (
    <div className="lecturer-list-card" onClick={onClick}>
      <div className="list-photo">
        {lecturer.photo ? (
          <img src={lecturer.photo} alt={lecturer.name} className="list-img" />
        ) : (
          <div className="list-photo-placeholder">Фото</div>
        )}
      </div>
      <div className="list-info">
        <h3>{lecturer.name}</h3>
        <p className="list-role">{lecturer.shortRole}</p>
        <button className="more-btn" type="button">Подробнее →</button>
      </div>
    </div>
  );
};

/* ---------- Главный компонент ---------- */
const Lectors = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selected = lecturers.find(l => l.id === selectedId);

  return (
    <div className="lectors-container">
      <h2>Лекторы</h2>

      {selected ? (
        <LecturerDetail lecturer={selected} onBack={() => setSelectedId(null)} />
      ) : (
        <div className="lecturers-list">
          {lecturers.map(l => (
            <LecturerCard
              key={l.id}
              lecturer={l}
              onClick={() => setSelectedId(l.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Lectors;