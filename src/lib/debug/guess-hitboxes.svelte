<script lang="ts">
	import { guesses } from '@lib/level/level.conversations';

	let refs: HTMLDivElement[] = [];
</script>

{#each $guesses as { name, width, height, x, y }, i}
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
