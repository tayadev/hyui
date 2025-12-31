import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';

const meta = {
  title: 'HyUI/Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Description',
    placeholder: 'Describe your project',
    helperText: 'Maximum 500 characters',
  },
};

export const WithError: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    error: 'Bio is required',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Textarea',
    size: 'small',
    placeholder: 'Small size',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Textarea',
    size: 'medium',
    placeholder: 'Medium size (default)',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Textarea',
    size: 'large',
    placeholder: 'Large size',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Textarea',
    placeholder: 'This textarea spans full width',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'Cannot edit this',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Comments',
    defaultValue: 'This is a pre-filled comment.\n\nIt has multiple lines.',
  },
};

export const WithRows: Story = {
  args: {
    label: 'Custom Height',
    placeholder: 'This has 10 rows',
    rows: 10,
  },
};
