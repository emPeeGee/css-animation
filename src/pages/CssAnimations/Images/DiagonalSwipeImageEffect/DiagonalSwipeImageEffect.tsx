import React from 'react';

import ulmo from '../../../../assets/ulmo.jpg';

import './DiagonalSwipeImageEffect.scss';

export function DiagonalSwipeImageEffect() {
  return (
    <div id="DiagonalSwipeImageEffect" className="DiagonalSwipeImageEffect">
      <div className="container">
        <img src={ulmo} alt="ulmo" />
        <div className="DiagonalSwipeImageEffect__caption">
          <h3>Amazing caption</h3>
          <p>Write anything you want</p>
          <a href="#DiagonalSwipeImageEffect">Read More</a>
        </div>
      </div>
    </div>
  );
}
