import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright'

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
      provider: playwright(),
    },
    setupFiles: ['./.storybook/vitest.setup.ts'],
  },
});
