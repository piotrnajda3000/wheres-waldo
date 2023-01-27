<script lang="ts">
	import Dropdown from '@lib/dropdown/dropdown.svelte';
</script>

<Dropdown />

<div>
	<h1>Where's Waldo?</h1>
	<img src="level-1.jpg" alt="Level one" draggable="false" />
</div>

<style>
	div {
		max-width: 750px;
		margin-inline: auto;
	}

	h1 {
		user-select: none;
		letter-spacing: 0.16ch;
	}

	img {
		pointer-events: none;
		user-select: none;
		max-width: 100%;
		object-fit: cover;
	}
</style>
