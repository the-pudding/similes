<script>
	import { Plot, Dot } from "svelteplot";
	import { chartData } from "$runes/misc.svelte.js";

	const x = "score";
	const r = "totalCount";

	let data = $derived(chartData.swarm.filter((d) => d[r] >= 200));
</script>

<div class="c graphic">
	<Plot height={400} inset={20} r={{ range: [2, 16] }} y={{ axis: false }}>
		<Dot {data} {x} sort={{ channel: "-r" }} y={0} {r} dodgeY="middle" />
	</Plot>
</div>

<style>
	.c {
		max-width: var(--chart-max-width);
		margin: 1rem auto;
	}
</style>
