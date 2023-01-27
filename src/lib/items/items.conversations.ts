import { db } from '#firebase/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { writable } from 'svelte/store';
import type { Item } from './items.types';

export const items = writable<Item[]>([], (set) => {
	const messagesQuery = query(collection(db, 'items'));
	onSnapshot(messagesQuery, (snapshot) => {
		set(snapshot.docChanges().map((change) => change.doc.data() as Item));
	});
});
