import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ThemeProvider } from '../../themes';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story, context) => (
      <ThemeProvider brand={context.globals.brand ?? 'aurora'}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Salvando…',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Indisponível',
    disabled: true,
  },
};
