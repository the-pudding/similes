<script>
	import { AnimationFrames } from "runed";
	import { chartData } from "$runes/misc.svelte.js";
	import Scroll from "$components/Irony.Scroll.svelte";
	import Grid from "$components/Irony.Grid.svelte";

	let data = $derived(chartData.irony);
</script>

<div class="graphic">
	<div class="scroll-view">
		<Scroll {data}></Scroll>
	</div>
	<div class="grid-view">
		<Grid {data}></Grid>
	</div>
</div>

<style>
	.scroll-view {
		display: none;
	}

	.grid-view {
		display: block;
	}

	@media (min-width: 1024px) {
		.scroll-view {
			display: block;
		}
		.grid-view {
			display: none;
		}
	}
</style>
