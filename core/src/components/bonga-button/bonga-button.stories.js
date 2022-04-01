import React from 'react';
import { BongaButton } from '../../../dist/collection/components/bonga-button/bonga-button';
import { withKnobs, text, select, } from '@storybook/addon-knobs';

export default {
  title: 'Design System/Atoms/Button',
  component: BongaButton,
  decorators: [withKnobs],
};

export const Colors = () => <bonga-button color={select('Color', ['primary', 'secondary', 'tertiary'])}>{text('Label', 'Button')}</bonga-button>;
