import 'material-symbols'
import { themes } from '@storybook/theming'
/* import Image from 'next/image';

Image.propTypes = {
  unoptimized: null,
};

Image.defaultProps = {
  unoptimized: true,
}; */

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#1B1B1B' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#F3F3F3' }
  },
  docs: {
    theme: themes.light
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F3F3F3',
      },
      {
        name: 'dark',
        value: '#1B1B1B',
      },
    ],
  },
}
