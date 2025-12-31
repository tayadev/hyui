import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';

const meta = {
  title: 'HyUI/Form/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'default-group',
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected option',
    name: 'checked-group',
    defaultChecked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    name: 'no-label-group',
  },
};

export const Small: Story = {
  args: {
    label: 'Small radio',
    size: 'small',
    name: 'small-group',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium radio (default)',
    size: 'medium',
    name: 'medium-group',
  },
};

export const Large: Story = {
  args: {
    label: 'Large radio',
    size: 'large',
    name: 'large-group',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    name: 'disabled-group',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    name: 'disabled-checked-group',
    disabled: true,
    defaultChecked: true,
  },
};

export const RadioGroup: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: '12px', color: '#D8E2F0', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>
        Select a payment method:
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Radio label="Credit Card" name="payment" defaultChecked />
        <Radio label="PayPal" name="payment" />
        <Radio label="Bank Transfer" name="payment" />
        <Radio label="Cryptocurrency" name="payment" />
      </div>
    </div>
  ),
};

export const RadioGroupSizes: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: '12px', color: '#D8E2F0', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>
        Select difficulty:
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Radio label="Easy" name="difficulty" size="small" />
        <Radio label="Medium" name="difficulty" size="medium" defaultChecked />
        <Radio label="Hard" name="difficulty" size="large" />
      </div>
    </div>
  ),
};

export const MultipleGroups: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <div style={{ marginBottom: '12px', color: '#D8E2F0', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>
          Delivery method:
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Radio label="Standard (5-7 days)" name="delivery" defaultChecked />
          <Radio label="Express (2-3 days)" name="delivery" />
          <Radio label="Next Day" name="delivery" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: '12px', color: '#D8E2F0', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>
          Gift wrapping:
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Radio label="No gift wrap" name="giftwrap" defaultChecked />
          <Radio label="Standard wrap" name="giftwrap" />
          <Radio label="Premium wrap" name="giftwrap" />
        </div>
      </div>
    </div>
  ),
};
