import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// component imports
import { AppHeader } from './components/AppHeader';
// page imports
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader />
      <main>
          <Switch>
            <Route exact path='/' render={() => <Home />} />
          </Switch>
      </main>
      <Home />
    </div>
  );
}

export default App;
