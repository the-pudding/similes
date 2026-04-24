<script>
	import { Plot, BarY, RuleY, AxisX } from "svelteplot";
	import { chartData } from "$runes/misc.svelte.js";
	import { hex } from "$runes/misc.svelte.js";
	import { range } from "d3";

	const maxToShow = 30;
	const x = "vehicle";
	const y = "count";

	const filler = range(16)
		.map(() => "&nbsp;")
		.join("");
	let data = $derived(
		chartData.shape.filter((d, i) => d.ground === "dry").slice(0, maxToShow)
	);
</script>

<div class="c graphic">
	<div class="chart-title">
		<strong
			>As <span class="underline-ground-light">dry</span> as
			<span class="underline-vehicle-light">{@html filler}</span></strong
		>
	</div>
	{#if data.length}
		<Plot
			grid
			x={{ tickRotate: -45, label: "nouns" }}
			y={{ label: "occurences" }}
		>
			<AxisX tickFontSize={12} />
			<BarY {data} {x} {y} sort="-count" fill={hex.purpleLight} />
		</Plot>
	{/if}
</div>

<style>
	.c {
		max-width: var(--chart-max-width-sm);
		font-family: var(--font-sans);
		padding: 0 1rem;
	}

	.c :global(.tick text) {
		font-weight: bold;
		fill: #fff !important;
	}

	.c :global(.axis-y .tick:first-of-type) {
		display: none;
	}

	.chart-title {
		font-size: var(--24px);
		margin: 1rem 0;
		text-align: center;
	}
</style>
