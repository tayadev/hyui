import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Select } from './Select';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';
import { Button } from './Button';
import { Card } from './Card';
import './form-demo.css';

const meta = {
  title: 'HyUI/Form/Combined Demo',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteForm: Story = {
  render: () => (
    <Card title="Create Account" className="form-demo">
      <form className="form-demo__form">
        <div className="form-demo__section">
          <h3 className="form-demo__section-title">Personal Information</h3>

          <div className="form-demo__row">
            <Input
              label="First Name"
              placeholder="John"
              fullWidth
              helperText="Enter your first name"
            />
            <Input
              label="Last Name"
              placeholder="Doe"
              fullWidth
              helperText="Enter your last name"
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            placeholder="john.doe@example.com"
            fullWidth
            helperText="We'll never share your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter a strong password"
            fullWidth
            helperText="At least 8 characters"
          />
        </div>

        <div className="form-demo__section">
          <h3 className="form-demo__section-title">Account Type</h3>

          <div className="form-demo__radio-group">
            <Radio label="Free Account" name="accountType" defaultChecked />
            <Radio label="Pro Account ($9/month)" name="accountType" />
            <Radio label="Enterprise Account (Contact Sales)" name="accountType" />
          </div>
        </div>

        <div className="form-demo__section">
          <h3 className="form-demo__section-title">Preferences</h3>

          <Select
            label="Country"
            placeholder="Select your country"
            fullWidth
            options={[
              { value: 'us', label: 'United States' },
              { value: 'uk', label: 'United Kingdom' },
              { value: 'ca', label: 'Canada' },
              { value: 'au', label: 'Australia' },
              { value: 'de', label: 'Germany' },
              { value: 'fr', label: 'France' },
            ]}
            helperText="Select your country of residence"
          />

          <Select
            label="Language"
            placeholder="Select your language"
            fullWidth
            options={[
              { value: 'en', label: 'English' },
              { value: 'es', label: 'Spanish' },
              { value: 'fr', label: 'French' },
              { value: 'de', label: 'German' },
              { value: 'ja', label: 'Japanese' },
            ]}
            helperText="Choose your preferred language"
          />
        </div>

        <div className="form-demo__section">
          <h3 className="form-demo__section-title">Tell Us About Yourself</h3>

          <Textarea
            label="Bio"
            placeholder="Tell us about yourself..."
            fullWidth
            rows={5}
            helperText="Maximum 500 characters"
          />
        </div>

        <div className="form-demo__section">
          <h3 className="form-demo__section-title">Notifications</h3>

          <div className="form-demo__checkbox-group">
            <Checkbox label="Email notifications" defaultChecked />
            <Checkbox label="SMS notifications" />
            <Checkbox label="Push notifications" defaultChecked />
            <Checkbox label="Weekly newsletter" />
          </div>
        </div>

        <div className="form-demo__section">
          <div className="form-demo__checkbox-group">
            <Checkbox
              label="I agree to the Terms of Service and Privacy Policy"
              defaultChecked
            />
          </div>
        </div>

        <div className="form-demo__actions">
          <Button label="Cancel" size="large" />
          <Button primary label="Create Account" size="large" />
        </div>
      </form>
    </Card>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <Card title="Contact Us" className="form-demo">
      <form className="form-demo__form">
        <Input
          label="Name"
          placeholder="Your name"
          fullWidth
        />

        <Input
          label="Email"
          type="email"
          placeholder="your.email@example.com"
          fullWidth
        />

        <Input
          label="Subject"
          placeholder="How can we help?"
          fullWidth
        />

        <Textarea
          label="Message"
          placeholder="Type your message here..."
          fullWidth
          rows={6}
        />

        <Select
          label="Priority"
          fullWidth
          options={[
            { value: 'low', label: 'Low' },
            { value: 'medium', label: 'Medium' },
            { value: 'high', label: 'High' },
          ]}
          defaultValue="medium"
        />

        <div className="form-demo__actions">
          <Button primary label="Send Message" size="large" fullWidth />
        </div>
      </form>
    </Card>
  ),
};

export const SettingsForm: Story = {
  render: () => (
    <Card title="Settings" className="form-demo">
      <form className="form-demo__form">
        <div className="form-demo__section">
          <h3 className="form-demo__section-title">Profile</h3>

          <Input
            label="Display Name"
            defaultValue="JohnDoe123"
            fullWidth
          />

          <Input
            label="Website"
            type="url"
            placeholder="https://example.com"
            fullWidth
          />
        </div>

        <div className="form-demo__section">
          <h3 className="form-demo__section-title">Privacy</h3>

          <div className="form-demo__radio-group">
            <Radio label="Public Profile" name="privacy" defaultChecked />
            <Radio label="Friends Only" name="privacy" />
            <Radio label="Private" name="privacy" />
          </div>
        </div>

        <div className="form-demo__section">
          <h3 className="form-demo__section-title">Email Preferences</h3>

          <div className="form-demo__checkbox-group">
            <Checkbox label="Product updates" defaultChecked />
            <Checkbox label="Security alerts" defaultChecked />
            <Checkbox label="Marketing emails" />
            <Checkbox label="Community digest" defaultChecked />
          </div>
        </div>

        <div className="form-demo__actions">
          <Button label="Reset" />
          <Button primary label="Save Changes" />
        </div>
      </form>
    </Card>
  ),
};

export const FormWithErrors: Story = {
  render: () => (
    <Card title="Sign Up" className="form-demo">
      <form className="form-demo__form">
        <Input
          label="Username"
          defaultValue="ab"
          fullWidth
          error="Username must be at least 3 characters"
        />

        <Input
          label="Email"
          type="email"
          defaultValue="invalid-email"
          fullWidth
          error="Please enter a valid email address"
        />

        <Input
          label="Password"
          type="password"
          defaultValue="weak"
          fullWidth
          error="Password must be at least 8 characters"
        />

        <Select
          label="Country"
          fullWidth
          options={[
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
          ]}
          error="Please select your country"
        />

        <Checkbox
          label="I agree to the terms and conditions"
          error="You must accept the terms and conditions"
        />

        <div className="form-demo__actions">
          <Button primary label="Sign Up" size="large" fullWidth />
        </div>
      </form>
    </Card>
  ),
};

export const CompactForm: Story = {
  render: () => (
    <Card title="Quick Survey" className="form-demo form-demo--compact">
      <form className="form-demo__form">
        <Input
          label="Name"
          placeholder="Your name"
          size="small"
          fullWidth
        />

        <Select
          label="How did you hear about us?"
          size="small"
          fullWidth
          options={[
            { value: 'search', label: 'Search Engine' },
            { value: 'social', label: 'Social Media' },
            { value: 'friend', label: 'Friend' },
            { value: 'other', label: 'Other' },
          ]}
        />

        <div className="form-demo__checkbox-group">
          <Checkbox label="Subscribe to updates" size="small" />
        </div>

        <div className="form-demo__actions">
          <Button primary label="Submit" size="small" fullWidth />
        </div>
      </form>
    </Card>
  ),
};
