<script lang="ts">
	import { addPx } from '@lib/helpers/add-px';
	import type { Guess } from '@lib/level/level.conversations';

	export let guess: Guess;
	export let width: number;
</script>

<div class="GuessItem" style:--width={addPx(width)}>
	<img src={`images/${guess.src}`} alt={guess.name} />
	<p>{guess.name}</p>
</div>

<style>
	* {
		user-select: none;
	}

	.GuessItem {
		padding: 4px;
		width: var(--width);
		height: 58px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: hsl(0, 0%, 94%);
		color: hsl(0, 0%, 8%);
		gap: 2px;
	}

	.GuessItem p {
		margin: 0;
	}

	.GuessItem img {
		width: 32px;
		height: 32px;
		object-fit: contain;
	}
	.GuessItem p {
		font-size: 12px;
	}

	.GuessItem:hover {
		background: white;
		color: black;
		cursor: pointer;
	}
</style>
