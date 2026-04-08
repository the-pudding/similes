<script>
	import { getContext } from "svelte";
	import CMS from "$components/helpers/CMS.svelte";
	import Footer from "$components/Footer.svelte";
	import Game from "$components/Game.svelte";
	import ShapeExample from "$components/ShapeExample.svelte";
	import Explainer from "$components/Explainer.svelte";
	import loadCsv from "$utils/loadCsv.js";
	import { chartData } from "$runes/misc.svelte.js";
	import * as d3 from "d3";

	const copy = getContext("copy");
	// const data = getContext("data");

	const body = copy?.body || [];
	const components = { Game, ShapeExample, Explainer };

	$effect(async () => {
		const raw = await loadCsv("assets/pairs.csv");
		const clean = raw.map((d) => ({
			...d,
			count: +d.count
		}));
		clean.sort((a, b) => d3.descending(a.count, b.count));
		chartData.shape = clean;
	});
</script>

<div class="c">
	<CMS {body} {components}></CMS>
</div>

<svelte:boundary onerror={(e) => console.error(e)}>
	<!-- <Footer recirc={true} /> -->
</svelte:boundary>

<style>
	.c {
		max-width: 640px;
		margin: 0 auto;
	}
</style>
