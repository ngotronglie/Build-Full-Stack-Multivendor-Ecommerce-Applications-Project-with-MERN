import React, {lazy , Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Toaster } from'react-hot-toast';

const App = lazy(()=> import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
    <App />
    <Toaster
  position="top-right"
  reverseOrder={false}
  gutter={8}
  toastOptions={{
    duration: 5000,
    style: {
      background: '#283046',
      color: '#fff',
    },
    success: {
      style: {
        background: '#00a86b',
        color: '#fff',
      },
    },
    error: {
      style: {
        background: '#ff5630',
        color: '#fff',
      },
    },
  }}
/>

    </Suspense>
  </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
