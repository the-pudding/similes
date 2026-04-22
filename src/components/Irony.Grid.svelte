<script>
	import * as d3 from "d3";
	let { data } = $props();

	let grounds = $derived(
		d3
			.groups(data, (d) => d.ground)
			.map(([ground, items]) => ({
				ground,
				vehicles: [...new Set(items.map((d) => d.vehicle))],
				count: items.length
			}))
			.sort((a, b) => d3.descending(a.count, b.count))
	);
</script>

<div class="c">
	<div class="grid">
		{#each grounds as { ground, vehicles }}
			<div class="ground">
				<p class="ground-text">
					as <span class="color-ground-light"><strong>{ground}</strong></span> as...
				</p>
				<ul>
					{#each vehicles as vehicle}
						<li class="color-vehicle-light"><strong>{vehicle}</strong></li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>

<style>
	.grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		font-family: var(--font-sans);
		padding: 0 1rem;
	}

	.ground {
		width: 100%;
	}

	p,
	li {
		font-size: var(--16px);
	}

	.ground-text {
		margin: 0;
	}

	ul {
		margin: 0;
		list-style: disc;
	}

	li {
		line-height: 1.325;
	}

	@media (min-width: 480px) {
		.ground {
			width: calc(50% - 1rem);
		}
	}
</style>
