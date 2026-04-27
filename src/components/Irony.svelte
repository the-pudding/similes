<script>
	import { AnimationFrames } from "runed";
	import { chartData } from "$runes/misc.svelte.js";
	import Desktop from "$components/Irony.Desktop.svelte";
	import Mobile from "$components/Irony.Mobile.svelte";

	let data = $derived(chartData.irony);
</script>

<div class="c graphic">
	<div class="desktop-view">
		<Desktop {data}></Desktop>
	</div>
	<div class="mobile-view">
		<Mobile {data}></Mobile>
	</div>
</div>

<style>
	.c {
		position: relative;
		z-index: 3;
	}
	.desktop-view {
		display: none;
	}

	.mobile-view {
		display: block;
	}

	@media (min-width: 1024px) {
		.desktop-view {
			display: block;
		}
		.mobile-view {
			display: none;
		}
	}
</style>
