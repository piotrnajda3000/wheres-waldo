<script lang="ts">
	import { items } from '@lib/items/items.conversations';
	import { getItemBounds } from '@lib/items/items.utils';
	import type { DropdownNodes } from './dropdown.store';

	export let name: string;
	export let src: string;
	export let imageWrapper: HTMLDivElement;
	export let nodes: Required<DropdownNodes>;

	const getTargetingBoxBounds = () => {
		const { offsetLeft, offsetTop } = nodes.dropdown;
		const { offsetLeft: offsetLeftTargeting, offsetTop: offsetTopTargeting } = nodes.targetingBox;

		const topPx = offsetTop + offsetTopTargeting;
		const leftPx = offsetLeft + offsetLeftTargeting;

		return {
			top: topPx,
			right: leftPx + nodes.targetingBox.offsetWidth,
			bottom: topPx + nodes.targetingBox.offsetHeight,
			left: leftPx
		};
	};

	const overlap = () => {
		const item = $items.find((item) => item.name === name)!;

		const targetingBoxRect = getTargetingBoxBounds();
		const itemRect = getItemBounds(item, imageWrapper);

		return !(
			targetingBoxRect.top > itemRect.bottom ||
			targetingBoxRect.right < itemRect.left ||
			targetingBoxRect.bottom < itemRect.top ||
			targetingBoxRect.left > itemRect.right
		);
	};

	const validateSelection = () => {
		console.log(overlap());
	};
</script>

<div class="item" draggable="false" on:mouseup={validateSelection}>
	<img {src} alt={name} draggable="false" />
	<p>{name}</p>
</div>

<style>
	* {
		user-select: none;
	}

	.item {
		padding: 4px;
		width: 90px;
		height: 58px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: hsl(0, 0%, 94%);
		color: hsl(0, 0%, 8%);
		gap: 2px;
	}

	.item p {
		margin: 0;
	}

	.item img {
		width: 32px;
		height: 32px;
		object-fit: contain;
	}
	.item p {
		font-size: 12px;
	}

	.item:hover {
		background: white;
		color: black;
		cursor: pointer;
	}
</style>
