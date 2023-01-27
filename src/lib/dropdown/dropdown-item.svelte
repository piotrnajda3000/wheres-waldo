<script lang="ts">
	export let name: string;
	export let src: string;
</script>

<div class="item" draggable="false">
	<img {src} alt={name} draggable="false" />
	<p>{name}</p>
</div>

<style>
	* {
		user-select: none;
	}

	.item {
		padding: 4px;
		width: 90px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: hsl(0, 0%, 94%);
		color: hsl(0, 0%, 8%);
		gap: 2px;
	}

	.item p {
		margin: 0;
	}

	.item img {
		width: 32px;
		height: 32px;
		object-fit: contain;
	}
	.item p {
		font-size: 12px;
	}

	.item:hover {
		background: white;
		color: black;
		cursor: pointer;
	}
</style>
