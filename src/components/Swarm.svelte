<script>
	import { Plot, Dot, Text } from "svelteplot";
	import { ElementSize } from "runed";
	import useWindowDimensions from "$runes/useWindowDimensions.svelte.js";

	import { chartData } from "$runes/misc.svelte.js";

	const x = "score";
	const r = "totalCount";

	let dimensions = new useWindowDimensions();
	let el = $state();
	const size = new ElementSize(() => el);

	let data = $derived(chartData.swarm.filter((d) => d[r] >= 200));

	let rRange = $derived([size.width * 0.005, size.width * 0.03]);
	let height = $derived((dimensions.height || 320) * 0.6);
</script>

<div class="c graphic" bind:this={el}>
	{#if data.length}
		<Plot
			{height}
			inset={rRange[1]}
			r={{ range: rRange }}
			y={{ axis: false }}
			x={[0, 1]}
		>
			<Dot
				{data}
				{x}
				sort={{ channel: "-r" }}
				y={0}
				{r}
				dodgeY={{ anchor: "middle", padding: 3 }}
			/>
			<Text
				{data}
				{x}
				sort={{ channel: "-r" }}
				y={0}
				{r}
				text={(d) => d.vehicle}
				dodgeY={{ anchor: "middle", padding: 3 }}
			/>
		</Plot>
	{/if}
</div>

<style>
	.c {
		max-width: var(--chart-max-width-lg);
		margin: 1rem auto;
	}
</style>
