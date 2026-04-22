<script>
	import { chartData } from "$runes/misc.svelte.js";

	let data = $derived(chartData.cat);
	const columns = [
		{
			name: "vehicle",
			label: "Animal"
		},
		{
			name: "total",
			label: "Unique adjectives"
		},
		{
			name: "top5",
			label: "Top-5 appearances"
		},
		{
			name: "top1",
			label: "#1 appearances"
		}
	];
</script>

<div class="c graphic">
	<table>
		<thead>
			<tr>
				{#each columns as c}
					<th>{c.label}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as d}
				<tr>
					<td>{d.vehicle}</td>
					<td>{d.total}</td>
					<td>{d.top5}</td>
					<td>{d.top1}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.c {
		max-width: var(--col-width);
		margin: 2rem auto;
		font-family: var(--font-sans);
		padding: 0 1rem;
	}

	td,
	th {
		text-align: right;
	}

	td:first-of-type,
	th:first-of-type {
		text-align: left;
	}
</style>
