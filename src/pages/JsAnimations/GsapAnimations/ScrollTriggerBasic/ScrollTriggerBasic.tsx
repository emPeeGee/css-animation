import React from 'react';
import { gsap } from 'gsap';

import sick from '../../../../assets/sick.jpg';

import './ScrollTriggerBasic.scss';

export function ScrollTriggerBasic(): JSX.Element {
  React.useEffect(() => {
    // gsap.to('.box', {
    //   scrollTrigger: {
    //     trigger: '.box',
    //     start: 'center center',
    //     pin: true,
    //     end: '+=1000px',
    //   },
    //   x: 500,
    // });

    const animationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.dark',
        start: 'top center',
      },
    });

    animationTimeline
      .from('img', {
        x: 200,
        opacity: 0,
        duration: 1.5,
      })
      .from(
        '.content',
        {
          y: 300,
          opacity: 0,
          duration: 1,
        },
        '-=1'
      );
  }, []);

  return (
    <div className="ScrollTriggerBasic">
      <section>
        <h2>Scroll Down</h2>
      </section>

      <section className="dark">
        <div className="content">
          <h2>Are you really sick?</h2>
          <p>Go get yo' sick *ss tested, you might have the flu!</p>
        </div>
        <img src={sick} alt="covid" />
      </section>

      <section>
        <h2>This is the finish</h2>
      </section>
    </div>
  );
}
