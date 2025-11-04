import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      'src/tests/*.ts',
    ],
    browser: {
      enabled: true,
      provider: 'playwright',
      headless: true,
      instances: [
        { browser: 'chromium' }
      ],
    },
  },
})
