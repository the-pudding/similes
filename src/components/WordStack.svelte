<script>
	let { data } = $props();
</script>

<div class="c">
	{#each data as { category, values }}
		<div class="group">
			<table>
				<thead>
					<tr>
						<th>Adj.</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{#each values as { ground, rank }}
						<tr>
							<td>{ground}</td>
							<td>#{rank}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/each}
</div>

<style>
	.c {
		display: flex;
		gap: 1rem;
		justify-content: center;
		font-family: var(--font-sans);
		padding: 0 1rem;
	}

	.group {
		width: 25%;
	}

	td,
	th {
		vertical-align: bottom;
		line-height: 1;
		padding: 0.5rem;
	}

	th {
		font-size: var(--14px);
	}

	td:last-of-type,
	th:last-of-type {
		text-align: right;
		width: 3.5rem;
		padding-left: 0;
	}

	tbody tr:nth-of-type(odd) {
		background: color-mix(in oklch, var(--color-green-light), white 80%);
	}

	/* every group after the first  (n+1) */
	.group:not(:first-of-type) thead {
		visibility: hidden;
	}
</style>
