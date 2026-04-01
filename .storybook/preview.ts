import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../packages/react/src/themes';

const preview: Preview = {
  globalTypes: {
    brand: {
      description: 'Marca ativa do Design System',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'aurora', title: 'Aurora' },
          { value: 'nebula', title: 'Nebula' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    brand: 'aurora',
  },
  decorators: [
    (Story, context) =>
      React.createElement(
        ThemeProvider,
        { brand: context.globals.brand ?? 'aurora' },
        React.createElement(
          'div',
          { style: { padding: '2rem', minHeight: '100vh' } },
          React.createElement(Story),
        ),
      ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
  },
};

export default preview;
