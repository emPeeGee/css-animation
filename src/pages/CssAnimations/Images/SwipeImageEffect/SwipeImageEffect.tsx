import React from 'react';

import lotr from '../../../../assets/lotr.png';

import './SwipeImageEffect.scss';

export function SwipeImageEffect() {
  return (
    <div id="SwipeImageEffect" className="SwipeImageEffect">
      <div className="container">
        <img src={lotr} alt="lotr" />
        <div className="SwipeImageEffect__caption">
          <h3>Amazing caption</h3>
          <p>Write anything you want</p>
        </div>
      </div>
    </div>
  );
}
