<script lang="ts">
	import type { Guess } from '@lib/level/level.conversations';
	import GuessItem from './components/guess-item.svelte';
	import TargetingBox from './components/targeting-box.svelte';
	export let guesses: Guess[];
	export let visible: boolean;

	const targetingBoxSize = 58;
</script>

{#if visible && guesses.length}
	<div class="DropdownGuess" data-testid="dropdown-guess">
		<TargetingBox size={targetingBoxSize} />
		<div data-testid="guesses" class="Guesses" style:--targeting-box-size={`${targetingBoxSize}px`}>
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
	}
	.Guesses {
		position: absolute;
		left: var(--targeting-box-size);
	}
</style>
