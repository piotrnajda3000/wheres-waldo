<script lang="ts">
	import DropdownGuess from '@lib/dropdown-guess/dropdown-guess.svelte';
	import type { ClickEvent } from '@lib/types/types';
	import { levelImages } from '../level.conversations';
	import { guesses } from '../level.conversations';

	export let level: number = 1;

	const levelImage = levelImages.get(level);

	let dropdown = {
		visible: false,
		x: 0,
		y: 0
	};

	const handleImageClick = (e: ClickEvent<HTMLDivElement>) => {
		dropdown = {
			visible: !dropdown.visible,
			x: e.clientX + window.scrollX,
			y: e.clientY + window.scrollY
		};
	};
</script>

<DropdownGuess {...dropdown} guesses={$guesses} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div data-testid="level-image" on:click={handleImageClick}>
	<img src={levelImage} alt={`Level ${level}`} />
</div>
