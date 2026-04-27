<script>
	import Desktop from "$components/Swarm.Desktop.svelte";
	import Mobile from "$components/Swarm.Mobile.svelte";
	let { axisLabel } = $props();
</script>

<div class="c graphic">
	<div class="desktop-view">
		<Desktop {axisLabel}></Desktop>
	</div>
	<div class="mobile-view">
		<Mobile {axisLabel}></Mobile>
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
