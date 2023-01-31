<script lang="ts">
	import { addPx } from '@lib/helpers/append-px';
	import type { Guess } from '@lib/level/level.conversations';
	import GuessItem from './components/guess-item.svelte';
	import TargetingBox from './components/targeting-box.svelte';

	export let guesses: Guess[];
	export let visible: boolean;
	export let x: number;
	export let y: number;

	const targetingBoxSize = 58;
</script>

{#if visible && guesses.length}
	<div
		class="DropdownGuess"
		data-testid="dropdown-guess"
		style:--x={addPx(x)}
		style:--y={addPx(y)}
		style:--targeting-box-size={addPx(targetingBoxSize)}
	>
		<TargetingBox size={targetingBoxSize} />
		<div data-testid="guesses" class="Guesses" style:--targeting-box-size={addPx(targetingBoxSize)}>
			{#each guesses as guess}
				<GuessItem {guess} />
			{/each}
		</div>
	</div>
{/if}

<style>
	.DropdownGuess {
		position: absolute;
		user-select: none;
		left: calc(var(--x) + var(--targeting-box-size) / 2);
		top: calc(var(--y) - var(--targeting-box-size) / 2);
	}
	.Guesses {
		position: absolute;
	}
</style>
