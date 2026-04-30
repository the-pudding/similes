<script>
	import Button from "$components/ui/Button.svelte";
	import data from "$data/dry.csv";
	import Flower from "$svg/button-flower.svg";

	let { example, note, responses, images } = $props();

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
	let empty = $derived(cleaned === "");

	let responseIndex = $derived(
		!match ? null : +match.count >= 80 ? 0 : +match.count >= 10 ? 1 : 2
	);

	function submit() {
		phase = "result";
	}
</script>

<div class="c border-decorative border-2">
	{#if phase === "playing"}
		<div class="game">
			<div class="example">
				<span>My mouth has gone</span><strong> as dry as </strong>
				<!-- svelte-ignore a11y_autofocus --><input
					type="text"
					bind:value={inputValue}
					onkeydown={(e) => e.key === "Enter" && submit()}
					placeholder="your answer"
					size={15}
					maxlength={15}
				/>
			</div>
			<!-- <p class="note"><small><em>Note: {@html note}</em></small></p> -->
			<div class="submit">
				<span>{@html Flower}</span><Button class="game-button" onclick={submit}
					>Submit</Button
				><span>{@html Flower}</span>
			</div>
		</div>
	{:else if phase === "result"}
		<div class="result">
			{#if match}
				<p class="response-label">
					Your answer, <strong>{cleaned}</strong>, was {responses[
						responseIndex
					]}. It ranked <strong>#{rank}</strong> out of {total} of the most commonly
					used nouns.
				</p>
			{:else if empty}
				<p class="no-match">
					You chose not to play. What a shame. The most commonly used noun was
					“as dry as a <strong>{data[0].vehicle}</strong>.”
				</p>
			{:else}
				<p class="no-match">
					Your answer wasn't found in my dataset. The most commonly used noun
					was as “dry as a <strong>{data[0].vehicle}</strong>.”
				</p>
			{/if}

			<div class="chips">
				{#each data as d, i}
					<span class="chip" class:yours={d === match}>
						<span class="chip-count">{i + 1}.</span>
						{d.prefix ? `${d.prefix} ` : ""}{d.vehicle}
					</span>
				{/each}
			</div>
		</div>
	{/if}
	{#each images as { src, alt, className }}
		<div class="page graphic">
			<img class={className} {src} {alt} />
		</div>
	{/each}
</div>

<style>
	.c {
		min-height: 530px;
		position: relative;
		font-family: var(--font-sans);
		padding: 2.5rem 1rem;
		margin: 4rem auto;
		display: flex;
		align-items: center;
		justify-content: center;
		border-image-width: 25px 0;
	}

	.game {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.example {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		font-size: var(--16px);
	}

	.example :global(strong) {
		margin-left: 0.325em;
	}

	input {
		margin-left: 0.5rem;
		margin-top: 0.5rem;
		border-radius: 0;
		max-width: 10rem;
		width: 100%;
	}

	.submit {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
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
		font-size: var(--14px);
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
		border-radius: 0;
		font-size: var(--14px);
		user-select: none;
	}

	.chip.yours {
		opacity: 1;
		font-weight: bold;
		background: var(--color-gold);
	}

	.chip.yours .chip-count {
		color: var(--color-adjusted-black);
	}
	.chip-count {
		font-size: var(--12px);
		color: var(--color-gray-500);
	}

	.submit span {
		display: inline-block;
		width: 1.8rem;
		margin: 4px 0.6rem 0 0.6rem;
	}

	/* These are the falling pages that curve down from topper */
	.page:nth-of-type(2),
	.page:nth-of-type(3) {
		z-index: -1;
		display: block;
		position: absolute;
		top: -30%;
		left: min(-30vw, -400px);
		/* width: 350px; */
		max-width: max(30vw, 350px);
		height: auto;
		margin: auto;
		transform: rotate(-12deg);
	}
	.page:nth-of-type(3) {
		left: auto;
		right: min(-30vw, -400px);
		transform: rotate(12deg);
	}
	.page:nth-of-type(2) img,
	.page:nth-of-type(3) img {
		width: 100%;
		height: 100%;
		opacity: 0.3;
	}

	@media (max-width: 900px) {
		.c {
			margin: 2rem auto;
		}
		.page:nth-of-type(2),
		.page:nth-of-type(3) {
			display: none;
		}
	}

	@media (min-width: 480px) {
		input {
			margin-top: 0;
		}
	}

	@media (min-width: 640px) {
		.c {
			min-height: 410px;
			padding: 2.5rem;
		}

		.response-label,
		.placement,
		.no-match {
			font-size: var(--16px);
		}
	}
	@media (min-width: 1200px) {
		.page:nth-of-type(2),
		.page:nth-of-type(3) {
			left: min(-30vw, -450px);
			max-width: max(18vw, 300px);
		}
		.page:nth-of-type(3) {
			left: auto;
			right: min(-30vw, -450px);
		}
	}
	@media (min-width: 1400px) {
		.page:nth-of-type(2),
		.page:nth-of-type(3) {
			left: min(-42vw, -600px);
			max-width: max(26vw, 300px);
		}
		.page:nth-of-type(3) {
			left: auto;
			right: min(-42vw, -600px);
		}
	}
	@media (min-width: 1750px) {
		.page:nth-of-type(2),
		.page:nth-of-type(3) {
			left: min(-43vw, -600px);
			max-width: max(18vw, 300px);
		}
		.page:nth-of-type(3) {
			left: auto;
			right: min(-43vw, -600px);
		}
	}
</style>
