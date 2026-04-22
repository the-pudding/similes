<script>
	import { Plot, BarY, RuleY, Text } from "svelteplot";
	import { chartData } from "$runes/misc.svelte.js";
	import * as d3 from "d3";

	const maxToShow = 20;
	const x = "vehicle";
	const y = "count";

	function calculateSimpson(items) {
		const totalCount = d3.sum(items, (d) => d.count);

		const matchProbability = d3.sum(items, (d) => {
			const fraction = d.count / totalCount;
			return fraction * fraction;
		});

		return matchProbability;
	}

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
				simpson: calculateSimpson(items.slice(0, maxToShow)),
				data: d3
					.range(maxToShow)
					.map((i) => items[i] || { vehicle: i, count: 0 })
			}));

		// grouped.sort((a, b) => d3.ascending(a.ground, b.ground));
		// grouped.sort((a, b) => d3.descending(a.entropy, b.entropy));
		grouped.sort((a, b) => d3.ascending(a.simpson, b.simpson));

		return grouped;
	});
</script>

<div class="c graphic">
	{#each byGround as { ground, data }}
		{@const textData = data.slice(0, 1)}
		<div class="chart">
			<div class="chart-title">{ground}</div>
			<Plot
				x={{ axis: false, insetLeft: 0 }}
				y={{ axis: false, insetTop: 10, insetBottom: 16 }}
				height={(w) => w / 1.5}
			>
				<BarY {data} {x} {y} sort="-count" />
				<Text
					data={textData}
					{x}
					{y}
					text={(d) => `${d.vehicle}: ${d.count}`}
					lineAnchor="bottom"
					textAnchor="start"
					dy={-4}
					dx={-4}
				/>
			</Plot>
		</div>
	{/each}
</div>

<style>
	.c {
		max-width: var(--chart-max-width-lg);
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		font-family: var(--font-sans);
		padding: 0 1rem;
	}

	.chart {
		width: calc(10% - 1rem);
		position: relative;
	}

	.chart-title {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0);
		font-size: var(--14px);
		font-weight: bold;
		font-family: var(--font-sans);
	}
</style>
