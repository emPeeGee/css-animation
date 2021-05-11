import React from 'react';

import './FourBorderGrowingButtonEffect.scss';

export function FourBorderGrowingButtonEffect() {
  return (
    <div id="FourBorderGrowingButtonEffect" className="FourBorderGrowingButtonEffect">
      <h2>
        <a href="#FourBorderGrowingButtonEffect">Four Border Growing Button Effect</a>
      </h2>

      <div className="container">
        <button>
          Hover me <span></span>
        </button>
      </div>
    </div>
  );
}
