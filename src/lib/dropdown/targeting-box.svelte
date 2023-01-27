<script lang="ts">
	import { onMount } from 'svelte';
	import { nodes } from './dropdown.store';

	const appendPx = (n: number) => `${n}px`;

	export let size: number;

	const borderSize = 3;

	let node: HTMLDivElement;
	onMount(() => {
		nodes.add('targetingBox', node);
	});
</script>

<div
	bind:this={node}
	class="TargetingBox"
	draggable="false"
	style:left={appendPx(-size)}
	style:width={appendPx(size)}
	style:height={appendPx(size)}
	style:border={`${appendPx(borderSize)} solid white`}
/>

<style>
	.TargetingBox {
		position: absolute;
	}
</style>
