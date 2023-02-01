<script lang="ts">
	export let src: string;
	export let name: string;
</script>

<img src="images/{src}" alt={name} />

<style>
	img {
		width: 26px;
		height: 26px;
		object-fit: contain;
	}
</style>
