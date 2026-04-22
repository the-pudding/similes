<script>
	let { data } = $props();
</script>

<div class="c">
	{#each data as { category, values }}
		<div class="group">
			<div class="category"><strong>{category}</strong></div>
			<div class="values">
				{#each values as { ground, rank }}
					<div class="ground">{ground} <span>#{rank}</span></div>
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
		padding: 0 1rem;
	}

	.group {
		width: 10rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.values {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.ground {
		position: relative;
		line-height: 1;
		display: inline-block;
	}

	.ground span {
		position: absolute;
		right: 0;
		bottom: 0;
		transform: translateX(calc(100% + 0.5em));
		color: var(--color-gray-500);
		font-size: 0.75em;
	}
</style>
