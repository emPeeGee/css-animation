import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { ChapterOne } from './components/ChapterOne/ChapterOne';
import { Buttons } from './components/Buttons/Buttons';
import { Vodafone } from './components/Vodafone/Vodafone';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Chapter One</Link>
              </li>
              <li>
                <Link to="/buttons">Buttons</Link>
              </li>
              <li>
                <Link to="/vodafone">Vodafone</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/buttons">
              <Buttons />
            </Route>
            <Route path="/vodafone">
              <Vodafone />
            </Route>
            <Route path="/">
              <ChapterOne />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
