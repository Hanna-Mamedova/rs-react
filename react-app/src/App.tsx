// import { useState } from 'react';
import React from 'react';

import './App.css';

import Header from './components/header/Header';

function App({ children }) {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default App;
