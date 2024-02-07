import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

const meta = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/104000239?v=4',
    alt: 'Nyatinte Avatar',
  },
};

export const Fallback: Story = {
  args: {
    src: '',
    alt: 'Nyatinte Avatar',
    fallback: 'N',
  },
};
