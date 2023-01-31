<script lang="ts">
	import DropdownGuess from '@lib/dropdown-guess/dropdown-guess.svelte';
	import { levelImages } from '../level.conversations';
	import { guesses } from '../level.conversations';

	export let level: number = 1;

	const levelImage = levelImages.get(level);

	let isDropdownVisible = false;
	const handleImageClick = () => {
		isDropdownVisible = !isDropdownVisible;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div data-testid="level-image" class="LevelImage" on:click={handleImageClick}>
	<DropdownGuess visible={isDropdownVisible} guesses={$guesses} />
	<img src={levelImage} alt={`Level ${level}`} />
</div>

<style>
	.LevelImage {
		position: relative;
	}
</style>
