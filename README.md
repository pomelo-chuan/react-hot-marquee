# react-hot-marquee

> The React marquee component that can smoothly loops the content.

# Demo

# Installation

```bash
$ npm install --save react-hot-marquee
```

or

```bash
$ yarn add react-hot-marquee
```

# Usage

## Simply usage

```javascript
import { ReactHotMarquee } from "react-hot-marquee";

function Demo() {
  return (
    <>
      <ReactHotMarquee>
        Yesterday, All my trouble seemed so far away.
      </ReactHotMarquee>
    </>
  );
}
```

## Running when overflow

If `play` is `overflow`, it will auto play when content width more than the container.

```javascript
// won't running
<ReactHotMarquee play="overflow">Yesterday</ReactHotMarquee>

// it will auto running
<ReactHotMarquee play="overflow">
  Yesterday, All my trouble seemed so far away.
  Yesterday, All my trouble seemed so far away.
  Yesterday, All my trouble seemed so far away.
  Yesterday, All my trouble seemed so far away.
</ReactHotMarquee>
```

# Props

| Name         | Description                                             | Type                  | Default |
| ------------ | ------------------------------------------------------- | --------------------- | ------- |
| children     | The children of the ReactHotMarquee                     | React.ReactNode       | -       |
| style        | The style of the ReactHotMarquee                        | React.CSSProperties   | -       |
| className    | The className of the ReactHotMarquee                    | string                | -       |
| reverse      | Reverse the marquee direction                           | boolean               | false   |
| speed        | The running speed of the ReactHotMarquee                | number                | 30      |
| delay        | Specifies a delay for the start of marquee animation(s) | number                | 0       |
| play         | Whether to play or pause the ReactHotMarquee.           | boolean \| 'overflow' | true    |
| loop         | The numbers of loop count, 0 equal infinite             | number                | 0       |
| hoverToPause | Whether to pause the marquee animation                  | boolean               | false   |
| gutter       | The gutter between loop                                 | number                | 20      |
