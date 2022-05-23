import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import "./style.css";

export interface IReactHotMarqueeProps {
  children: React.ReactNode;
  style: React.CSSProperties;
  className?: string;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  speed?: number;
  delay?: number;
  play?: boolean;
  loop?: number;
  hoverToPause?: boolean;
  scrollWhen?: 'overflow',
}

function ReactHotMarquee(props: IReactHotMarqueeProps): JSX.Element {
  const {
    children,
    speed = 1,
    reverse,
    delay,
    play = true,
    loop,
    hoverToPause,
    direction,
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

  useEffect(() => {
    computeWidth();
    window.addEventListener("resize", computeWidth);

    return () => {
      window.removeEventListener("resize", computeWidth);
    };
  }, [wrapWidth, speed]);

  console.log("duration: ", `${duration}ms`);

  console.log(wrapWidth - marqueeWidth)

  const marqueeProps = {
    className: classNames("marquee"),
    style: {
      ["--duration" as string]: `${duration}s`,
      ["--direction" as string]: reverse ? "reverse" : "normal",
      ["--delay" as string]: `${delay}s`,
      ["--loop" as string]: loop ? loop : "infinite",
      ["--play" as string]: play ? "running" : "paused",
    },
  };

  return (
    <div
      ref={wrapRef}
      className="wrap"
      style={{
        ["--pause-to-hover" as string]: hoverToPause ? "paused" : "running",
      }}
    >
      <div ref={marqueeRef} {...marqueeProps}>
        {children}
      </div>
      <div {...marqueeProps}>{children}</div>
    </div>
  );
}

export { ReactHotMarquee };
