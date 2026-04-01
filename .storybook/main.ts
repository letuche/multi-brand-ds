import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/Introduction.stories.mdx',
    '../packages/**/src/**/*.stories.@(ts|tsx)',
    '../stories/**/*.@(mdx|stories.@(ts|tsx))',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
