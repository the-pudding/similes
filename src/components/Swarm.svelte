<script>
	import { Plot, Dot, Text } from "svelteplot";
	import { ElementSize } from "runed";
	import useWindowDimensions from "$runes/useWindowDimensions.svelte.js";
	import { chartData } from "$runes/misc.svelte.js";
	import variables from "$data/variables.json";
	import { scaleLinear, extent } from "d3";

	let { axisLabel } = $props();

	const x = "score";
	const r = "totalCount";

	let dimensions = new useWindowDimensions();
	let el = $state();
	const size = new ElementSize(() => el);

	let data = $derived(chartData.swarm.filter((d) => d[r] >= 200));

	let rRange = $derived([size.width * 0.005, size.width * 0.03]);
	let height = $derived(rRange[1] * 15);

	let textRange = $derived([12, 20]);
	let textScale = $derived(
		scaleLinear()
			.domain(extent(data, (d) => d[r]))
			.range(textRange)
	);
</script>

<div class="c graphic swarm" bind:this={el}>
	<div class="annotation">
		<div>&larr; Generalists</div>
		<div>Specialiasts &rarr;</div>
	</div>
	{#if data.length}
		<Plot
			{height}
			inset={rRange[1]}
			r={{ range: rRange }}
			y={{ axis: false }}
			x={{ domain: [0, 1], label: false, percent: true }}
		>
			<Dot
				{data}
				{x}
				sort={{ channel: "-r" }}
				y={0}
				{r}
				dodgeY={{ anchor: "middle", padding: 3 }}
				fill={variables.color["adjusted-black"]}
			/>
			<Text
				{data}
				{x}
				sort={{ channel: "-r" }}
				y={0}
				{r}
				text={(d) => d.vehicle}
				dodgeY={{ anchor: "middle", padding: 3 }}
				strokeWidth={4}
				fontSize={(d) => Math.round(textScale(d[r]))}
				fill={"#fff"}
				stroke={variables.color["adjusted-black"]}
				fontWeight="bold"
			/>
		</Plot>
	{/if}
	<div class="axis-label">{@html axisLabel}</div>
</div>

<style>
	.c {
		max-width: var(--chart-max-width-lg);
		margin: 1rem auto;
		font-family: var(--font-sans);
		user-select: none;
	}

	.axis-label {
		text-align: center;
		margin-top: 1rem;
	}

	.annotation {
		display: flex;
		justify-content: space-between;
	}
</style>
