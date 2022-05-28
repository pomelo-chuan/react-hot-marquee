import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReactHotMarquee } from '../dist/index';
import '../dist/react-hot-marquee.css';

storiesOf('ReactHotMarquee', module)
  .addParameters({ component: ReactHotMarquee })
  .add('Simple', function Demo() {
    return <ReactHotMarquee>Yesterday, All my trouble seemed so far away.</ReactHotMarquee>;
  })
  .add('overflow', function Demo() {
    return (
      <>
        <ReactHotMarquee play="overflow">Yesterday</ReactHotMarquee>
        <ReactHotMarquee play="overflow">
          Yesterday, All my trouble seemed so far away.
          Yesterday, All my trouble seemed so far away.
          Yesterday, All my trouble seemed so far away.
          Yesterday, All my trouble seemed so far away.
        </ReactHotMarquee>
      </>
    )
  })
  .add('speed', function Demo() {
    return (
      <>
        <ReactHotMarquee speed={50}>[speed: 50] Yesterday, All my trouble seemed so far away.</ReactHotMarquee>
        <ReactHotMarquee speed={100}>[speed: 100] Yesterday, All my trouble seemed so far away.</ReactHotMarquee>
        <ReactHotMarquee speed={200}>[speed: 200] Yesterday, All my trouble seemed so far away.</ReactHotMarquee>
      </>
    )
  })
  .add('hoverToPause', function Demo() {
    return (
      <>
        <ReactHotMarquee hoverToPause>Yesterday, All my trouble seemed so far away.</ReactHotMarquee>
      </>
    )
  })
  .add('delay', function Demo() {
    return <ReactHotMarquee delay={2}>Yesterday, All my trouble seemed so far away.</ReactHotMarquee>;
  })
  .add('style', function Demo() {
    return <ReactHotMarquee
      style={{
        fontSize: '14px',
        backgroundColor: '#f58442',
        color: '#ffffff',
        height: '50px',
      }}
    >
      Yesterday, All my trouble seemed so far away.
    </ReactHotMarquee>;
  })
