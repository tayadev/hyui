import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

export default defineConfig({
  plugins: [
    storybookTest({
      // This should match your Storybook config directory
      storybookScript: 'bun run storybook',
    }),
  ],
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright',
    },
    setupFiles: ['./.storybook/vitest.setup.ts'],
  },
});
