import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactHotMarquee } from '../index';

export default {
    title: 'Example/ReactHotMarquee',
    component: ReactHotMarquee,
} as ComponentMeta<typeof ReactHotMarquee>;

const Template: ComponentStory<typeof ReactHotMarquee> = (args) => <ReactHotMarquee {...args} >自是人生长恨水常东自是人生长恨水常东自是人生长恨水常东自是人生长恨水常东</ReactHotMarquee>;

export const Primary = Template.bind({});
