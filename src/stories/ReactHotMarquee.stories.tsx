import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactHotMarquee } from '../index';

export default {
  title: 'Example/ReactHotMarquee',
  component: ReactHotMarquee,
} as ComponentMeta<typeof ReactHotMarquee>;

const Template: ComponentStory<typeof ReactHotMarquee> = (args) => {
  return (
    <div>
      <ReactHotMarquee {...args} >Yesterday, All my trouble seemed so far away.</ReactHotMarquee>
      <ReactHotMarquee {...args} >Yesterday</ReactHotMarquee>
    </div>
  )
};

export const Primary = Template.bind({});
