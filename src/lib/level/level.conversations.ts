import { writable } from 'svelte/store';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { db } from '#firebase/firebase';

export interface Guess {
	name: string;
	src: string;
}

export const guesses = writable<Guess[]>([], (set) => {
	const messagesQuery = query(collection(db, 'guesses'));
	return onSnapshot(messagesQuery, (snapshot) => {
		set(snapshot.docChanges().map((change) => change.doc.data() as Guess));
	});
});

export const levelImages = new Map<number, string>([[1, '/images/level-1.jpg']]);
