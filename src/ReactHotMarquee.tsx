import React, { useEffect, useRef, useState, useCallback } from "react";
import "./style.css";

const defaultClassNamePrefix = 'react-hot-marquee';

export interface IReactHotMarqueeProps {
  /**
   * The children of the ReactHotMarquee
  */
  children: React.ReactNode;
  /**
   * The style of the ReactHotMarquee
  */
  style?: React.CSSProperties;
  /**
   * The className of the ReactHotMarquee
  */
  className?: string;
  /**
   * Reverse the marquee direction
  */
  reverse?: boolean;
  /**
   * The running speed of the ReactHotMarquee
  */
  speed?: number;
  /**
   * Specifies a delay for the start of marquee animation (s)
  */
  delay?: number;
  /**
   * Whether to play or pause the ReactHotMarquee. If `play` is `overflow`, it will auto play when content width more than the container.
  */
  play?: boolean | 'overflow';
  /**
   * The numbers of loop count, 0 equal infinite
  */
  loop?: number;
  /**
   * Whether to pause the marquee animation.
  */
  hoverToPause?: boolean;
  /**
   * The gutter between loop
  */
  gutter?: number;
  /**
   * The className prefix default is react-hot-marquee
  */
  classNamePrefix?: string;
}

const ReactHotMarquee: React.FC<IReactHotMarqueeProps> = (props) => {
  const {
    style,
    children,
    speed = 30,
    reverse = false,
    delay = 0,
    play = true,
    loop = 0,
    hoverToPause = false,
    gutter = 20,
    classNamePrefix = defaultClassNamePrefix,
    className = '',
  } = props;
  const wrapRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [wrapWidth, setWrapWidth] = useState<number>(0);
  const [marqueeWidth, setMarqueeWidth] = useState<number>(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (wrapRef?.current && marqueeRef?.current && !wrapWidth) {
      setWrapWidth(wrapRef.current.getBoundingClientRect().width);
      setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width);
    }
  }, []);

  const computeWidth = () => {
    if (marqueeWidth < wrapWidth) {
      setDuration(wrapWidth / speed);
    } else {
      setDuration(marqueeWidth / speed);
    }
  };

  const _play = useCallback(() => {
    let result = false;
    if (typeof play === 'boolean') {
      result = play
    }
    if (play === 'overflow') {
      if (marqueeWidth < wrapWidth) {
        result = true;
      } else {
        result = false;
      }
    }
    return result ? 'running' : 'pause';
  }, [wrapWidth, marqueeWidth]);

  useEffect(() => {
    computeWidth();
  }, [wrapWidth, speed]);

  useEffect(() => {
    window.addEventListener("resize", computeWidth);

    return () => {
      window.removeEventListener("resize", computeWidth);
    };
  }, [wrapWidth, speed]);

  const marqueeProps = {
    className: classNamePrefix + '-marquee',
    style: {
      ["--duration" as string]: `${duration}s`,
      ["--direction" as string]: reverse ? "reverse" : "normal",
      ["--delay" as string]: `${delay}s`,
      ["--loop" as string]: loop ? loop : "infinite",
      ["--play" as string]: _play(),
    },
  };

  return (
    <div
      ref={wrapRef}
      className={className + ' ' + classNamePrefix + '-wrap'}
      style={{
        ...style,
        ["--hover-to-pause" as string]: hoverToPause ? "paused" : _play(),
      }}
    >
      <div ref={marqueeRef} {...marqueeProps}>
        {children}
        <div style={{ width: gutter }} />
      </div>
      <div {...marqueeProps}>
        {children}
        <div style={{ width: gutter }} />
      </div>
    </div >
  );
}

export { ReactHotMarquee };
