import { derived, writable } from 'svelte/store';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { db } from '#firebase/firebase';

export interface Guess {
	name: string;
	src: string;
	width: number;
	height: number;
	x: number;
	y: number;
	guessed: boolean;
}

export const createGuessesStore = () => {
	const { update, subscribe } = writable<Guess[]>([], (set) => {
		const messagesQuery = query(collection(db, 'guesses'));
		return onSnapshot(messagesQuery, (snapshot) => {
			set(
				snapshot.docChanges().map((change) => ({ ...change.doc.data(), guessed: false } as Guess))
			);
		});
	});
	return {
		subscribe,
		selectGuess: (guess: Guess) => {
			update((guesses) => {
				const index = guesses.findIndex((g) => g.src === guess.src);
				guesses[index].guessed = true;
				return guesses;
			});
		}
	};
};

export const guesses = createGuessesStore();

export const notGuessedYet = derived<typeof guesses, Guess[]>(guesses, ($guesses, set) => {
	set($guesses.filter((guess) => !guess.guessed));
});

export const levelImages = new Map<number, string>([[1, '/images/level-1.jpg']]);
