# LectorPro — Учебная платформа

Веб-приложение образовательной платформы, которое соединяет компании, образовательные учреждения и НКО с профессиональными лекторами, спикерами и тренерами. Проект реализован в рамках учебной работы.

## Стек и версии

- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **Vite**: ^5.0.0
- **Node.js**: ≥ 18.x
- **npm**: ≥ 9.x

Сторонние библиотеки не используются

## Команды для установки и запуска

```bash
npm install
npm run dev
npm run build
npm run preview

## Структура папок

react-lab/
   public/                      # Статика (изображения, favicon)
      favicon.svg
      photo1.jpg                # Hero-фото на главной
      lecturer1.jpg             # Фото первого лектора
      icl-logo.jpg              # Логотип ICL
      tatneft-logo.png          # Логотип Татнефть

   src/
      components/
            about/
                  About.jsx     # Главная страница (hero + "О нас")
                  About.css
            header/
                Header.jsx      # Шапка сайта с навигацией
                Header.css
            lectors/
                Lectors.jsx     # Список лекторов + детальная карточка
                Lectors.css
            partner/
                Partner.jsx     # Страница партнёров
                Partner.css
        data/
            lecturers.js        # Массив из 10 лекторов
        App.jsx                 # Корневой компонент + навигация через useState
        App.css
    index.css                   # Глобальные стили + градиентный фон
    main.jsx                    # Точка входа React
    index.html
    package.json
    vite.config.js
    .gitignore
    README.md

## Где лежат данные

src/data/lecturers.js — массив lecturers из 10 преподавателей.
src/components/partner/Partner.jsx — массив partners из 2 партнёров объявлен локально внутри компонента

## Где лежит роутинг

src/App.jsx