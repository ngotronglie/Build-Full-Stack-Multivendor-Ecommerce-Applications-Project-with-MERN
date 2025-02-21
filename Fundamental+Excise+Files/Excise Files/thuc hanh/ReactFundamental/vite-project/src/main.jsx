import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Thêm dòng này
import App from './App.jsx';
import Demo from './Demo.jsx';
import Header from './component/Header.jsx';
// import Hero from './component/Hero';
// import Menu from './component/Menu';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/style.css';
import 'milligram/dist/milligram.css';
// import Alert from './component/Alert';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      {/* <Menu /> */}
      <App />
      {/* <Alert />  */}
      <Demo />
      {/* <Hero /> */}
    </BrowserRouter>
  </StrictMode>,
);