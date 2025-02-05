import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Thêm dòng này
import App from './App.jsx';
import Demo from './Demo.jsx';
import Header from './component/Header.jsx';
// import Hero from './component/Hero';
// import Menu from './component/Menu';

import './assets/css/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      {/* <Menu /> */}
      <App />
      <Demo />
      {/* <Hero /> */}
    </BrowserRouter>
  </StrictMode>,
);
