<script>
	import Button from "$components/ui/Button.svelte";
	import data from "$data/dry.csv";

	let { example, note, responses } = $props();

	const total = data.length;

	let phase = $state("playing");
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
			<p class="example">{@html example}</p>
			<p class="note"><small><em>Note: {@html note}</em></small></p>
			<div class="input-row">
				<!-- svelte-ignore a11y_autofocus -->
				<input
					type="text"
					bind:value={inputValue}
					onkeydown={(e) => e.key === "Enter" && submit()}
					autofocus
					placeholder="your answer..."
				/>
				<Button onclick={submit}>Submit</Button>
			</div>
		</div>
	{:else if phase === "result"}
		<div class="result">
			{#if match}
				<p class="response-label">
					Your answer, <strong>{cleaned}</strong>, was {responses[
						responseIndex
					]}. It was <strong>#{rank}</strong> out of {total}.
				</p>
			{:else}
				<p class="placement">
					You answer wasn’t found in my dataset. The most common answer was
					<strong>as dry as {data[0].vehicle}</strong>. Obvious in hindsight,
					right?
				</p>
			{/if}
		</div>
	{/if}
</div>

<style>
	.c {
		min-height: 320px;
	}
	.game {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.example {
		margin: 0;
		font-size: 1.1rem;
	}

	.note {
		margin: 0;
		opacity: 0.6;
	}

	.input-row {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	input {
		flex: 1;
		padding: 0.4rem 0.6rem;
		font-size: 1rem;
		font-family: inherit;
		border: 1px solid var(--color-gray-300, #d1d5db);
		border-radius: 4px;
		background: transparent;
	}

	input:focus {
		outline: 2px solid var(--color-accent, currentColor);
		outline-offset: 1px;
	}

	.result {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.response-label {
		margin: 0;
		font-size: 1.1rem;
		font-style: italic;
	}

	.placement {
		margin: 0;
	}
</style>
