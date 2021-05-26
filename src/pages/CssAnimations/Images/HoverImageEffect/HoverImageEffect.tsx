import React from 'react';

import ulmo from '../../../../assets/ulmo.jpg';

import './HoverImageEffect.scss';

export function HoverImageEffect() {
  return (
    <div id="HoverImageEffect" className="HoverImageEffect">
      <div className="container">
        <img src={ulmo} alt="ulmo" />
        <div className="HoverImageEffect__caption">
          <h3>Amazing caption</h3>
          <p>Write anything you want</p>
        </div>
      </div>
    </div>
  );
}
