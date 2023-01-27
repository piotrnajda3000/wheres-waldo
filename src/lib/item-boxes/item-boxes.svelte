<script lang="ts">
	import { items } from '@lib/items';
</script>

{#each items as { name, width, height, x, y }}
	<div
		class="item-box"
		style:width="{width}px"
		style:height="{height}px"
		style:left="{x}px"
		style:top="{y}px"
	/>
{/each}

<style>
	.item-box {
		position: absolute;
		background: red;
		z-index: 2;
	}
</style>
