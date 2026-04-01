import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    hint: 'Formato: user@mail.com',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: 'Campo obrigatório',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    disabled: true,
  },
};
