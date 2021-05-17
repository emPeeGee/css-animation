import React from 'react';

import './TwoSpanMenu.scss';

export function TwoSpanMenu() {
  return (
    <div id="TwoSpanMenu" className="TwoSpanMenu">
      <div className="container">
        <ul>
          <li>
            <a href="#TwoSpanMenu">
              <span>Home</span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#TwoSpanMenu">
              <span>About</span>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#TwoSpanMenu">
              <span>Services</span>
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#TwoSpanMenu">
              <span>Portfolio</span>
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#TwoSpanMenu">
              <span>Contact</span>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
