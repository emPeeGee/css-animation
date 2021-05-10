import React from 'react';

import { GlowingButtonEffect } from './GlowingButtonEffect/GlowingButtonEffect';
import { HoverButtonEffect } from './HoverButtonEffect/HoverButtonEffect';
import { RotatingButtonEffect } from './RotatingButtonEffect/RotatingButtonEffect';
import { StretchingButtonEffect } from './StretchingButtonEffect/StretchingButtonEffect';
import { SwipeButtonEffect } from './SwipeButtonEffect/SwipeButtonEffect';
import { SwipeButtonTextEffect } from './SwipeButtonTextEffect/SwipeButtonTextEffect';
import { TwoLayersButtonEffect } from './TwoLayersButtonEffect/TwoLayersButtonEffect';

export function Buttons() {
  return (
    <div className="Buttons">
      <h1>Button's effects</h1>
      <RotatingButtonEffect />
      <SwipeButtonEffect />
      <HoverButtonEffect />
      <StretchingButtonEffect />
      <SwipeButtonTextEffect />
      <GlowingButtonEffect />
      <TwoLayersButtonEffect />
    </div>
  );
}
