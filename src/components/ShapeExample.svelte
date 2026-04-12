<script>
	import { Plot, BarY, RuleY } from "svelteplot";
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
		<Plot grid x={{ tickRotate: -45 }}>
			<RuleY data={[0]} />
			<BarY {data} {x} {y} sort="-count" />
		</Plot>
	{/if}
</div>

<style>
	.c {
		max-width: var(--chart-max-width-sm);
		margin: 1rem auto;
	}
</style>
