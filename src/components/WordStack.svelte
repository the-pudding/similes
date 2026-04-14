<script>
	let { data } = $props();
</script>

<div class="c">
	{#each data as { category, values }}
		<div class="group">
			<div class="category"><strong>{category}</strong></div>
			<div class="values">
				{#each values as { ground, rank }}
					<div class="value">{ground} <span>(#{rank})</span></div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.c {
		display: flex;
		gap: 1rem;
		justify-content: center;
		font-family: var(--font-sans);
	}

	.group {
		width: 10rem;
		text-align: center;
		display: flex;
		flex-direction: column;
	}

	.category {
	}
</style>
