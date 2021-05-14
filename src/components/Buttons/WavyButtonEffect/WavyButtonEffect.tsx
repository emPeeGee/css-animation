import React from 'react';

import './WavyButtonEffect.scss';

export function WavyButtonEffect() {
  return (
    <div id="WavyButtonEffect" className="WavyButtonEffect">
      <h2>
        <a href="#WavyButtonEffect">Wavy Button Effect</a>
      </h2>

      <div className="container">
        <a href="/">
          Hover Me
          <div className="wave"></div>
        </a>
      </div>
    </div>
  );
}
