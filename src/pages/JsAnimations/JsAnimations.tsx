import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { GsapAnimations } from './GsapAnimations/GsapAnimations';
import { VanillaAnimations } from './VanillaAnimations/VanillaAnimations';

// import './JsAnimations.scss';

export function JsAnimations() {
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
              <li>
                <Link to={`${url}/vanilla`}>Vanilla JS Animations</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path={`${path}/gsap`} component={GsapAnimations} />
            <Route path={`${path}/vanilla`} component={VanillaAnimations} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
