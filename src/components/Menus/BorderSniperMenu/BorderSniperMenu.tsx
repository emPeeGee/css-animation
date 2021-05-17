import React from 'react';

import './BorderSniperMenu.scss';

export function BorderSniperMenu() {
  return (
    <div id="BorderSniperMenu" className="BorderSniperMenu">
      <div className="container">
        <ul>
          <li>
            <a href="#BorderSniperMenu">
              Home
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#BorderSniperMenu">
              About
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#BorderSniperMenu">
              Services
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#BorderSniperMenu">
              Portfolio
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#BorderSniperMenu">
              Contact
              <span></span>
              <span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
