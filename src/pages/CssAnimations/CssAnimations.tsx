import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { ChapterOne } from '../../components/ChapterOne/ChapterOne';
import { Buttons } from '../../components/Buttons/Buttons';
import { Vodafone } from '../../components/Vodafone/Vodafone';
import { Images } from '../../components/Images/Images';

// import './CssAnimations.scss';

function CssAnimations() {
  const { path, url } = useRouteMatch();

  return (
    <div className="CssAnimations">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={`${url}/chapter-one`}>hapter One</Link>
              </li>
              <li>
                <Link to={`${url}/buttons`}>Buttons</Link>
              </li>
              <li>
                <Link to={`${url}/vodafone`}>Vodafone</Link>
              </li>
              <li>
                <Link to={`${url}/images`}>Images</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path={`${path}/chapter-one`}>
              <ChapterOne />
            </Route>
            <Route path={`${path}/buttons`}>
              <Buttons />
            </Route>
            <Route path={`${path}/vodafone`}>
              <Vodafone />
            </Route>
            <Route path={`${path}/images`}>
              <Images />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default CssAnimations;
