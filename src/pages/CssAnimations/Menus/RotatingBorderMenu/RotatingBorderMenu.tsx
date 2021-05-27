import React from 'react';

import './RotatingBorderMenu.scss';

export function RotatingBorderMenu() {
  return (
    <div id="RotatingBorderMenu" className="RotatingBorderMenu">
      <div className="container">
        <ul>
          <li>
            <a href="#RotatingBorderMenu">Home</a>
          </li>
          <li>
            <a href="#RotatingBorderMenu">About</a>
          </li>
          <li>
            <a href="#RotatingBorderMenu">Services</a>
          </li>
          <li>
            <a href="#RotatingBorderMenu">Portfolio</a>
          </li>
          <li>
            <a href="#RotatingBorderMenu">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
