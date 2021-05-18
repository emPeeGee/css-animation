import React from 'react';
import { BackgroundBorderMenu } from './BackgroundBorderMenu/BackgroundBorderMenu';
import { BackgroundTwoBordersMenu } from './BackgroundTwoBordersMenu/BackgroundTwoBordersMenu';
import { BlurryMenu } from './BlurryMenu/BlurryMenu';
import { BorderSniperMenu } from './BorderSniperMenu/BorderSniperMenu';
import { ColorfulLayersMenu } from './ColorfulLayersMenu/ColorfulLayersMenu';
import { GrowingBordersMenu } from './GrowingBordersMenu/GrowingBordersMenu';
import { MovingBordersMenu } from './MovingBordersMenu/MovingBordersMenu';
import { RotatingBorderMenu } from './RotatingBorderMenu/RotatingBorderMenu';
import { SplittedBackgroundMenu } from './SplittedBackgroundMenu/SplittedBackgroundMenu';
import { TwoSpanMenu } from './TwoSpanMenu/TwoSpanMenu';

export function Menus() {
  return (
    <div className="Menus">
      <GrowingBordersMenu />
      <BackgroundBorderMenu />
      <SplittedBackgroundMenu />
      <MovingBordersMenu />
      <BlurryMenu />
      <TwoSpanMenu />
      <BackgroundTwoBordersMenu />
      <BorderSniperMenu />
      <RotatingBorderMenu />
      <ColorfulLayersMenu />
    </div>
  );
}
