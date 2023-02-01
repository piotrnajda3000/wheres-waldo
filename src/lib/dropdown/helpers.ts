import type { Guess } from '@lib/level/level.conversations';

export const calcCoordinates = (e: MouseEvent, container: HTMLElement) => {
	return [
		e.clientX + window.scrollX - container.offsetLeft,
		e.clientY + window.scrollY - container.offsetTop
	];
};

export const getTargetingBoxRect = (ref: HTMLDivElement, targetingBoxSize: number) => {
	const left = ref.offsetLeft - targetingBoxSize;
	const top = ref.offsetTop;
	return new DOMRect(left, top, targetingBoxSize, targetingBoxSize);
};

export const getGuessRect = (guess: Guess, container: HTMLElement) => {
	const left = container.offsetWidth / ((1 / guess.x) * 100);
	const top = container.offsetHeight / ((1 / guess.y) * 100);
	return new DOMRect(left, top, guess.width, guess.height);
};
