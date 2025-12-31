import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';
import { Button } from './Button';
import { IconButton } from './IconButton';

const meta = {
  title: 'HyUI/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: 'HyUI',
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'About', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};

export const WithActions: Story = {
  args: {
    logo: 'HyUI',
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'About', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    actions: (
      <>
        <Button label="Sign In" size="small" />
        <Button primary label="Sign Up" size="small" />
      </>
    ),
  },
};

export const WithIconActions: Story = {
  args: {
    logo: 'HyUI',
    navItems: [
      { label: 'Dashboard', href: '#', active: true },
      { label: 'Projects', href: '#' },
      { label: 'Team', href: '#' },
    ],
    actions: (
      <>
        <IconButton icon="🔔" ariaLabel="Notifications" size="small" />
        <IconButton icon="⚙" ariaLabel="Settings" size="small" />
        <IconButton icon="👤" ariaLabel="Profile" size="small" />
      </>
    ),
  },
};

export const Sticky: Story = {
  args: {
    logo: 'HyUI',
    sticky: true,
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    actions: (
      <>
        <Button label="Login" size="small" />
        <Button primary label="Get Started" size="small" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div style={{ padding: '20px', height: '150vh' }}>
          <h2>Scroll down to see sticky header</h2>
          <p>The header will stick to the top of the page as you scroll.</p>
        </div>
      </div>
    ),
  ],
};

export const MinimalLogo: Story = {
  args: {
    logo: '🎨',
  },
};

export const NoNav: Story = {
  args: {
    logo: 'HyUI',
    actions: (
      <>
        <Button label="Login" size="small" />
        <Button primary label="Sign Up" size="small" />
      </>
    ),
  },
};

export const ManyNavItems: Story = {
  args: {
    logo: 'HyUI',
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'Products', href: '#' },
      { label: 'Solutions', href: '#' },
      { label: 'Resources', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    actions: <Button primary label="Get Started" size="small" />,
  },
};

// Mobile Navigation Stories
export const MobileMenu: Story = {
  args: {
    logo: 'HYTALE',
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'Blog', href: '#' },
      { label: 'Media', href: '#' },
      { label: 'The Game', href: '#' },
      { label: 'Community', href: '#' },
    ],
    actions: (
      <>
        <Button label="Login" size="small" />
        <Button primary label="Register" size="small" />
      </>
    ),
  },
  globals: {
    viewport: { value: 'mobile1' },
  }
};

export const MobileMenuWithManyItems: Story = {
  args: {
    logo: 'HYTALE',
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'Blog', href: '#' },
      { label: 'Media', href: '#' },
      { label: 'The Game', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Updates', href: '#' },
      { label: 'Gallery', href: '#' },
      { label: 'Forums', href: '#' },
      { label: 'Wiki', href: '#' },
    ],
    actions: (
      <>
        <Button label="Login" size="small" />
        <Button primary label="Register" size="small" />
        <Button label="Pre-Purchase" size="small" />
      </>
    ),
  },
  globals: {
    viewport: { value: 'mobile1' },
  },
};

export const MobileMenuMinimal: Story = {
  args: {
    logo: 'HYTALE',
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'Blog', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
  globals: {
    viewport: { value: 'mobile1' },
  }
};

export const TabletView: Story = {
  args: {
    logo: 'HYTALE',
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'Blog', href: '#' },
      { label: 'Media', href: '#' },
      { label: 'The Game', href: '#' },
      { label: 'Community', href: '#' },
    ],
    actions: (
      <>
        <Button label="Login" size="small" />
        <Button primary label="Register" size="small" />
      </>
    ),
  },
  globals: {
    viewport: { value: 'tablet' },
  },
};
