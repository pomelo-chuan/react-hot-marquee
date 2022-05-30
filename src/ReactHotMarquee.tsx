import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./style.module.css";

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
    if (typeof play === 'boolean') {
      return play
    }
    if (play === 'overflow' && (marqueeWidth! > wrapWidth)) {
      return true
    }
    return false;
  }, [wrapWidth, marqueeWidth]);

  useEffect(() => {
    computeWidth();
    window.addEventListener("resize", computeWidth);

    return () => {
      window.removeEventListener("resize", computeWidth);
    };
  }, [wrapWidth, speed]);

  const marqueeProps = {
    className: styles.marquee,
    style: {
      ["--duration" as string]: `${duration}s`,
      ["--direction" as string]: reverse ? "reverse" : "normal",
      ["--delay" as string]: `${delay}s`,
      ["--loop" as string]: loop ? loop : "infinite",
      ["--play" as string]: _play() ? "running" : "paused",
    },
  };

  return (
    <div
      ref={wrapRef}
      className={styles.wrap}
      style={{
        ...style,
        ["--hover-to-pause" as string]: hoverToPause ? "paused" : 'running',
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
