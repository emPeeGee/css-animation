import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import CssAnimations from './pages/CssAnimations/CssAnimations';
import { Home } from './pages/Home/Home';
import JsAnimations from './pages/JsAnimations/JsAnimations';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/css">Css Animations</Link>
              </li>
              <li>
                <Link to="/js">Js Animations</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/css" component={CssAnimations} />
            <Route path="/js" component={JsAnimations} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
