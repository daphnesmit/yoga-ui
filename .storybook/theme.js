import { create } from '@storybook/theming/create';
import logo from './public/yoga-ui-logo.svg';

export default create({
  base: 'light',

  colorPrimary: '#cbc6d7',
  colorSecondary: '#7b4fff',

  // UI
  appBg: 'white',
  // Typography
  fontBase: '"Open Sans", sans-serif',

  brandTitle: 'Yoga UI',
  brandImage: logo,
});