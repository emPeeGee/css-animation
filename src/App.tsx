import React from 'react';

import './App.scss';
import { TransitionOptions } from './components/ChapterOne/TransitionOptions/TransitionOptions';
import { Transform } from './components/ChapterOne/Transform/Transform';
import { WhatIsTransition } from './components/ChapterOne/WhatIsTransition/WhatIsTransition';

function App() {
  return (
    <div className="App">
      <WhatIsTransition />
      <TransitionOptions />
      <Transform />
    </div>
  );
}

export default App;
