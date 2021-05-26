import React from 'react';

import ulmo from '../../../../assets/ulmo.jpg';

import './ZoomInImageEffect.scss';

export function ZoomInImageEffect() {
  return (
    <div id="ZoomInImageEffect" className="ZoomInImageEffect">
      <div className="container">
        <img src={ulmo} alt="ulmo" />
      </div>
    </div>
  );
}
