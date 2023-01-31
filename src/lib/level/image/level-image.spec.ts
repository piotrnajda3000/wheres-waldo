import { render, screen } from '@testing-library/svelte';
import LevelImage from './level-image.svelte';
import userEvent from '@testing-library/user-event';

describe('LevelImage', () => {
	it('Given level one, it displays the level one image', () => {
		render(LevelImage);
		expect(screen.getByAltText('Level 1')).toBeInTheDocument();
	});
	it('Given guesses, on click, toggles guess dropdown', async () => {
		render(LevelImage);
		const levelImage = screen.getByTestId('level-image');
		expect(screen.queryByTestId('dropdown-guess')).not.toBeInTheDocument();
		await userEvent.click(levelImage);
		expect(await screen.findByTestId('dropdown-guess')).toBeVisible();
	});
});
