import React from 'react';

import './TransitionOptions.scss';

export function TransitionOptions() {
  return (
    <div className="TransitionOptions">
      <h3>Transition options</h3>
      <div className="container">
        <div id="ease" className="move">
          Ease (Default)
        </div>
        <div id="linear" className="move">
          Linear
        </div>
        <div id="ease-in" className="move">
          Ease-In
        </div>
        <div id="ease-out" className="move">
          Ease-out
        </div>
        <div id="ease-in-out" className="move">
          Ease--in-out
        </div>
      </div>
    </div>
  );
}
