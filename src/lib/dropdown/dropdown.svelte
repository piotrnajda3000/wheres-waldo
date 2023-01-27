<script lang="ts">
	import { items } from '@lib/items/items.conversations';
	import { onMount } from 'svelte';
	import DropdownItem from './dropdown-item.svelte';
	import { nodes } from './dropdown.store';
	import TargetingBox from './targeting-box.svelte';

	const targetingBoxSize = 57;
	const offset = { x: targetingBoxSize / 2, y: -targetingBoxSize / 2 };

	export let imageWrapper: HTMLDivElement;
	export let isVisible: boolean;
	export let mouse: { x: number; y: number };

	let node: HTMLDivElement;
	onMount(() => {
		nodes.add('dropdown', node);
	});
</script>

<div
	class="Dropdown"
	bind:this={node}
	class:isVisible
	style:left={isVisible ? `${mouse.x + offset.x - imageWrapper.offsetLeft}px` : null}
	style:top={isVisible ? `${mouse.y + offset.y - imageWrapper.offsetTop}px` : null}
	draggable="false"
>
	<TargetingBox size={targetingBoxSize} />
	{#if $nodes}
		{#each $items as { name, src }}
			<DropdownItem {name} {src} {imageWrapper} nodes={$nodes} />
		{/each}
	{/if}
</div>

<style>
	.Dropdown {
		position: absolute;
		user-select: none;
		display: none;
	}
	.isVisible {
		display: block;
	}
</style>
