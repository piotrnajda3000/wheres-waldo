import type { Item } from './items.types';

export const getItemBounds = (item: Item, imageWrapper: HTMLDivElement) => {
	const { x, y, width, height } = item;

	const { width: imageWidth, height: imageHeight } = imageWrapper.getBoundingClientRect();

	const topPx = imageHeight / ((1 / y) * 100);
	const leftPx = imageWidth / ((1 / x) * 100);

	return {
		top: topPx,
		right: leftPx + width,
		bottom: topPx + height,
		left: leftPx
	};
};
