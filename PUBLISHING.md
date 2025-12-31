# Publishing Guide for HyUI

This guide explains how to make HyUI usable as a component library in other projects.

## Setup Complete ✓

The following files have been configured to enable library publishing:

### 1. Package Configuration (`package.json`)
- Set `version` to "0.1.0"
- Removed `private: true` flag
- Added proper `main`, `module`, and `types` entry points
- Configured `exports` field for modern module resolution
- Added `peerDependencies` (react, react-dom, lucide-react)
- Moved react dependencies to `devDependencies`
- Added build scripts
- Added `files` field to specify what gets published
- Added metadata (description, keywords, license)

### 2. Library Build Config (`vite.config.lib.ts`)
- Configured Vite to build as a library
- Externalized peer dependencies (react, react-dom, lucide-react)
- Set up dual format output (ESM and CommonJS)
- Configured CSS bundling

### 3. TypeScript Config (`tsconfig.lib.json`)
- Configured to generate type declarations
- Excludes story files and dev-only files
- Outputs types to `dist/types`

### 4. Main Export (`src/index.ts`)
- Exports all components and their types
- Imports base CSS variables

### 5. NPM Ignore (`.npmignore`)
- Prevents source files, stories, and config from being published
- Only `dist/` and `README.md` will be included

### 6. Documentation (`README.md`)
- Installation instructions
- Usage examples
- Component list
- Customization guide

## How to Use in Other Projects

### Option 1: Publish to npm (Recommended for public use)

1. **Create an npm account** at https://www.npmjs.com/signup

2. **Login to npm**:
   ```bash
   npm login
   ```

3. **Update package.json** with your information:
   ```json
   {
     "name": "@yourname/hyui",  // or just "hyui" if available
     "author": "Your Name",
     "repository": {
       "type": "git",
       "url": "https://github.com/yourusername/hyui"
     }
   }
   ```

4. **Build the library**:
   ```bash
   bun run build
   ```

5. **Publish to npm**:
   ```bash
   npm publish --access public
   ```

6. **Install in other projects**:
   ```bash
   npm install @yourname/hyui lucide-react
   ```

### Option 2: Use as Local Package (For development/testing)

1. **Build the library**:
   ```bash
   bun run build
   ```

2. **Create a local link**:
   ```bash
   npm link
   ```

3. **In your other project**:
   ```bash
   npm link hyui
   ```

### Option 3: Install from Git Repository

1. **Push to GitHub** (or GitLab, etc.)

2. **Install in other projects**:
   ```bash
   npm install github:yourusername/hyui
   ```

### Option 4: Use as Local File Path

1. **Build the library**:
   ```bash
   bun run build
   ```

2. **In another project's package.json**:
   ```json
   {
     "dependencies": {
       "hyui": "file:../path/to/hyui"
     }
   }
   ```

## Using HyUI in Your Project

### 1. Install Dependencies

```bash
npm install hyui lucide-react
```

### 2. Import Styles

In your main entry file (e.g., `main.tsx`, `App.tsx`, or `_app.tsx`):

```tsx
import 'hyui/styles';
```

### 3. Import and Use Components

```tsx
import { Button, Card, Input, Header } from 'hyui';
import { Heart } from 'lucide-react';

function MyApp() {
  return (
    <div>
      <Header
        logo="My App"
        navItems={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      <Card title="Welcome to HyUI">
        <p>A beautiful component library</p>
        <Button primary label="Get Started" />
      </Card>

      <IconButton icon={<Heart />} ariaLabel="Favorite" />
    </div>
  );
}
```

## Build Commands

- `bun run build` - Build library for production
- `bun run build:lib` - Build JavaScript/CSS bundle
- `bun run build:types` - Generate TypeScript declarations
- `bun run storybook` - Run Storybook for development
- `bun run build-storybook` - Build static Storybook site

## Version Management

Follow semantic versioning (semver):

- **Patch** (0.1.0 → 0.1.1): Bug fixes
- **Minor** (0.1.0 → 0.2.0): New features, backward compatible
- **Major** (0.1.0 → 1.0.0): Breaking changes

Update version before publishing:
```bash
npm version patch  # or minor, or major
npm publish
```

## Distribution Files

After running `bun run build`, the `dist/` folder contains:

```
dist/
├── hyui.mjs          # ESM bundle
├── hyui.cjs          # CommonJS bundle
├── hyui.css          # Bundled styles
└── types/
    └── index.d.ts    # TypeScript declarations
```

## Testing Before Publishing

1. Build the library:
   ```bash
   bun run build
   ```

2. Check the bundle size:
   ```bash
   du -sh dist/
   ```

3. Test with npm link (see Option 2 above)

4. Verify package contents:
   ```bash
   npm pack --dry-run
   ```

## Publishing Checklist

- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md` (if you create one)
- [ ] Build library: `bun run build`
- [ ] Test in a sample project
- [ ] Commit all changes
- [ ] Tag release: `git tag v0.1.0`
- [ ] Push to GitHub: `git push && git push --tags`
- [ ] Publish to npm: `npm publish`

## Troubleshooting

### "Cannot find module 'hyui/styles'"

Make sure you built the library first:
```bash
bun run build
```

### Peer dependency warnings

Users need to install peer dependencies:
```bash
npm install react react-dom lucide-react
```

### TypeScript errors in consuming project

Ensure the consuming project's `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "esModuleInterop": true
  }
}
```

## Next Steps

1. Set up GitHub Actions for automated publishing
2. Add CHANGELOG.md for version tracking
3. Set up automated testing
4. Create a documentation website
5. Add code coverage reports
6. Set up Chromatic for visual testing
