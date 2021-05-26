import React from 'react';

import { Transform } from './Transform/Transform';
import { TransitionOptions } from './TransitionOptions/TransitionOptions';
import { WhatIsTransition } from './WhatIsTransition/WhatIsTransition';

export function Basic() {
  return (
    <div className="Basic">
      <h1>Chapter One</h1>
      <WhatIsTransition />
      <TransitionOptions />
      <Transform />
    </div>
  );
}
