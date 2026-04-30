<script>
	import * as d3 from "d3";
	let { data } = $props();

	let grounds = $derived(
		d3
			.groups(data, (d) => d.ground)
			.map(([ground, items]) => ({
				ground,
				vehicles: items.map((d) => ({
					vehicle: d.vehicle,
					title: d.title,
					author: d.author
				})),
				count: items.length
			}))
			.sort((a, b) => d3.descending(a.count, b.count))
	);

	let activeTooltip = $state(null);

	function toggleTooltip(id) {
		activeTooltip = activeTooltip === id ? null : id;
	}
</script>

<div class="c">
	<div class="grid">
		{#each grounds as { ground, vehicles }, gi}
			<div class="ground">
				<p class="ground-text">
					as <span class="color-ground-light"><strong>{ground}</strong></span> as...
				</p>
				<ul>
					{#each vehicles as { vehicle, title, author }, vi}
						{@const id = `${gi}-${vi}`}
						{@const isActive = activeTooltip === id}
						<li class="color-vehicle-light" class:is-active={isActive}>
							<button onclick={() => toggleTooltip(id)}>
								&#9642; <strong>{vehicle}</strong>
							</button>
							{#if isActive}
								<span class="tooltip">
									<em>{title}</em>{#if author}&nbsp;by {author}{/if}
								</span>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>

<style>
	.c {
		max-width: var(--col-width);
		margin: 0 auto;
	}

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
		font-size: var(--14px);
	}

	.ground-text {
		margin: 0;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	li {
		line-height: 1.325;
		position: relative;
	}

	button {
		all: unset;
		cursor: pointer;
		color: inherit;
	}

	.tooltip {
		display: block;
		font-size: var(--12px);
		color: var(--color-adjusted-white);
		padding: 0.25rem;
		line-height: 1;
	}
</style>
