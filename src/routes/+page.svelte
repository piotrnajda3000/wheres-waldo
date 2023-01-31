<script>
	import LevelImage from '@lib/level/image/level-image.svelte';
	import Logo from '@lib/logo/logo.svelte';

	let level = 1;
</script>

<div class="container">
	<Logo />
	<LevelImage {level} />
</div>

<style>
	.container {
		padding: 2rem;
		max-width: 670px;
		margin-inline: auto;
	}
</style>
