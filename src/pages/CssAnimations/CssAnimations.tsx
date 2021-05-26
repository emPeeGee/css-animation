import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { Basic } from './Basic/Basic';
import { Buttons } from './Buttons/Buttons';
import { Vodafone } from './Vodafone/Vodafone';
import { Images } from './Images/Images';
import { Menus } from './Menus/Menus';
import { Cards } from './Cards/Cards';

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
                <Link to={`${url}/basic`}>Basic transform and transitions</Link>
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
              <li>
                <Link to={`${url}/menus`}>Menus</Link>
              </li>
              <li>
                <Link to={`${url}/cards`}>Cards</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path={`${path}/basic`} component={Basic} />
            <Route path={`${path}/buttons`} component={Buttons} />
            <Route path={`${path}/vodafone`} component={Vodafone} />
            <Route path={`${path}/images`} component={Images} />
            <Route path={`${path}/menus`} component={Menus} />
            <Route path={`${path}/cards`} component={Cards} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default CssAnimations;
