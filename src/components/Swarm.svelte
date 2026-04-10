<script>
	import { Plot, Dot, Text } from "svelteplot";
	import { chartData } from "$runes/misc.svelte.js";

	const x = "score";
	const r = "totalCount";

	let data = $derived(chartData.swarm.filter((d) => d[r] >= 200));
</script>

<div class="c graphic">
	<Plot
		height={600}
		inset={24}
		r={{ range: [2, 32] }}
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
</div>

<style>
	.c {
		max-width: var(--chart-max-width);
		margin: 1rem auto;
	}
</style>
