import { createRemixStub } from '@remix-run/testing';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { UserCard } from '.';

const meta = {
  title: 'UI/UserCard',
  component: UserCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          Component: () => <Story />,
        },
      ]);

      return <RemixStub />;
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      xid: 'ycu_engine',
      nickname: 'Engine official account',
    },
  },
};

export const Checked: Story = {
  args: {
    user: {
      xid: 'ycu_engine',
      nickname: 'Engine official account',
    },
    isLooked: true,
  },
};
