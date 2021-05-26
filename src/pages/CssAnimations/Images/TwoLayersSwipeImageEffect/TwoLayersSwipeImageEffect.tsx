import React from 'react';

import lotr from '../../../../assets/lotr.png';

import './TwoLayersSwipeImageEffect.scss';

export function TwoLayersSwipeImageEffect() {
  return (
    <div className="TwoLayersSwipeImageEffect">
      <div className="container">
        <img src={lotr} alt="image-effect" />
        <div className="TwoLayersSwipeImageEffect__caption">
          <h3>Amazing caption</h3>
          <p>Write anything you want</p>
        </div>
      </div>
    </div>
  );
}
