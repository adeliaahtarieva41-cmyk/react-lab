import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import About from './components/about/About.jsx';
import Lectors from './components/lectors/Lectors.jsx';
import Partner from './components/partner/Partner.jsx';


function App() {
  const [currentPage, setCurrentPage] = useState('Главная');

  const renderPage = () => {
    switch (currentPage) {
      case 'Главная':
        return <About />;
      case 'Партнеры':
        return <Partner />;
      case 'Лекторы':
        return <Lectors />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
