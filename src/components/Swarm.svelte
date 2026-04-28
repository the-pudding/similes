<script>
	import Desktop from "$components/Swarm.Desktop.svelte";
	import Mobile from "$components/Swarm.Mobile.svelte";
	import useWindowDimensions from "$runes/useWindowDimensions.svelte.js";

	let dimensions = new useWindowDimensions();
	let { axisLabel } = $props();

	let mobile = $derived(dimensions.width < 1024);
</script>

<div class="c graphic">
	{#if mobile}
		<div class="mobile-view">
			<Mobile {axisLabel}></Mobile>
		</div>
	{:else}
		<div class="desktop-view">
			<Desktop {axisLabel}></Desktop>
		</div>
	{/if}
</div>

<style>
	.c {
		position: relative;
		z-index: 3;
	}
</style>
