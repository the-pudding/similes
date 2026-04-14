<script>
	import { getContext } from "svelte";
	import CMS from "$components/helpers/CMS.svelte";
	import Footer from "$components/Footer.svelte";
	import TopperImages from "$components/TopperImages.svelte"
	import Game from "$components/Game.svelte";
	import Quotes from "$components/Quotes.svelte";
	import Explainer from "$components/Explainer.svelte";
	import ShapeExample from "$components/ShapeExample.svelte";
	import ShapeAll from "$components/ShapeAll.svelte";
	import Swarm from "$components/Swarm.svelte";
	import Cat from "$components/Cat.svelte";
	import Child from "$components/Child.svelte";
	import Stone from "$components/Stone.svelte";
	import Irony from "$components/Irony.svelte";
	import loadCsv from "$utils/loadCsv.js";
	import { chartData } from "$runes/misc.svelte.js";
	import rawSimpson from "$data/simpson.csv";
	import rawCat from "$data/cat.csv";
	import rawChild from "$data/child.csv";
	import rawStone from "$data/stone.csv";
	import * as d3 from "d3";

	const copy = getContext("copy");
	// const data = getContext("data");

	const body = copy?.body || [];
	const components = {
		Game,
		Quotes,
		Explainer,
		ShapeExample,
		ShapeAll,
		Swarm,
		Cat,
		Child,
		Stone,
		Irony,
		TopperImages
	};

	$effect(async () => {
		const rawPairs = await loadCsv("assets/pairs.csv");
		const cleanPairs = rawPairs.map((d) => ({
			...d,
			count: +d.count
		}));
		cleanPairs.sort((a, b) => d3.descending(a.count, b.count));
		chartData.shape = cleanPairs;

		const rawIrony = await loadCsv("assets/irony.csv");
		rawIrony.sort((a, b) => d3.ascending(a.vehicle.length, b.vehicle.length));
		chartData.irony = rawIrony;

		// TODO consider async load of simpson data
		const cleanSimpson = rawSimpson.map((d) => ({
			...d,
			totalCount: +d.totalCount,
			adjectiveCount: +d.adjectiveCount,
			topAdjectives: d.topAdjectives.split("|").map((s) => s.trim())
		}));

		chartData.swarm = cleanSimpson;

		chartData.cat = rawCat;

		const cleanChild = d3
			.groups(rawChild, (d) => d.category)
			.map(([category, values]) => ({
				category,
				values: values.sort((a, b) => d3.ascending(+a.rank, +b.rank))
			}))
			.filter((d) => d.category !== "other");

		cleanChild.sort((a, b) => d3.descending(a.values.length, b.values.length));

		chartData.child = cleanChild;

		const cleanStone = d3
			.groups(rawStone, (d) => d.category)
			.map(([category, values]) => ({
				category,
				values: values.sort((a, b) => d3.ascending(+a.rank, +b.rank))
			}))
			.filter((d) => d.category !== "other" && d.category !== "hard");

		cleanStone.sort((a, b) => d3.descending(a.values.length, b.values.length));
		chartData.stone = cleanStone;
	});
</script>

<div class="c">
	<CMS {body} {components}></CMS>
</div>

<svelte:boundary onerror={(e) => console.error(e)}>
	<!-- <Footer recirc={true} /> -->
</svelte:boundary>
