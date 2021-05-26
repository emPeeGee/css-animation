import React from 'react';

import ulmo from '../../../../assets/ulmo.jpg';

import './RotatingSwipeImageEffect.scss';

export function RotatingSwipeImageEffect() {
  return (
    <div id="RotatingSwipeImageEffect" className="RotatingSwipeImageEffect">
      <div className="container">
        <img src={ulmo} alt="ulmo" />
        <div className="RotatingSwipeImageEffect__caption">
          <h3>Amazing caption</h3>
          <p>Write anything you want</p>
          <a href="#RotatingSwipeImageEffect">Read More</a>
        </div>
      </div>
    </div>
  );
}
