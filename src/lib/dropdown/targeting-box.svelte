<script lang="ts">
	const appendPx = (n: number) => `${n}px`;

	export let size: number;

	const borderSize = 3;
</script>

<div
	class="targetingBox"
	draggable="false"
	style:left={appendPx(-size)}
	style:width={appendPx(size)}
	style:height={appendPx(size)}
	style:border={`${appendPx(borderSize)} solid white`}
	data-js="targetingBox"
/>

<style>
	.targetingBox {
		position: absolute;
	}
</style>
