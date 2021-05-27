import React from 'react';

import './BackgroundBorderMenu.scss';

export function BackgroundBorderMenu() {
  return (
    <div id="BackgroundBorderMenu" className="BackgroundBorderMenu">
      <div className="container">
        <ul>
          <li>
            <a href="#BackgroundBorderMenu">Home</a>
          </li>
          <li>
            <a href="#BackgroundBorderMenu">About</a>
          </li>
          <li>
            <a href="#BackgroundBorderMenu">Services</a>
          </li>
          <li>
            <a href="#BackgroundBorderMenu">Portfolio</a>
          </li>
          <li>
            <a href="#BackgroundBorderMenu">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
