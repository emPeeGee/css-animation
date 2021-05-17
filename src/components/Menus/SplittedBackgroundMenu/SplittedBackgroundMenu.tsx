import React from 'react';

import './SplittedBackgroundMenu.scss';

export function SplittedBackgroundMenu() {
  return (
    <div id="SplittedBackgroundMenu" className="SplittedBackgroundMenu">
      <div className="container">
        <ul>
          <li>
            <a href="#SplittedBackgroundMenu">
              Home
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#SplittedBackgroundMenu">
              About
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#SplittedBackgroundMenu">
              Services
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#SplittedBackgroundMenu">
              Portfolio
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#SplittedBackgroundMenu">
              Contact
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
