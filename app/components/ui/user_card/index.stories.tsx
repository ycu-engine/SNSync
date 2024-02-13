import { Meta, StoryObj } from '@storybook/react';
import { UserCard } from '.'

const meta = {
  title: 'UI/UserCard',
  component: UserCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      xid: "ycu_engine",
      nickname: "Engine official account",
  }}
};