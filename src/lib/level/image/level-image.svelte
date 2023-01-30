<script lang="ts">
	import { levelImages } from '../level-images';

	export let level: number;

	const levelImage = levelImages.get(level);
</script>

<div data-testid="level-image">
	<img src={levelImage} alt={`Level ${level}`} />
</div>
