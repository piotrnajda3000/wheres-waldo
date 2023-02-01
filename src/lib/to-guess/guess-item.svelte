<script lang="ts">
	import GuessImage from '@lib/guess-image/guess-image.svelte';

	export let src: string;
	export let name: string;
</script>

<div class="GuessItem">
	<p>{name}</p>
	<GuessImage {src} {name} />
</div>

<style>
	.GuessItem {
		display: flex;
		align-items: center;
		gap: 4px;

		font-size: 12px;
		color: black;
	}
</style>
