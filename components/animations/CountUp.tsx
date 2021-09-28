// https://jshakespeare.com/simple-count-up-number-animation-javascript-react/

import { ReactElement, useEffect, useState } from 'react';

const easeOutQuad = (t: number) => t * (2 - t);
const frameDuration = 1000 / 60;

interface Props {
  children: number;
  duration?: number;
  percentage?: boolean;
  wait?: boolean;
}

export default function CountUp(props: Props): ReactElement {
  const { children, duration = 2000, percentage = false, wait = false } = props;
  const [count, setCount] = useState(Number(children));
  const countTo = parseFloat(children.toString());

  useEffect(() => {
    if (wait) return;
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [countTo, duration, percentage, wait]);

  return <>{percentage ? Math.floor(count * 100) : count.toFixed(2)}</>;
}
