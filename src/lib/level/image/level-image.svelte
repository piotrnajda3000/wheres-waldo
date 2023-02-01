<script lang="ts">
	import Dropdown from '@lib/dropdown/dropdown.svelte';
	import { clickOutside } from '@lib/actions/click-outside';
	import { levelImages, notGuessedYet } from '../level.conversations';
	import GuessHitboxes from '@lib/debug/guess-hitboxes.svelte';

	export let level: number = 1;

	const levelImage = levelImages.get(level);

	let container: HTMLDivElement;
	let dropdown: Dropdown;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	data-testid="level-image"
	use:clickOutside={() => {
		dropdown.setVisible(false);
	}}
	class="LevelImage"
	bind:this={container}
	on:click={dropdown.onContainerClick}
	on:mousemove={dropdown.getVisible() ? dropdown.onContainerMouseMove : undefined}
>
	<!-- <GuessHitboxes /> -->
	<Dropdown {container} guesses$={$notGuessedYet} bind:this={dropdown} />
	<img src={levelImage} alt={`Level ${level}`} />
</div>

<style>
	.LevelImage {
		position: relative;
		clip-path: inset(0);
		overflow: hidden;
	}
</style>
