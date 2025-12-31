import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta = {
  title: 'HyUI/Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
];

export const Default: Story = {
  args: {
    options: basicOptions,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Select Country',
    placeholder: 'Choose a country',
    options: countryOptions,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Preferred Language',
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'fr', label: 'French' },
      { value: 'de', label: 'German' },
    ],
    helperText: 'Select your preferred language for communication',
  },
};

export const WithError: Story = {
  args: {
    label: 'Region',
    options: countryOptions,
    error: 'Please select a region',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Select',
    size: 'small',
    options: basicOptions,
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Select',
    size: 'medium',
    options: basicOptions,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Select',
    size: 'large',
    options: basicOptions,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Select',
    options: countryOptions,
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: basicOptions,
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: 'Package Type',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'basic', label: 'Basic' },
      { value: 'premium', label: 'Premium (Coming Soon)', disabled: true },
      { value: 'enterprise', label: 'Enterprise (Coming Soon)', disabled: true },
    ],
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    defaultValue: 'us',
  },
};
