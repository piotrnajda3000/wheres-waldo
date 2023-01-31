<script lang="ts">
	import type { Guess } from '@lib/level/level.conversations';
	import GuessItem from './components/guess-item.svelte';
	import TargetingBox from './components/targeting-box.svelte';
	export let guesses: Guess[];
	export let visible: boolean;

	const styles = {
		targetingBox: {
			size: 45
		}
	};
</script>

{#if visible && guesses.length}
	<div class="DropdownGuess" data-testid="dropdown-guess">
		<TargetingBox {...styles.targetingBox} />
		<div data-testid="guesses" class="Guesses">
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
	}
</style>
