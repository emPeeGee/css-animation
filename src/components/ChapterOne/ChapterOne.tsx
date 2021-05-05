import React from 'react';

import { Transform } from './Transform/Transform';
import { TransitionOptions } from './TransitionOptions/TransitionOptions';
import { WhatIsTransition } from './WhatIsTransition/WhatIsTransition';

export function ChapterOne() {
  return (
    <div className="ChapterOne">
      <h1>Chapter One</h1>
      <WhatIsTransition />
      <TransitionOptions />
      <Transform />
    </div>
  );
}
