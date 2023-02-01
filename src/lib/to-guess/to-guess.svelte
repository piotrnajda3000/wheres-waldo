<script lang="ts">
	import { notGuessedYet } from '@lib/level/level.conversations';
	import GuessItem from './guess-item.svelte';
</script>

<div class="ToGuess">
	{#each $notGuessedYet as { src, name }}
		<GuessItem {src} {name} />
	{/each}
</div>

<style>
	.ToGuess {
		display: flex;
		align-items: center;
		gap: 8px;

		height: 34px;
		padding: 4px;

		background: hsl(0, 0%, 94%);
	}
</style>
