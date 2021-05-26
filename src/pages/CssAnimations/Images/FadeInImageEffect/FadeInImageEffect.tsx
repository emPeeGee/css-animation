import React from 'react';

import ulmo from '../../../../assets/ulmo.jpg';

import './FadeInImageEffect.scss';

export function FadeInImageEffect() {
  return (
    <div className="FadeInImageEffect">
      <div className="container">
        <img src={ulmo} alt="image-effect" />
        <div className="FadeInImageEffect__caption">
          <h3>Amazing caption</h3>
          <p>Write anything you want</p>
          <a href="">Read More</a>
        </div>
      </div>
    </div>
  );
}
