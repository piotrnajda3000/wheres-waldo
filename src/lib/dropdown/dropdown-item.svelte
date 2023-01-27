<script lang="ts">
	import { calcItemRect, items } from '@lib/items';

	export let name: string;
	export let src: string;

	let scrollX: number;
	let scrollY: number;

	const overlap = (item) => {
		const targetingBox = document
			.querySelector('[data-js="targetingBox"]')!
			.getBoundingClientRect();

		const itemRect = calcItemRect(item);

		return !(
			targetingBox.top + scrollY > itemRect.bottom ||
			targetingBox.right + scrollX < itemRect.left ||
			targetingBox.bottom + scrollY < itemRect.top ||
			targetingBox.left + scrollX > itemRect.right
		);
	};

	const validateSelection = () => {
		const itemBox = items.find((item) => item.name === name)!;
		return overlap(itemBox);
	};
</script>

<svelte:window bind:scrollX bind:scrollY />

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
