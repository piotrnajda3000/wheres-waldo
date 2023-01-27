<script lang="ts">
	import DropdownItem from './dropdown-item.svelte';
	import { items } from '../items';
	import TargetingBox from './targeting-box.svelte';

	const targetingBoxSize = 57;
	const offset = { x: targetingBoxSize / 2, y: -targetingBoxSize / 2 };

	let isVisible: boolean;

	let mouse = { x: 0, y: 0 };
	let mouseTrack = true;
	let scrollX: number, scrollY: number;

	const captureMousePos = (e: MouseEvent) => {
		if (mouseTrack) {
			mouse = { x: e.clientX + scrollX, y: e.clientY + scrollY };
		}
	};

	const selectAbility = (node: HTMLDivElement) => {
		let timer: any;

		const handleMouseDown = () => {
			timer = setTimeout(() => {
				mouseTrack = false;
			}, 0);
		};

		const handleMouseUp = () => {
			mouseTrack = true;
			clearTimeout(timer);
		};

		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);

		return {
			destroy() {
				window.removeEventListener('mousedown', handleMouseDown);
				window.removeEventListener('mouseup', handleMouseUp);
			}
		};
	};
</script>

<svelte:window
	on:mousemove={captureMousePos}
	bind:scrollX
	bind:scrollY
	on:click={() => (isVisible = !isVisible)}
/>

<div
	use:selectAbility
	class="Dropdown"
	class:isVisible
	style:left={isVisible ? `${mouse.x + offset.x}px` : null}
	style:top={isVisible ? `${mouse.y + offset.y}px` : null}
	draggable="false"
>
	<TargetingBox size={targetingBoxSize} />
	{#each items as { name, src }}
		<DropdownItem {name} {src} />
	{/each}
</div>

<style>
	.Dropdown {
		z-index: 2;
		position: absolute;
		display: none;
		user-select: none;
	}
	.isVisible {
		display: block;
	}
</style>
