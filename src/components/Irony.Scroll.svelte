<script>
	import { AnimationFrames } from "runed";
	import useWindowDimensions from "$runes/useWindowDimensions.svelte.js";
	let dimensions = new useWindowDimensions();

	let { data } = $props();
	let exampleEls = $state([]);
	let activeIndex = $state(0);

	let widthThreshold = $derived(dimensions.width / 25);

	new AnimationFrames(() => {
		const centerY = window.innerHeight / 2;
		let closest = 0;
		let min = Infinity;
		for (let i = 0; i < exampleEls.length; i++) {
			const el = exampleEls[i];
			if (!el) continue;
			const rect = el.getBoundingClientRect();
			const d = Math.abs(rect.top + rect.height / 2 - centerY);
			if (d < min) {
				min = d;
				closest = i;
			}
		}
		activeIndex = closest;
	});
</script>

<div class="c">
	<div class="irony">
		{#each data as { before, ground, vehicle, after, title, author }, i}
			{@const afterText = after.length > 2 ? "..." : after}
			{@const hide = vehicle.length > widthThreshold}

			<div
				class="example"
				class:is-visible={i === activeIndex}
				class:hide
				bind:this={exampleEls[i]}
			>
				<span class="before">{before}</span>
				as
				<span class="ground color-ground-light"><strong>{ground}</strong></span>
				as<span class="vehicle color-vehicle-light"
					>&nbsp;{vehicle}<span class="after">{afterText}</span></span
				>
				<div class="tooltip">
					<span class="title"><em>{title}</em></span>
					{#if author}by
						<span class="author">{author}</span>{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.irony {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: var(--font-sans);
		gap: 0.75rem;
		overflow: hidden;
		cursor: pointer;
		user-select: none;
		padding: 1rem 0 2rem 0;
	}

	.example {
		position: relative;
		display: inline-block;
		line-height: 1;
		opacity: 0.5;
		transform: scale(1);
		transition: all 0.1s ease;
	}

	.before {
		position: absolute;
		right: 100%;
		bottom: 0;
		text-align: right;
		width: 33vw;
		max-width: 33vw;
		display: none;
		line-height: 1;
		color: var(--color-adjusted-white);
		background: var(--color-adjusted-black);
		padding: 0.25rem;
		transform: translate(0, 0.25rem);
		font-size: 0.8em;
	}

	.vehicle {
		position: absolute;
		left: 100%;
		bottom: 0;
		text-align: left;
		white-space: nowrap;
		font-weight: bold;
	}

	.after {
		display: none;
	}

	.example.hide {
		display: none;
	}

	.example.is-visible {
		opacity: 1;
		transform: scale(1.2);
		z-index: 1;
	}

	.example.is-visible .before {
		display: block;
	}

	.example.is-visible .after {
		display: inline;
	}

	.tooltip {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 125%);
		display: none;
		font-size: var(--12px);
		background: var(--color-adjusted-black);
		padding: 0.25rem 0;
		line-height: 1;
		width: 90vw;
		text-align: center;
		color: var(--color-adjusted-white);
	}

	.example.is-visible .tooltip {
		display: block;
	}
</style>
