# GitHub Actions Workflows

This directory contains the CI/CD workflows for HyUI.

## Workflows

### CI (`ci.yml`)

Runs on every push to `main` and on all pull requests.

### Deploy Storybook (`deploy-storybook.yml`)

Automatically deploys Storybook to GitHub Pages on every push to `main`.

**Jobs:**

1. **Build**
   - Builds Storybook (`bun run build-storybook`)
   - Uploads static site as artifact

2. **Deploy**
   - Deploys the built Storybook to GitHub Pages
   - Sets up environment URL for easy access

**Access:** Once deployed, Storybook will be available at:
`https://<username>.github.io/<repository-name>/`

---

## CI Workflow (`ci.yml`)

**Jobs:**

1. **Test**
   - Installs dependencies with Bun
   - Installs Playwright browsers for testing
   - Runs linting (`bun run lint`)
   - Builds Storybook (`bun run build-storybook`)
   - Runs Storybook tests (`bun run test-storybook`)
   - Builds the library (`bun run build`)

2. **Build and Verify**
   - Builds the library
   - Verifies all expected output files exist:
     - `dist/hyui.mjs` (ESM bundle)
     - `dist/hyui.cjs` (CommonJS bundle)
     - `dist/hyui.css` (CSS bundle)
     - `dist/types/` (TypeScript declarations)
   - Displays bundle sizes
   - Uploads build artifacts (retained for 7 days)

## Running Tests Locally

To run the same tests that CI runs:

```bash
# Install dependencies
bun install

# Install Playwright browsers
bunx playwright install --with-deps chromium

# Run linting
bun run lint

# Build Storybook
bun run build-storybook

# Run Storybook tests (requires Storybook to be built first)
bun run test-storybook

# Build library
bun run build
```

## Test Runner

The project uses `@storybook/test-runner` which:
- Runs all Storybook stories as tests
- Verifies stories render without errors
- Can include custom accessibility and interaction tests
- Uses Playwright under the hood

Configuration: `.storybook/test-runner.ts`

## Notes

- The workflow uses Bun for faster dependency installation and script execution
- Playwright browsers are cached between runs for faster CI
- Build artifacts are uploaded and can be downloaded from the Actions tab
- The workflow will fail if any of the required build outputs are missing
