<script lang="ts">
	import { addPx } from '@lib/helpers/add-px';
	import type { Guess } from '@lib/level/level.conversations';
	import GuessItem from './components/guess-item.svelte';
	import TargetingBox from './components/targeting-box.svelte';
	import { afterUpdate, tick } from 'svelte';

	export let container: HTMLElement;
	export let guesses: Guess[];
	export let visible: boolean;

	let x: number;
	let y: number;
	let targetingBoxSize: number = 58;
	let guessItemWidth: number = 90;
	let ref: HTMLDivElement;
	let guessSide: 'left' | 'right';
	let mouseTrack = true;

	const containerClick = (node: HTMLDivElement) => {
		const handleContainerClick = (e: MouseEvent) => {
			visible = !visible;
			x = e.clientX + window.scrollX - container.offsetLeft;
			y = e.clientY + window.scrollY - container.offsetTop;
		};
		container.addEventListener('click', handleContainerClick);
		return {
			destroy() {
				container.removeEventListener('click', handleContainerClick);
			}
		};
	};

	const isOutOfBounds = () => {
		return (
			container &&
			ref &&
			container.getBoundingClientRect().right - guessItemWidth < ref.getBoundingClientRect().right
		);
	};

	const followMouseCursor = (node: HTMLDivElement) => {
		const handleMouseMove = (e: MouseEvent) => {
			if (mouseTrack) {
				x = e.clientX + window.scrollX - container.offsetLeft;
				y = e.clientY + window.scrollY - container.offsetTop;
			}
		};
		container.addEventListener('mousemove', handleMouseMove);
		return {
			destroy() {
				container.removeEventListener('mousemove', handleMouseMove);
			}
		};
	};

	const abilityToSelect = (node: HTMLDivElement) => {
		let timerOpen: any;

		const handleMouseDown = async () => {
			timerOpen = setTimeout(() => {
				if (!visible) {
					visible = true;
				}
			}, 200);

			mouseTrack = false;
		};

		const handleMouseUp = () => {
			mouseTrack = true;
			clearTimeout(timerOpen);
		};

		container.addEventListener('mousedown', handleMouseDown);
		container.addEventListener('mouseup', handleMouseUp);

		return {
			destroy() {
				container.removeEventListener('mousedown', handleMouseDown);
				container.removeEventListener('mouseup', handleMouseUp);
			}
		};
	};

	afterUpdate(() => {
		guessSide = isOutOfBounds() ? 'left' : 'right';
	});
</script>

{#if guesses.length}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		use:containerClick
		use:followMouseCursor
		use:abilityToSelect
		class="DropdownGuess"
		data-testid="dropdown"
		class:visible
		style:--x={addPx(x)}
		style:--y={addPx(y)}
		style:--targeting-box-size={addPx(targetingBoxSize)}
		bind:this={ref}
	>
		<TargetingBox size={targetingBoxSize} />
		<div
			data-testid="guesses"
			class="Guesses"
			style:left={guessSide === 'left' ? addPx(-guessItemWidth - targetingBoxSize) : 0}
		>
			{#each guesses as guess}
				<GuessItem {guess} width={guessItemWidth} />
			{/each}
		</div>
	</div>
{/if}

<style>
	.DropdownGuess {
		display: none;
		position: absolute;
		user-select: none;
		left: calc(var(--x) + var(--targeting-box-size) / 2);
		top: calc(var(--y) - var(--targeting-box-size) / 2);
	}
	.Guesses {
		position: absolute;
	}

	.visible {
		display: block;
	}
</style>
