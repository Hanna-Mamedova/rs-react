import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import App from './App';
import Main from './components/main/Main';
import About from './components/about/About';
import NotFound from './components/not-found/NotFound';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
