import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Card } from './Card';
import { Button } from './Button';

const meta = {
  title: 'HyUI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is the card content. It can contain any text or components you want to display.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    children: 'This card has a footer section at the bottom.',
    footer: 'Footer content or metadata goes here',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    children: 'Click this card to trigger an action. Hover to see the effect.',
    onClick: fn(),
  },
};

export const WithButtons: Story = {
  args: {
    title: 'User Profile',
    children: (
      <div>
        <p style={{ margin: '0 0 16px 0' }}>
          This card contains interactive elements like buttons.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button primary label="Edit" size="small" />
          <Button label="Delete" size="small" />
        </div>
      </div>
    ),
    footer: 'Last updated: Today',
  },
};

export const NoTitle: Story = {
  args: {
    children: 'This card has no title, just content.',
    footer: 'Optional footer',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Article Preview',
    children: (
      <div>
        <p style={{ margin: '0 0 12px 0' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p style={{ margin: '0' }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>
      </div>
    ),
    footer: 'Published 2 hours ago',
  },
};
