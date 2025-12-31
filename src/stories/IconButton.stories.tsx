import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { IconButton } from './IconButton';
import { X, Menu, Bell, Settings, User, Heart, Search, ChevronRight } from 'lucide-react';

const meta = {
  title: 'HyUI/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Close: Story = {
  args: {
    icon: <X size={16} />,
    ariaLabel: 'Close',
  },
};

export const MenuIcon: Story = {
  args: {
    icon: <Menu size={16} />,
    ariaLabel: 'Menu',
  },
};

export const Notifications: Story = {
  args: {
    icon: <Bell size={16} />,
    ariaLabel: 'Notifications',
  },
};

export const SettingsIcon: Story = {
  args: {
    icon: <Settings size={16} />,
    ariaLabel: 'Settings',
  },
};

export const Profile: Story = {
  args: {
    icon: <User size={16} />,
    ariaLabel: 'Profile',
  },
};

export const Favorites: Story = {
  args: {
    icon: <Heart size={16} />,
    ariaLabel: 'Favorites',
  },
};

export const SearchIcon: Story = {
  args: {
    icon: <Search size={16} />,
    ariaLabel: 'Search',
  },
};

export const ChevronIcon: Story = {
  args: {
    icon: <ChevronRight size={16} />,
    ariaLabel: 'Next',
  },
};

export const Small: Story = {
  args: {
    icon: <X size={12} />,
    ariaLabel: 'Close',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    icon: <X size={16} />,
    ariaLabel: 'Close',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    icon: <X size={20} />,
    ariaLabel: 'Close',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    icon: <X size={16} />,
    ariaLabel: 'Close',
    disabled: true,
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <IconButton icon={<X size={16} />} ariaLabel="Close" />
      <IconButton icon={<Menu size={16} />} ariaLabel="Menu" />
      <IconButton icon={<Bell size={16} />} ariaLabel="Notifications" />
      <IconButton icon={<Settings size={16} />} ariaLabel="Settings" />
      <IconButton icon={<User size={16} />} ariaLabel="Profile" />
      <IconButton icon={<Heart size={16} />} ariaLabel="Favorites" />
      <IconButton icon={<Search size={16} />} ariaLabel="Search" />
      <IconButton icon={<ChevronRight size={16} />} ariaLabel="Next" />
    </div>
  ),
};
