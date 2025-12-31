import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'HyUI/Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Subscribe to newsletter',
    defaultChecked: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const WithError: Story = {
  args: {
    label: 'I agree to the privacy policy',
    error: 'You must accept the privacy policy',
  },
};

export const Small: Story = {
  args: {
    label: 'Small checkbox',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium checkbox (default)',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large checkbox',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const MultipleCheckboxes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Option 1" />
      <Checkbox label="Option 2" defaultChecked />
      <Checkbox label="Option 3" />
      <Checkbox label="Option 4" disabled />
    </div>
  ),
};

export const CheckboxGroup: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: '12px', color: '#D8E2F0', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>
        Select your interests:
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Checkbox label="Gaming" defaultChecked />
        <Checkbox label="Programming" defaultChecked />
        <Checkbox label="Music" />
        <Checkbox label="Sports" />
        <Checkbox label="Reading" />
      </div>
    </div>
  ),
};
