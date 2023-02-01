<script>
	import LevelImage from '@lib/level/image/level-image.svelte';
	import Logo from '@lib/logo/logo.svelte';
	import ToGuess from '@lib/to-guess/to-guess.svelte';

	let level = 1;
</script>

<div class="container">
	<div class="topRow">
		<Logo />
		<ToGuess />
	</div>
	<LevelImage {level} />
</div>

<style>
	.container {
		padding: 2rem;
		max-width: 670px;
		margin-inline: auto;
	}
	.topRow {
		display: flex;
		flex-direction: column;
	}
</style>
