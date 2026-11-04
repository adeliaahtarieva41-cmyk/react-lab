import React, { useReducer, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { lecturers } from '../data/lecturers';
import '../components/lectors/Lectors.css';

const initialState = {
  price: 'all',        
  experience: 'all',  
};

function filtersReducer(state, action) {
  switch (action.type) {
    case 'FILTER_BY_PRICE':
      return { ...state, price: action.payload };
    case 'FILTER_BY_EXPERIENCE':
      return { ...state, experience: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const parsePrice = (str) => {
  if (!str) return Infinity;
  const digits = str.replace(/[^\d]/g, '');
  return digits ? parseInt(digits, 10) : Infinity;
};

const getMinPrice = (lecturer) =>
  Math.min(...lecturer.tariffs.map((t) => parsePrice(t.price)));

const getExperience = (lecturer) => {
  const digits = String(lecturer.experience).replace(/[^\d]/g, '');
  return digits ? parseInt(digits, 10) : 0;
};

const applyFilters = (list, { price, experience }) => {
  return list.filter((lecturer) => {
    if (price !== 'all') {
      const p = getMinPrice(lecturer);
      if (price === 'low' && !(p < 2500)) return false;
      if (price === 'mid' && !(p >= 2500 && p <= 2800)) return false;
      if (price === 'high' && !(p > 2800)) return false;
    }
    if (experience !== 'all') {
      const exp = getExperience(lecturer);
      if (experience === 'lt5' && !(exp < 5)) return false;
      if (experience === '5to10' && !(exp >= 5 && exp <= 10)) return false;
      if (experience === 'gt10' && !(exp > 10)) return false;
    }
    return true;
  });
};

const LecturersPage = () => {
  const [filters, dispatch] = useReducer(filtersReducer, initialState);
  
  const filteredLecturers = useMemo(
    () => applyFilters(lecturers, filters),
    [filters]
  );

  return (
    <div className="lectors-container">
      <h2>Лекторы</h2>

      <div className="filters-panel">
        <div className="filter-group">
          <label htmlFor="price-filter">Цена занятия:</label>
          <select
            id="price-filter"
            value={filters.price}
            onChange={(e) =>
              dispatch({ type: 'FILTER_BY_PRICE', payload: e.target.value })
            }
          >
            <option value="all">Все</option>
            <option value="low">до 2 500 ₽</option>
            <option value="mid">2 500 – 2 800 ₽</option>
            <option value="high">от 2 800 ₽</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="exp-filter">Стаж:</label>
          <select
            id="exp-filter"
            value={filters.experience}
            onChange={(e) =>
              dispatch({ type: 'FILTER_BY_EXPERIENCE', payload: e.target.value })
            }
          >
            <option value="all">Все</option>
            <option value="lt5">меньше 5 лет</option>
            <option value="5to10">5–10 лет</option>
            <option value="gt10">больше 10 лет</option>
          </select>
        </div>
        <button
          className="reset-btn"
          type="button"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Сбросить
        </button>
      </div>
      <p className="results-count">
        Найдено: {filteredLecturers.length} из {lecturers.length}
      </p>

      {filteredLecturers.length > 0 ? (
        <div className="lecturers-list">
          {filteredLecturers.map(l => {
            console.log("Рендер карточки: " + l.name);

            return (
              <Link 
                to={`/lecturers/${l.id}`} 
                key={l.id} 
                className="lecturer-list-card" 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="list-photo">
                  {l.photo ? (
                    <img src={l.photo} alt={l.name} className="list-img" />
                  ) : (
                    <div className="list-photo-placeholder">Фото</div>
                  )}
                </div>
                <div className="list-info">
                  <h3>{l.name}</h3>
                  <p className="list-role">{l.shortRole}</p>
                  <span className="more-btn">Подробнее →</span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="empty-state">
          По выбранным фильтрам лекторов не найдено. Попробуйте изменить условия.
        </p>
      )}

    </div>
  );
};

export default LecturersPage;