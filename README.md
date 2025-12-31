# HyUI

A modern React component library inspired by Hytale's stunning design language. Build immersive interfaces with carefully crafted components featuring golden accents and deep blue tones.

## TODO

what font do we use? The others have been using hebden incised, but we dont actually have a license for it. https://www.lewismcguffie.com/Hebden-Typeface-1

## Installation

```bash
npm install hyui lucide-react
# or
yarn add hyui lucide-react
# or
pnpm add hyui lucide-react
# or
bun add hyui lucide-react
```

## Usage

### Import Styles

First, import the CSS file in your app's entry point:

```tsx
import 'hyui/styles';
```

### Use Components

```tsx
import { Button, Card, Input, Header } from 'hyui';

function App() {
  return (
    <div>
      <Header
        logo="My App"
        navItems={[
          { label: 'Home', href: '/', active: true },
          { label: 'About', href: '/about' },
        ]}
        actions={<Button primary label="Get Started" />}
      />

      <Card title="Welcome">
        <p>Start building with HyUI components</p>
      </Card>

      <Button primary label="Click me" onClick={() => alert('Hello!')} />
    </div>
  );
}
```

## Components

HyUI includes the following components:

### Core Components
- **Button** - Primary and secondary button variants with three sizes
- **IconButton** - Square buttons for icons with hover effects
- **Card** - Content container with decorative corner decals

### Navigation
- **Header** - Responsive header with mobile hamburger menu

### Forms
- **Input** - Text input with labels, errors, and helper text
- **Textarea** - Multi-line text input
- **Select** - Dropdown selection with custom styling
- **Checkbox** - Custom checkbox with animations
- **Radio** - Radio buttons for single selection

## Features

- 🎨 **Beautiful Design** - Inspired by Hytale's fantasy aesthetic
- ⚡ **Lightning Fast** - Lightweight and optimized components
- 📱 **Fully Responsive** - Mobile-first approach
- 🔧 **TypeScript Ready** - Full type definitions included
- 🎯 **Customizable** - CSS variables for easy theming
- 📚 **Well Documented** - Comprehensive Storybook documentation

## Customization

HyUI uses CSS custom properties for theming. You can override these in your own CSS:

```css
:root {
  --color-primary: #FCE06F;
  --color-primary-hover: #FAD155;
  --color-secondary: #1F2C40;
  --font-primary: 'Hebden Incised', sans-serif;
  --font-secondary: 'Poppins', sans-serif;
  /* ... more variables */
}
```

## Development

```bash
# Install dependencies
bun install

# Start Storybook
bun run storybook

# Build library
bun run build

# Lint code
bun run lint

# Run tests
bun run build-storybook  # Build Storybook first
bun run test-storybook   # Run Storybook tests
```

## Documentation

### Live Storybook

View the live component documentation:
`https://<username>.github.io/<repository-name>/`

The Storybook is automatically deployed to GitHub Pages on every push to `main`.

## CI/CD

The project uses GitHub Actions for continuous integration and deployment:

### Continuous Integration (`ci.yml`)
- **Automated Testing** - Runs on every push and pull request
- **Linting** - Ensures code quality
- **Storybook Tests** - Validates all component stories
- **Build Verification** - Checks library builds successfully
- **Artifact Upload** - Build outputs available for download

### Storybook Deployment (`deploy-storybook.yml`)
- **Automatic Deployment** - Deploys Storybook to GitHub Pages on every push to `main`
- **Live Documentation** - Component documentation always up-to-date

See `.github/workflows/` for workflow details and `GITHUB_PAGES_SETUP.md` for setup instructions.

## License

MIT

## Credits

Designed and inspired by the [Hytale](https://hytale.com/) visual language.
