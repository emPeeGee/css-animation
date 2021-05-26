import React from 'react';

import lotr from '../../../../assets/lotr.png';

import './RotatingImageEffect.scss';

export function RotatingImageEffect() {
  return (
    <div className="RotatingImageEffect">
      <div className="container">
        <img src={lotr} alt="image-effect" />
        <div className="RotatingImageEffect__caption">
          <h3>Amazing caption</h3>
          <p>Write anything you want</p>
        </div>
      </div>
    </div>
  );
}
