<script>
	import Container from '@lib/container/container.svelte';
	import LevelImage from '@lib/level/image/level-image.svelte';
	import Logo from '@lib/logo/logo.svelte';

	let level = 1;
</script>

<Container>
	<Logo />
	<LevelImage {level} />
</Container>
