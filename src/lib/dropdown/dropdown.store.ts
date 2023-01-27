import { writable } from 'svelte/store';

export interface DropdownNodes {
	dropdown: HTMLElement;
	targetingBox: HTMLElement;
}

export const createNodeStore = () => {
	const { update, subscribe } = writable<DropdownNodes>();
	return {
		subscribe,
		add: (key: string, node: HTMLElement) => {
			update((nodes) => ({ ...nodes, [key]: node }));
		}
	};
};

export const nodes = createNodeStore();
