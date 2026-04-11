<script>
	import { getContext } from "svelte";
	import CMS from "$components/helpers/CMS.svelte";
	import Footer from "$components/Footer.svelte";
	import Game from "$components/Game.svelte";
	import Quotes from "$components/Quotes.svelte";
	import Explainer from "$components/Explainer.svelte";
	import ShapeExample from "$components/ShapeExample.svelte";
	import ShapeAll from "$components/ShapeAll.svelte";
	import Swarm from "$components/Swarm.svelte";
	import loadCsv from "$utils/loadCsv.js";
	import { chartData } from "$runes/misc.svelte.js";
	import rawSimpson from "$data/simpson.csv";
	import * as d3 from "d3";

	const copy = getContext("copy");
	// const data = getContext("data");

	const body = copy?.body || [];
	const components = { Game, Quotes, Explainer, ShapeExample, ShapeAll, Swarm };

	$effect(async () => {
		const rawPairs = await loadCsv("assets/pairs.csv");
		const cleanPairs = rawPairs.map((d) => ({
			...d,
			count: +d.count
		}));
		cleanPairs.sort((a, b) => d3.descending(a.count, b.count));
		chartData.shape = cleanPairs;

		// TODO consider async load of simpson data
		const cleanSimpson = rawSimpson.map((d) => ({
			...d,
			totalCount: +d.totalCount,
			adjectiveCount: +d.adjectiveCount,
			topAdjectives: d.topAdjectives.split("|").map((s) => s.trim())
		}));

		chartData.swarm = cleanSimpson;
	});
</script>

<div class="c">
	<CMS {body} {components}></CMS>
</div>

<svelte:boundary onerror={(e) => console.error(e)}>
	<!-- <Footer recirc={true} /> -->
</svelte:boundary>
