import React, { useEffect, useRef, useState } from 'react';
import './style.css';
export interface IReactHotMarqueeProps {
  children: React.ReactNode;
  style: React.CSSProperties;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  speed?: number;
}


function ReactHotMarquee(props: IReactHotMarqueeProps) {
  const { children, speed = 1 } = props;
  const wrapRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [wrapWidth, setWrapWidth] = useState<number>(0);
  const [marqueeWidth, setMarqueeWidth] = useState<number>(0);
  const [duration, setDuration] = useState(0);

  const computeWidth = () => {
    if (wrapRef?.current && marqueeRef?.current) {
      setWrapWidth(marqueeRef.current.getBoundingClientRect().width);
      setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width);
    }

    if (marqueeWidth < wrapWidth) {
      setDuration(wrapWidth / speed);
    } else {
      setDuration(marqueeWidth / speed);
    }
  }

  useEffect(() => {
    computeWidth();
    window.addEventListener("resize", computeWidth);

    return () => {
      window.removeEventListener("resize", computeWidth);
    };
  }, []);

  return (
    <div ref={wrapRef} className='wrap'>
      <div ref={marqueeRef}
        className="marquee"
      >
        {children}
      </div>
    </div>
  )
}

export {
  ReactHotMarquee,
};
