import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: UserConfig = {
	plugins: [sveltekit(), tsconfigPaths()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
