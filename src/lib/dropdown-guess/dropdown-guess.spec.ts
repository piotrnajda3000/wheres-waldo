import { render, screen } from '@testing-library/svelte';
import DropdownGuess from './dropdown-guess.svelte';
import type { Guess } from '@lib/level/level.conversations';

const mockGuesses: Guess[] = [{ name: 'test', src: 'test' }];

describe('DropdownGuess', () => {
	describe('Not visible', () => {
		it("Doesn't show the dropdown", () => {
			render(DropdownGuess, { visible: false, guesses: mockGuesses });
			expect(screen.queryByTestId('dropdown-guess')).not.toBeInTheDocument();
		});
	});
	describe('Visible', () => {
		it("Given no items to guess, doesn't render the dropdown", () => {
			render(DropdownGuess, { visible: true, guesses: [] });
			expect(screen.queryByTestId('dropdown-guess')).not.toBeInTheDocument();
		});
		it('Given items to guess, it renders dropdown elements', () => {
			render(DropdownGuess, { visible: true, guesses: mockGuesses });
			expect(screen.getByTestId('targeting-box')).toBeInTheDocument();
			expect(screen.getByTestId('dropdown-guess')).toBeInTheDocument();
			mockGuesses.forEach((guess) => {
				expect(screen.getByText(guess.name)).toBeInTheDocument();
			});
		});
	});
});
