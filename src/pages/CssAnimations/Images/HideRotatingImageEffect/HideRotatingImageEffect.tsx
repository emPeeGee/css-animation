import React from 'react';

import ulmo from '../../../../assets/ulmo.jpg';

import './HideRotatingImageEffect.scss';

export function HideRotatingImageEffect() {
  return (
    <div id="HideRotatingImageEffect" className="HideRotatingImageEffect">
      <div className="container">
        <img src={ulmo} alt="effect" />
        <div className="HideRotatingImageEffect__caption">
          <h3>Amazing caption</h3>
          <p>Write anything you want</p>
          <a href="#HideRotatingImageEffect">Read More</a>
        </div>
      </div>
    </div>
  );
}
