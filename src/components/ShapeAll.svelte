<script>
	import { Plot, BarY, RuleY } from "svelteplot";
	import { chartData } from "$runes/misc.svelte.js";
	import * as d3 from "d3";

	const maxToShow = 20;
	const x = "vehicle";
	const y = "count";

	function calculateEntropy(items) {
		const total = d3.sum(items, (d) => d.count);
		const entropy = -d3.sum(items, (d) => {
			const p = d.count / total;
			return p * Math.log2(p);
		});
		return entropy;
	}

	let byGround = $derived.by(() => {
		if (chartData.shape.length === 0) return [];
		const grouped = d3
			.groups(chartData.shape, (d) => d.ground)
			.map(([ground, items]) => ({
				ground,
				entropy: calculateEntropy(items.slice(0, maxToShow)),
				data: d3
					.range(maxToShow)
					.map((i) => items[i] || { vehicle: i, count: 0 })
			}));

		grouped.sort((a, b) => d3.descending(a.entropy, b.entropy));

		return grouped;
	});
</script>

<div class="c graphic">
	{#each byGround as { ground, data }}
		<div class="chart">
			<div class="chart-title">{ground}</div>
			<Plot x={{ axis: false }} y={{ axis: false }} height={(w) => w / 2}>
				<!-- <RuleY data={[0]} /> -->
				<BarY {data} {x} {y} sort="-count" />
			</Plot>
		</div>
	{/each}
</div>

<style>
	.c {
		max-width: var(--chart-max-width-lg);
		margin: 1rem auto;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.chart {
		width: calc(10% - 1rem);
		position: relative;
	}

	.chart-title {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
		font-size: var(--12px);
		font-weight: bold;
		font-family: var(--font-sans);
	}
</style>
