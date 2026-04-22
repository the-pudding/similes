<script>
	import { Plot, BarY, RuleY, AxisX } from "svelteplot";
	import { chartData } from "$runes/misc.svelte.js";

	const maxToShow = 30;
	const x = "vehicle";
	const y = "count";

	let data = $derived(
		chartData.shape.filter((d, i) => d.ground === "dry").slice(0, maxToShow)
	);
</script>

<div class="c graphic">
	{#if data.length}
		<Plot
			grid
			x={{ tickRotate: -45, label: "nouns" }}
			y={{ label: "occurences" }}
		>
			<AxisX tickFontSize={12} />
			<RuleY data={[0]} />
			<BarY {data} {x} {y} sort="-count" />
		</Plot>
	{/if}
</div>

<style>
	.c {
		max-width: var(--chart-max-width-sm);
		font-family: var(--font-sans);
	}

	.c :global(.tick text) {
		font-weight: bold;
		fill: #fff !important;
	}
</style>
