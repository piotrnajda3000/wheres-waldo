<script lang="ts">
	import Dropdown from '@lib/dropdown/dropdown.svelte';
	import Logo from '@lib/logo/logo.svelte';
	import { onMount } from 'svelte';

	let imageWrapper: HTMLDivElement;
	let isDropdown = false;
	let mouseTrack = true;
	let mouse = { x: 0, y: 0 };

	const outsideHandler = (e: MouseEvent) => {
		const imageRect = imageWrapper.getBoundingClientRect();
		if (
			e.clientX < imageRect.left ||
			e.clientX > imageRect.right ||
			e.clientY < imageRect.top ||
			e.clientY > imageRect.bottom
		) {
			isDropdown = false;
		}
	};
	onMount(() => {
		document.addEventListener('mousemove', outsideHandler);
		return () => {
			document.removeEventListener('mousemove', outsideHandler);
		};
	});

	const selectAbility = (node: HTMLDivElement) => {
		let timer: any;
		let timerOpen: any;

		const handleClick = () => {
			isDropdown = !isDropdown;
		};

		const handleMouseDown = () => {
			timerOpen = setTimeout(() => {
				if (!isDropdown) {
					isDropdown = true;
				}
			}, 200);

			timer = setTimeout(() => {
				mouseTrack = false;
			}, 0);
		};

		const handleMouseUp = () => {
			mouseTrack = true;

			clearTimeout(timer);
			clearTimeout(timerOpen);
		};

		node.addEventListener('mousedown', handleMouseDown);
		node.addEventListener('click', handleClick);
		node.addEventListener('mouseup', handleMouseUp);

		return {
			destroy() {
				node.removeEventListener('click', handleClick);
				node.removeEventListener('mousedown', handleMouseDown);
				node.removeEventListener('mouseup', handleMouseUp);
			}
		};
	};

	let scrollX: number, scrollY: number;
	const captureMousePos = (e: MouseEvent) => {
		if (mouseTrack) {
			mouse = { x: e.clientX + scrollX, y: e.clientY + scrollY };
		}
	};
</script>

<svelte:window on:mousemove={captureMousePos} bind:scrollX bind:scrollY />

<div class="content">
	<Logo />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="imageWrapper" bind:this={imageWrapper} use:selectAbility>
		<!-- <ItemBoxes /> -->
		{#if imageWrapper}
			<Dropdown {imageWrapper} isVisible={isDropdown} {mouse} />
		{/if}
		<img src="level-1.jpg" alt="Level one" draggable="false" />
	</div>
</div>

<style>
	.content {
		width: 750px;
		margin-inline: auto;
	}

	.imageWrapper {
		position: relative;
		user-select: none;
	}

	img {
		pointer-events: none;
		user-select: none;
		max-width: 100%;
		object-fit: cover;
	}
</style>
