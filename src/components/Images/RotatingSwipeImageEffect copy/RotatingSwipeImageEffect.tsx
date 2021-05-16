import React from 'react';

import ulmo from '../../../assets/ulmo.jpg';

import './RotatingSwipeImageEffect.scss';

export function RotatingSwipeImageEffect() {
  return (
    <div className="RotatingSwipeImageEffect">
      <div className="container">
        <img src={ulmo} alt="image-effect" />
        <div className="RotatingSwipeImageEffect__caption">
          <h3>Amazing caption</h3>
          <p>Write anything you want</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
}
