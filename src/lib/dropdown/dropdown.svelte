<script lang="ts">
	import { addPx } from '@lib/helpers/add-px';
	import type { Guess } from '@lib/level/level.conversations';
	import GuessItem from './components/guess-item.svelte';
	import TargetingBox from './components/targeting-box.svelte';
	import { afterUpdate } from 'svelte';
	import { followMouseCursor } from '@lib/actions/follow-mouse-cursor';
	import { containerClick } from '@lib/actions/container-click';
	import { calcCoordinates } from './helpers';

	export let container: HTMLElement;
	export let guesses: Guess[];
	export let visible: boolean;

	let x: number;
	let y: number;
	let targetingBoxSize = 58;
	let guessItemWidth = 90;
	let ref: HTMLDivElement;
	let guessSide: 'left' | 'right';
	let mouseTrack = true;

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
		const isOutOfBounds = () => {
			return (
				container &&
				ref &&
				container.getBoundingClientRect().right - guessItemWidth < ref.getBoundingClientRect().right
			);
		};
		guessSide = isOutOfBounds() ? 'left' : 'right';
	});
</script>

{#if guesses.length}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		use:containerClick={container}
		use:followMouseCursor={container}
		on:mousemove_container={(e) => {
			if (mouseTrack) {
				[x, y] = calcCoordinates(e, container);
			}
		}}
		on:click_container={(e) => {
			visible = !visible;
			[x, y] = calcCoordinates(e, container);
		}}
		use:abilityToSelect
		class="Dropdown"
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
	.Dropdown {
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
