<script lang="ts">
	import { items } from '@lib/items/items.conversations';
	let refs: HTMLDivElement[] = [];

	$: {
		if (refs) {
			console.log('Blue dot x & y relative to image', refs[0]?.offsetLeft, refs[0]?.offsetTop);
		}
	}
</script>

{#each $items as { name, width, height, x, y }, i}
	<div
		class="item-box"
		style:width="{width}px"
		style:height="{height}px"
		style:left="{x}%"
		style:top="{y}%"
		bind:this={refs[i]}
	/>
{/each}

<style>
	.item-box {
		position: absolute;
		background: red;
		z-index: 2;
	}
</style>
