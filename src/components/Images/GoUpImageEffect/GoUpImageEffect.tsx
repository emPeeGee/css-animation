import React from 'react';

import ulmo from '../../../assets/ulmo.jpg';

import './GoUpImageEffect.scss';

export function GoUpImageEffect() {
  return (
    <div className="GoUpImageEffect">
      <div className="container">
        <img src={ulmo} alt="image-effect" />
        <div className="GoUpImageEffect__caption">
          <h3>Amazing caption</h3>
          <p>Write anything you want</p>
        </div>
      </div>
    </div>
  );
}
