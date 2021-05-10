import React from 'react';
import { CircularSwapingButtonEffect } from './CircularSwapingButtonEffect/CircularSwapingButtonEffect';

import { GlowingButtonEffect } from './GlowingButtonEffect/GlowingButtonEffect';
import { HoverButtonEffect } from './HoverButtonEffect/HoverButtonEffect';
import { HoverSecondButtonEffect } from './HoverSecondButtonEffect/HoverSecondButtonEffect';
import { RotatingButtonEffect } from './RotatingButtonEffect/RotatingButtonEffect';
import { RotatingThreeLayersButtonEffect } from './RotatingThreeLayersButtonEffect/RotatingThreeLayersButtonEffect';
import { ScalingButtonEffect } from './ScalingButtonEffect/ScalingButtonEffect';
import { StretchingButtonEffect } from './StretchingButtonEffect/StretchingButtonEffect';
import { SwapingLeftRightButtonEffect } from './SwapingLeftRightButtonEffect/SwapingLeftRightButtonEffect';
import { SwipeButtonEffect } from './SwipeButtonEffect/SwipeButtonEffect';
import { SwipeButtonTextEffect } from './SwipeButtonTextEffect/SwipeButtonTextEffect';
import { ThreeCirclesButtonEffect } from './ThreeCirclesButtonEffect/ThreeCirclesButtonEffect';
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
      <ScalingButtonEffect />
      <CircularSwapingButtonEffect />
      <RotatingThreeLayersButtonEffect />
      <SwapingLeftRightButtonEffect />
      <ThreeCirclesButtonEffect />
      <HoverSecondButtonEffect />
    </div>
  );
}
