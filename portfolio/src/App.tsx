import React from 'react';
import logo from './logo.svg';
import './App.css';

// page imports
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
