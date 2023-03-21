import { Component, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './components/about/About';
import Layout from './components/layout/Layout';
import Main from './components/main/Main';
import NotFound from './components/not-found/NotFound';

import './App.css';

class App extends Component {
  render(): ReactNode {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
