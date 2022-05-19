import React from 'react';

export interface IReactHotMarqueeProps {
  children: React.ReactNode
}

function ReactHotMarquee(props: IReactHotMarqueeProps) {
  const { children } = props;

  return (
    <div>{children}</div>
  )
}

export {
  ReactHotMarquee,
};
