<script lang="ts">
	import DropdownGuess from '@lib/dropdown/dropdown.svelte';
	import { clickOutside } from '@lib/actions/click-outside';
	import { levelImages } from '../level.conversations';
	import { guesses } from '../level.conversations';
	import GuessHitboxes from '@lib/debug/guess-hitboxes.svelte';

	export let level: number = 1;

	const levelImage = levelImages.get(level);

	let container: HTMLDivElement;
	let isDropdownVisible = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	data-testid="level-image"
	use:clickOutside={() => {
		isDropdownVisible = false;
	}}
	class="LevelImage"
	bind:this={container}
>
	<GuessHitboxes />
	<DropdownGuess {container} guesses={$guesses} bind:visible={isDropdownVisible} />
	<img src={levelImage} alt={`Level ${level}`} />
</div>

<style>
	.LevelImage {
		position: relative;
		clip-path: inset(0);
	}
</style>
