import React from 'react';

import './ColorfulLayersMenu.scss';

export function ColorfulLayersMenu() {
  return (
    <div className="ColorfulLayersMenu">
      <div className="container">
        <ul>
          <li>
            <a href="#ColorfulLayersMenu" data-text="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#ColorfulLayersMenu" data-text="About">
              About
            </a>
          </li>
          <li>
            <a href="#ColorfulLayersMenu" data-text="Services">
              Services
            </a>
          </li>
          <li>
            <a href="#ColorfulLayersMenu" data-text="Portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#ColorfulLayersMenu" data-text="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
