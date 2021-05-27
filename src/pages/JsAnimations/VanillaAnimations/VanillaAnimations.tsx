import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { ScrollImages } from './ScrollImages/ScrollImages';

// import './VanillaAnimations.scss';

export function VanillaAnimations() {
  const { path, url } = useRouteMatch();

  return (
    <div className="VanillaAnimations">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={`${url}/scroll-images`}>Scroll Images with Animation</Link>
              </li>
              <li>
                <Link to={`${url}/scroll-images`}>Scroll Images with Animation</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path={`${path}/scroll-images`} component={ScrollImages} />
            <Route path={`${path}//scroll-images`} component={ScrollImages} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
