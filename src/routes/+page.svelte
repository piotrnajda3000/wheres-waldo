<script lang="ts">
	import Dropdown from '@lib/dropdown/dropdown.svelte';
	import ItemBoxes from '@lib/item-boxes/item-boxes.svelte';
</script>

<Dropdown />

<ItemBoxes />

<div>
	<h1>Where's Waldo?</h1>
	<div class="imageWrapper">
		<img src="level-1.jpg" alt="Level one" draggable="false" />
	</div>
</div>

<style>
	div {
		width: 750px;
		margin-inline: auto;
	}

	h1 {
		user-select: none;
		letter-spacing: 0.16ch;
	}

	.imageWrapper {
		position: relative;
	}

	img {
		pointer-events: none;
		user-select: none;
		max-width: 100%;
		object-fit: cover;
	}
</style>
