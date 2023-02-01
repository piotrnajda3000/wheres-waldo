<script lang="ts">
	import { addPx } from '@lib/helpers/add-px';
	import { guesses, type Guess } from '@lib/level/level.conversations';
	import GuessItem from './components/guess-item.svelte';
	import TargetingBox from './components/targeting-box.svelte';
	import { afterUpdate } from 'svelte';
	import { calcCoordinates, getGuessRect, getTargetingBoxRect } from './helpers';
	import { overlap } from '@lib/helpers/overlap';

	export let container: HTMLElement;
	export let guesses$: Guess[];

	let visible: boolean;
	let x: number;
	let y: number;
	let targetingBoxSize = 58;
	let listWidth = 100;
	let listRef: HTMLDivElement;
	let ref: HTMLDivElement;
	let listPositionX: 'left' | 'right';
	let listPositionY: 'top' | 'bottom';
	let mouseTrack = true;

	export const setVisible = (_visible: boolean) => {
		visible = _visible;
	};

	export const getVisible = () => {
		return visible;
	};

	const abilityToSelect = (node: HTMLDivElement) => {
		let timerOpen: any;

		const handleMouseDown = async (e: MouseEvent) => {
			timerOpen = setTimeout(() => {
				if (!visible) {
					[x, y] = calcCoordinates(e, container);
					visible = true;
				}
			}, 200);
			mouseTrack = false;
		};

		const handleMouseUp = () => {
			mouseTrack = true;
			clearTimeout(timerOpen);
		};

		if (container) {
			container.addEventListener('mousedown', handleMouseDown);
			container.addEventListener('mouseup', handleMouseUp);
		}

		return {
			destroy() {
				container.removeEventListener('mousedown', handleMouseDown);
				container.removeEventListener('mouseup', handleMouseUp);
			}
		};
	};

	export const onContainerClick = (e: MouseEvent) => {
		[x, y] = calcCoordinates(e, container);
		visible = !visible;
	};

	export const onContainerMouseMove = (e: MouseEvent) => {
		if (mouseTrack) {
			[x, y] = calcCoordinates(e, container);
		}
	};

	afterUpdate(() => {
		if (container && ref && listRef) {
			const bottomEdgeMax =
				container.getBoundingClientRect().bottom - ref.getBoundingClientRect().height;
			const bottomEdgeList = ref.getBoundingClientRect().bottom + listRef.clientHeight;
			listPositionY = bottomEdgeList > bottomEdgeMax ? 'top' : 'bottom';

			const rightEdgeDropdown = ref.getBoundingClientRect().right;
			const rightEdgeMax = container.getBoundingClientRect().right - listWidth;
			listPositionX = rightEdgeDropdown > rightEdgeMax ? 'left' : 'right';
		}
	});

	const selectGuess = (e: CustomEvent<{ guess: Guess }>) => {
		if (
			overlap(getTargetingBoxRect(ref, targetingBoxSize), getGuessRect(e.detail.guess, container))
		) {
			guesses.selectGuess(e.detail.guess);
		}
	};
</script>

{#if guesses$.length}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
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
			style:left={listPositionX === 'left' ? addPx(-listWidth - targetingBoxSize) : 0}
			style:top={listPositionY === 'top' ? addPx(-listRef.clientHeight + targetingBoxSize) : 0}
			bind:this={listRef}
		>
			{#each guesses$ as guess}
				<GuessItem {guess} width={listWidth} on:selectGuess={selectGuess} />
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
