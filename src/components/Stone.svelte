<script>
	import { chartData } from "$runes/misc.svelte.js";
	import WordStack from "$components/WordStack.svelte";

	let data = $derived(chartData.stone);
</script>

<div class="c graphic">
	<WordStack {data} />
</div>

<style>
	.c {
		max-width: var(--chart-max-width-sm);
		margin: 2rem auto;
	}
</style>
