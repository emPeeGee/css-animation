import React from 'react';

import ulmo from '../../../assets/ulmo.jpg';

import './FadeInSecondImageEffect.scss';

export function FadeInSecondImageEffect() {
  return (
    <div className="FadeInSecondImageEffect">
      <div className="container">
        <img src={ulmo} alt="image-effect" />
        <div className="FadeInSecondImageEffect__caption">
          <h3>Amazing caption</h3>
          <p>Write anything you want</p>
          <a href="">Read More</a>
        </div>
      </div>
    </div>
  );
}
