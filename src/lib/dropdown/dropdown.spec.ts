import { render, screen } from '@testing-library/svelte';
import Dropdown from './dropdown.svelte';
import type { Guess } from '@lib/level/level.conversations';

const mockGuesses: Guess[] = [{ name: 'test', src: 'test', x: 0, y: 0, width: 1, height: 1 }];

describe('Dropdown', () => {
	describe('Not visible', () => {
		it("Doesn't show the dropdown", () => {
			const result = render(Dropdown, { guesses: mockGuesses, container: document.body });
			result.component.setVisible(false);
			expect(screen.queryByTestId('dropdown')).not.toHaveClass('visible');
		});
	});
	describe('Visible', () => {
		it("Given no items to guess, doesn't render the dropdown", () => {
			const result = render(Dropdown, { guesses: [], container: document.body });
			result.component.setVisible(true);
			expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
		});
		it('Given items to guess, it renders dropdown elements', () => {
			const result = render(Dropdown, { guesses: mockGuesses, container: document.body });
			result.component.setVisible(true);
			expect(screen.getByTestId('targeting-box')).toBeInTheDocument();
			expect(screen.getByTestId('dropdown')).toBeInTheDocument();
			mockGuesses.forEach((guess) => {
				expect(screen.getByText(guess.name)).toBeInTheDocument();
			});
		});
		describe('Positioning', () => {
			it.skip('On click, user cursor is in the middle of the targeting box'); // Implemented
			it.skip("Follows user's cursor"); // Implemented
			it.skip("Targeting box does not move out of bounds of it's container"); // Implemented
		});
		describe('Guessing', () => {
			it.skip('Allows user to select a guess by holding down the mouse button'); // Implemented
		});
	});
});
