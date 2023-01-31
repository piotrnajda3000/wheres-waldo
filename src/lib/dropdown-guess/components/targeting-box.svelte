<script lang="ts">
	import { addPx } from '@lib/helpers/append-px';

	export let size: number;
</script>

<div
	data-testid="targeting-box"
	class="TargetingBox"
	style:height={`${size}px`}
	style:width={`${size}px`}
	style:left={addPx(-size)}
/>

<style>
	.TargetingBox {
		position: absolute;
		border: 3px solid white;
	}
</style>
