import { render, screen } from '@testing-library/svelte';
import LevelImage from './level-image.svelte';

describe('LevelImage', () => {
	it('Given level one, it displays the level one image', () => {
		render(LevelImage, { props: { level: 1 } });
		expect(screen.getByAltText('Level 1')).toBeInTheDocument();
	});
});
