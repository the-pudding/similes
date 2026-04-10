<script>
	import { Plot, BarY, RuleY } from "svelteplot";
	import { chartData } from "$runes/misc.svelte.js";

	const maxToShow = 20;
	const x = "vehicle";
	const y = "count";

	let data = $derived(
		chartData.shape
			.filter((d, i) => d.ground === "dry")
			.filter((d, i) => i < maxToShow)
	);
</script>

<div class="c graphic">
	{#if chartData.shape.length}
		<Plot grid x={{ tickRotate: -45 }}>
			<RuleY data={[0]} />
			<BarY {data} {x} {y} sort="-count" />
		</Plot>
	{/if}
</div>
