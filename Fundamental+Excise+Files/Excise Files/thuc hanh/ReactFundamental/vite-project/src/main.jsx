import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Demo from './Demo.jsx'
import Header from './component/Header.jsx';
import Hero from './component/Hero';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Demo />
    <Hero />
  </StrictMode>,
)
