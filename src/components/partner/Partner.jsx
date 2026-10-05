import React from 'react';
import './Partner.css';

const Partner = () => {
  const partners = [
    {
      desc: 'ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, представляющая весь спектр ИТ-услуг: проектов, решений и продуктов. Компания была основана в 1991 году на базе завода ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС).',
      logo: '/icl-logo.jpg',
      url: 'https://icl.ru'
    },
    {
      desc: '«Татнефть» — одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и производство оборудования для нефтегазовой отрасли и блок сервисных структур.',
      logo: '/tatneft-logo.png',
      url: 'https://tatneft.ru'
    }
  ];

  return (
    <div className="partners-container">
      <h2>Партнеры</h2>
      <div className="partners-grid">
        {partners.map((p, idx) => (
          <div key={idx} className="partner-card">
            <div className="partner-header">
              <img src={p.logo} alt={p.name} className="partner-logo" />
              <a 
                href={p.url} 
                target="_blank" 
                rel="noreferrer" 
                className="partner-link"
                aria-label={`Перейти на сайт ${p.name}`}
              >
                ↗
              </a>
            </div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;