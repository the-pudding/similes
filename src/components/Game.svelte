<script>
	import Button from "$components/ui/Button.svelte";
	import data from "$data/dry.csv";

	let { example, note, responses } = $props();

	const total = data.length;

	let phase = $state("playing"); // 'playing' | 'result'
	let inputValue = $state("");

	let cleaned = $derived(
		inputValue
			.trim()
			.toLowerCase()
			.replace(/^(a|an|the)\s+/i, "")
	);

	let matchIndex = $derived(
		cleaned ? data.findIndex((d) => d.vehicle.toLowerCase() === cleaned) : -1
	);

	let match = $derived(matchIndex >= 0 ? data[matchIndex] : null);
	let rank = $derived(matchIndex >= 0 ? matchIndex + 1 : null);
	let empty = $derived(() => cleaned === "");

	let responseIndex = $derived(
		!match ? null : +match.count >= 80 ? 0 : +match.count >= 10 ? 1 : 2
	);

	function submit() {
		phase = "result";
	}
</script>

<div class="c">
	{#if phase === "playing"}
		<div class="game">
			<p class="example">
				{@html example}<!-- svelte-ignore a11y_autofocus --><input
					type="text"
					bind:value={inputValue}
					onkeydown={(e) => e.key === "Enter" && submit()}
					placeholder="your answer"
					size={15}
					maxlength={15}
				/>
			</p>
			<!-- <p class="note"><small><em>Note: {@html note}</em></small></p> -->
			<Button onclick={submit}>Submit</Button>
		</div>
	{:else if phase === "result"}
		<div class="result">
			{#if match}
				<p class="response-label">
					Your answer, <strong>{cleaned}</strong>, was {responses[
						responseIndex
					]}. It was <strong>#{rank}</strong> out of {total}.
				</p>
			{:else if empty}
				<p class="no-match">
					You chose not to play. Shame. The most common answer was <strong
						>as dry as {data[0].vehicle}</strong
					>.
				</p>
			{:else}
				<p class="no-match">
					Your answer wasn't found in my dataset. The most common answer was
					<strong>as dry as {data[0].vehicle}</strong>. Obvious in hindsight,
					right?
				</p>
			{/if}

			<div class="chips">
				{#each data as d, i}
					<span class="chip" class:yours={d === match}>
						{d.prefix ? `${d.prefix} ` : ""}{d.vehicle}
						<span class="chip-count">{d.count}</span>
					</span>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.c {
		min-height: 400px;
	}

	.game {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.example {
		margin: 0;
	}

	input {
		margin-left: 0.5rem;
	}

	.note {
		margin: 0;
	}

	.result {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.response-label,
	.placement,
	.no-match {
		margin: 0;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		margin-top: 0.5rem;
	}

	.chip {
		display: inline-flex;
		align-items: baseline;
		line-height: 1;
		font-family: var(--font-sans);
		gap: 0.25rem;
		padding: 0.25rem 0.5rem;
		border: 1px solid currentColor;
		border-radius: var(--radius-sm);
		font-size: var(--14px);
		user-select: none;
	}

	.chip.yours {
		opacity: 1;
		font-weight: bold;
		background: var(--color-gold);
	}

	.chip-count {
		font-size: var(--12px);
		color: var(--color-gray-500);
	}
</style>
