<script>
	import { Plot, Dot, Text, HTMLTooltip, usePlot } from "svelteplot";
	import { ElementSize } from "runed";
	import useWindowDimensions from "$runes/useWindowDimensions.svelte.js";
	import { chartData } from "$runes/misc.svelte.js";
	import variables from "$data/variables.json";
	import { scaleLinear, scaleSqrt, extent, max, format } from "d3";
	let { axisLabel } = $props();

	const x = "score";
	const r = "totalCount";

	let tooltipVisible = $state(false);
	let tooltip = $state({});
	let dimensions = new useWindowDimensions();
	let el = $state();

	const size = new ElementSize(() => el);

	let data = $derived(chartData.swarm.filter((d) => d[r] >= 200));

	let rRange = $derived([size.width * 0.005, size.width * 0.03]);
	let height = $derived(rRange[1] * 15);

	const legendCounts = [50, 100, 200];
	let rScale = $derived(
		scaleSqrt()
			.domain([0, max(data, (d) => d[r])])
			.range([0, rRange[1]])
	);
	let legendSizes = $derived(legendCounts.map((c) => rScale(c)));

	let textRange = $derived([12, 20]);
	let textScale = $derived(
		scaleLinear()
			.domain(extent(data, (d) => d[r]))
			.range(textRange)
	);

	function onmouseenter(e, datum) {
		tooltip.vehicle = datum.vehicle;
		tooltip.totalCount = datum.totalCount;
		tooltip.adjectiveCount = datum.adjectiveCount;
		tooltip.adjectives = datum.topAdjectives;
		tooltip.x = `${e.offsetX + 20}px`;
		tooltip.y = `${e.offsetY + 20}px`;
		tooltipVisible = true;
	}
</script>

<div class="c graphic swarm" bind:this={el}>
	<div class="legend">
		<div class="legend-title"># of occurrences</div>
		<div class="legend-items">
			{#each legendCounts as count, i}
				{@const size = `${legendSizes[i] * 2}px`}
				<div class="legend-circle" style="width: {size}; height: {size};"></div>
			{/each}
		</div>
	</div>
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
				onmouseover={onmouseenter}
				onmouseleave={() => (tooltipVisible = false)}
				onmousemove={onmouseenter}
			/>
			<Text
				{data}
				{x}
				sort={{ channel: "-r" }}
				y={0}
				{r}
				style="pointer-events: none;"
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

	<div
		class="tooltip"
		class:visible={tooltipVisible}
		style:left={tooltip.x}
		style:top={tooltip.y}
	>
		<div class="tooltip-vehicle">
			<strong class="color-vehicle">{tooltip?.vehicle}</strong>
		</div>
		<div class="tooltip-count">
			{format(",")(tooltip?.totalCount)} occurences across {format(",")(
				tooltip?.adjectiveCount
			)} adjectives
		</div>
		<div class="tooltip-adjective-title">Top adjectives:</div>
		<ul class="tooltip-adjectives">
			{#each tooltip?.adjectives || [] as adj}
				<li class="color-ground">{adj}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.c {
		max-width: var(--chart-max-width-lg);
		margin: 2rem auto;
		font-family: var(--font-sans);
		user-select: none;
		padding: 0 1rem;
		position: relative;
	}

	.axis-label {
		text-align: center;
		margin-top: 1rem;
		font-size: var(--12px);
		text-transform: uppercase;
	}

	.annotation {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		text-transform: uppercase;
		font-size: var(--12px);
		padding: 0 1rem;
	}

	.legend {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.legend-items {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.legend-circle {
		border-radius: 50%;
		background: var(--color-adjusted-black);
	}

	.legend-title {
		font-size: var(--12px);
		font-family: var(--font-sans);
		text-transform: uppercase;
	}

	.tooltip {
		position: absolute;
		pointer-events: none;
		background: var(--color-bg);
		color: var(--color-adjusted-black);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-size: var(--12px);
		opacity: 0;
		transition: all 0.25s ease;
		width: 10rem;
		border: 2px solid var(--color-adjusted-black);
	}

	.tooltip li {
		font-size: var(--12px);
		margin: 0;
		line-height: 1.2;
	}

	.tooltip.visible {
		opacity: 1;
	}

	.tooltip-vehicle {
		margin-bottom: 0.25rem;
	}

	.tooltip-adjective-title {
		font-size: var(--12px);
		margin-top: 0.25rem;
	}
</style>
