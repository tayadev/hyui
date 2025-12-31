import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';
import { Card } from './Card';
import { Button } from './Button';
import { IconButton } from './IconButton';
import { Palette, Zap, Smartphone, Wrench, Target, BookOpen, Bell, Settings, User, Heart, Search, X } from 'lucide-react';
import './landingpage.css';

const meta = {
  title: 'HyUI/LandingPage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const LandingPageComponent = () => {
  return (
    <div className="landing-page">
      <Header
        logo="HyUI"
        sticky
        navItems={[
          { label: 'Home', href: '#', active: true },
          { label: 'Features', href: '#features' },
          { label: 'Components', href: '#components' },
          { label: 'Documentation', href: '#docs' },
        ]}
        actions={
          <>
            <Button label="Sign In" size="small" />
            <Button primary label="Get Started" size="small" />
          </>
        }
      />

      <section className="landing-page__hero">
        <div className="landing-page__container">
          <h1 className="landing-page__title">Build Beautiful UIs with HyUI</h1>
          <p className="landing-page__subtitle">
            A modern React component library inspired by Hytale's stunning design language.
            Create immersive interfaces with our carefully crafted components.
          </p>
          <div className="landing-page__hero-actions">
            <Button primary label="Get Started" size="large" />
            <Button label="View Documentation" size="large" />
          </div>
        </div>
      </section>

      <section id="features" className="landing-page__features">
        <div className="landing-page__container">
          <h2 className="landing-page__section-title">Features</h2>
          <div className="landing-page__grid">
            <Card
              title={<span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Palette size={20} /> Beautiful Design</span>}
              footer="Inspired by Hytale"
            >
              Stunning visual elements with golden accents and deep blue tones that
              create an immersive fantasy aesthetic.
            </Card>
            <Card
              title={<span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Zap size={20} /> Lightning Fast</span>}
              footer="Optimized Performance"
            >
              Built with performance in mind. Lightweight components that don't
              compromise on functionality.
            </Card>
            <Card
              title={<span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Smartphone size={20} /> Fully Responsive</span>}
              footer="Mobile-First Approach"
            >
              Works seamlessly across all devices. From desktop to mobile, your UI
              adapts beautifully.
            </Card>
            <Card
              title={<span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Wrench size={20} /> TypeScript Ready</span>}
              footer="Type-Safe Development"
            >
              Full TypeScript support with comprehensive type definitions for a
              better developer experience.
            </Card>
            <Card
              title={<span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Target size={20} /> Customizable</span>}
              footer="CSS Variables"
            >
              Easy theming with CSS custom properties. Adjust colors, spacing, and
              more to match your brand.
            </Card>
            <Card
              title={<span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><BookOpen size={20} /> Well Documented</span>}
              footer="Storybook Integration"
            >
              Comprehensive documentation and live examples in Storybook make it
              easy to get started.
            </Card>
          </div>
        </div>
      </section>

      <section id="components" className="landing-page__components">
        <div className="landing-page__container">
          <h2 className="landing-page__section-title">Component Showcase</h2>

          <div className="landing-page__component-demo">
            <h3 className="landing-page__demo-title">Buttons</h3>
            <div className="landing-page__button-grid">
              <Button primary label="Primary Large" size="large" />
              <Button label="Secondary Large" size="large" />
              <Button primary label="Primary Medium" size="medium" />
              <Button label="Secondary Medium" size="medium" />
              <Button primary label="Primary Small" size="small" />
              <Button label="Secondary Small" size="small" />
            </div>
          </div>

          <div className="landing-page__component-demo">
            <h3 className="landing-page__demo-title">Icon Buttons</h3>
            <div className="landing-page__icon-button-grid">
              <IconButton icon={<Bell size={20} />} ariaLabel="Notifications" size="large" />
              <IconButton icon={<Settings size={20} />} ariaLabel="Settings" size="large" />
              <IconButton icon={<User size={20} />} ariaLabel="Profile" size="large" />
              <IconButton icon={<Heart size={16} />} ariaLabel="Favorites" size="medium" />
              <IconButton icon={<Search size={16} />} ariaLabel="Search" size="medium" />
              <IconButton icon={<X size={12} />} ariaLabel="Close" size="small" />
            </div>
          </div>

          <div className="landing-page__component-demo">
            <h3 className="landing-page__demo-title">Cards</h3>
            <div className="landing-page__card-grid">
              <Card title="Simple Card">
                A basic card with just a title and content.
              </Card>
              <Card
                title="Card with Footer"
                footer="Footer information"
              >
                This card includes a footer section for additional metadata or actions.
              </Card>
              <Card
                title="Interactive Card"
                onClick={() => alert('Card clicked!')}
                footer="Click me!"
              >
                This card is clickable and has hover effects. Try clicking it!
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-page__cta">
        <div className="landing-page__container">
          <Card title="Ready to Get Started?">
            <div className="landing-page__cta-content">
              <p>
                Install HyUI today and start building beautiful interfaces for your
                next project. Join our growing community of developers.
              </p>
              <div className="landing-page__cta-actions">
                <Button primary label="Install Now" size="large" />
                <Button label="View on GitHub" size="large" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="landing-page__footer">
        <div className="landing-page__container">
          <div className="landing-page__footer-content">
            <div className="landing-page__footer-section">
              <h4>HyUI</h4>
              <p>A modern component library for React</p>
            </div>
            <div className="landing-page__footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#components">Components</a></li>
                <li><a href="#docs">Documentation</a></li>
              </ul>
            </div>
            <div className="landing-page__footer-section">
              <h4>Community</h4>
              <ul>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const Default: Story = {
  render: () => <LandingPageComponent />,
};

export const Mobile: Story = {
  render: () => <LandingPageComponent />,
  globals: {
    viewport: { value: 'mobile1' },
  },
};

export const Tablet: Story = {
  render: () => <LandingPageComponent />,
  globals: {
    viewport: { value: 'tablet' },
  },
};
