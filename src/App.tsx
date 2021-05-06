import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { TransitionOptions } from './components/ChapterOne/TransitionOptions/TransitionOptions';
import { Transform } from './components/ChapterOne/Transform/Transform';
import { WhatIsTransition } from './components/ChapterOne/WhatIsTransition/WhatIsTransition';

import './App.scss';
import { ChapterOne } from './components/ChapterOne/ChapterOne';
import { Buttons } from './components/Buttons/Buttons';
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
            </ul>
          </nav>

          <Switch>
            <Route path="/buttons">
              <Buttons />
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
