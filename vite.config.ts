/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tsconfigPaths()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./tests/setupTest.js'],
		coverage: {
			provider: 'istanbul',
			all: true,
			reportsDirectory: './tests/unit/coverage'
		}
	}
});
