import React from 'react';
import { DiagonalSwipeImageEffect } from './DiagonalSwipeImageEffect/DiagonalSwipeImageEffect';
import { FadeInImageEffect } from './FadeInImageEffect/FadeInImageEffect';
import { FadeInSecondImageEffect } from './FadeInSecondImageEffect/FadeInSecondImageEffect';
import { GoUpImageEffect } from './GoUpImageEffect/GoUpImageEffect';
import { HideRotatingImageEffect } from './HideRotatingImageEffect/HideRotatingImageEffect';
import { HoverImageEffect } from './HoverImageEffect/HoverImageEffect';
import { RotatingImageEffect } from './RotatingImageEffect/RotatingImageEffect';
import { RotatingSwipeImageEffect } from './RotatingSwipeImageEffect copy/RotatingSwipeImageEffect';
import { SwipeImageEffect } from './SwipeImageEffect/SwipeImageEffect';
import { TwoLayersSwipeImageEffect } from './TwoLayersSwipeImageEffect/TwoLayersSwipeImageEffect';
import { ZoomInImageEffect } from './ZoomInImageEffect/ZoomInImageEffect';

export function Images() {
  return (
    <div className="Images">
      <h1>Image's effects</h1>

      <RotatingImageEffect />
      <SwipeImageEffect />
      <TwoLayersSwipeImageEffect />
      <GoUpImageEffect />
      <HoverImageEffect />
      <ZoomInImageEffect />
      <DiagonalSwipeImageEffect />
      <RotatingSwipeImageEffect />
      <HideRotatingImageEffect />
      <FadeInImageEffect />
      <FadeInSecondImageEffect />
    </div>
  );
}
