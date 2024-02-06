/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: react(),
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['app/**/*.test.{js,jsx,ts,tsx}'],
    setupFiles: './vitest.setup.ts',
  },
});
