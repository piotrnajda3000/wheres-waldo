import { screen, render } from '@testing-library/svelte';

import Page from './+page.svelte';

describe('Index page', () => {
	it('Logo', () => {
		render(Page);
		expect(screen.getByTestId('logo')).toBeInTheDocument();
	});
	it("Current level's image", () => {
		render(Page);
		expect(screen.getByTestId('level-image')).toBeInTheDocument();
	});
});
