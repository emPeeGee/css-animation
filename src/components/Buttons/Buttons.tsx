import React from 'react';
import { BorderGrowingButtonEffect } from './BorderGrowingButtonEffect/BorderGrowingButtonEffect';
import { BorderSwapingButtonEffect } from './BorderSwapingButtonEffect/BorderSwapingButtonEffect';
import { CircularSwapingButtonEffect } from './CircularSwapingButtonEffect/CircularSwapingButtonEffect';
import { DiagonalButtonEffect } from './DiagonalButtonEffect/DiagonalButtonEffect';
import { FourBorderGrowingButtonEffect } from './FourBorderGrowingButtonEffect/FourBorderGrowingButtonEffect';

import { GlowingButtonEffect } from './GlowingButtonEffect/GlowingButtonEffect';
import { HoverButtonEffect } from './HoverButtonEffect/HoverButtonEffect';
import { HoverSecondButtonEffect } from './HoverSecondButtonEffect/HoverSecondButtonEffect';
import { LetterRotatingButtonEffect } from './LetterRotatingButtonEffect/LetterRotatingButtonEffect';
import { PulsingButtonEffect } from './PulsingButtonEffect/PulsingButtonEffect';
import { RotatingButtonEffect } from './RotatingButtonEffect/RotatingButtonEffect';
import { RotatingThreeLayersButtonEffect } from './RotatingThreeLayersButtonEffect/RotatingThreeLayersButtonEffect';
import { ScalingButtonEffect } from './ScalingButtonEffect/ScalingButtonEffect';
import { SkewPartsButtonEffect } from './SkewPartsButtonEffect/SkewPartsButtonEffect';
import { SplitedButtonEffect } from './SplitedButtonEffect/SplitedButtonEffect';
import { StretchingButtonEffect } from './StretchingButtonEffect/StretchingButtonEffect';
import { SwapingLeftRightButtonEffect } from './SwapingLeftRightButtonEffect/SwapingLeftRightButtonEffect';
import { SwipeButtonEffect } from './SwipeButtonEffect/SwipeButtonEffect';
import { SwipeButtonTextEffect } from './SwipeButtonTextEffect/SwipeButtonTextEffect';
import { ThreeCirclesButtonEffect } from './ThreeCirclesButtonEffect/ThreeCirclesButtonEffect';
import { TwoCutsButtonEffect } from './TwoCutsButtonEffect/TwoCutsButtonEffect';
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
      <SplitedButtonEffect />
      <BorderSwapingButtonEffect />
      <BorderGrowingButtonEffect />
      <LetterRotatingButtonEffect />
      <FourBorderGrowingButtonEffect />
      <TwoCutsButtonEffect />
      <SkewPartsButtonEffect />
      <PulsingButtonEffect />
      <DiagonalButtonEffect />
    </div>
  );
}
