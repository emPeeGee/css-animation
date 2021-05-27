import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { ScrollTriggerBasic } from './ScrollTriggerBasic/ScrollTriggerBasic';

// import './GsapAnimations.scss';

export function GsapAnimations() {
  const { path, url } = useRouteMatch();

  return (
    <div className="GsapAnimations">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={`${url}/scroll-trigger-basic`}>Scroll Trigger Basic Animation</Link>
              </li>
              <li>
                <Link to={`${url}/landing-page`}>Landing Page</Link>
              </li>
              <li>
                <Link to={`${url}/scroll-trigger-basic`}>Scroll Trigger Basic Animation</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path={`${path}/scroll-trigger-basic`} component={ScrollTriggerBasic} />
            <Route path={`${path}/landing-page`} component={ScrollTriggerBasic} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
