import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

// import './JsAnimations.scss';

function JsAnimations() {
  const { path, url } = useRouteMatch();

  return (
    <div className="JsAnimations">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={`${url}/`}>Mock link</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path={`${path}/`}>
              <h1>Js Animations</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default JsAnimations;
