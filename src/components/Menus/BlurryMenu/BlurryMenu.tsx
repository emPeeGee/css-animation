import React from 'react';

import './BlurryMenu.scss';

export function BlurryMenu() {
  return (
    <div id="BlurryMenu" className="BlurryMenu">
      <div className="container">
        <ul>
          <li>
            <a href="#BlurryMenu">Home</a>
          </li>
          <li>
            <a href="#BlurryMenu">About</a>
          </li>
          <li>
            <a href="#BlurryMenu">Services</a>
          </li>
          <li>
            <a href="#BlurryMenu">Portfolio</a>
          </li>
          <li>
            <a href="#BlurryMenu">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
