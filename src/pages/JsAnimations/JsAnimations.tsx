import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import GsapAnimations from './GsapAnimations/GsapAnimations';

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
                <Link to={`${url}/gsap`}>GSAP Animations</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path={`${path}/gsap`} component={GsapAnimations} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default JsAnimations;
