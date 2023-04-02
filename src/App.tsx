import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/about/About';
import Layout from './components/layout/Layout';
import Main from './pages/main/Main';
import Forms from './pages/forms/Forms';
import NotFound from './pages/not-found/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
