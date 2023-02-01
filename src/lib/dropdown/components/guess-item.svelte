<script lang="ts">
	import GuessImage from '@lib/guess-image/guess-image.svelte';
	import { addPx } from '@lib/helpers/add-px';
	import type { Guess } from '@lib/level/level.conversations';
	import { createEventDispatcher } from 'svelte';

	export let guess: Guess;
	export let width: number;

	const dispatch = createEventDispatcher();
</script>

<div
	class="GuessItem"
	style:--width={addPx(width)}
	on:mouseup={() => {
		dispatch('selectGuess', { guess });
	}}
>
	<GuessImage src={guess.src} name={guess.name} />
	<p>{guess.name}</p>
</div>

<style>
	* {
		user-select: none;
	}

	.GuessItem {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4px;

		width: var(--width);
		height: 58px;
		padding: 4px;

		background: hsl(0, 0%, 94%);
		color: hsl(0, 0%, 8%);
	}

	p {
		font-size: 12px;
	}

	.GuessItem:hover {
		cursor: pointer;
		background: white;
		color: black;
	}
</style>
