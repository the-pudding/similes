<script>
	import useEmblaCarousel from "embla-carousel-svelte";

	let { items } = $props();
	let emblaApi;
	let options = { loop: true, align: "center" };

	function goToPrev() {
		emblaApi?.goToPrev();
	}

	function goToNext() {
		emblaApi?.goToNext();
	}

	function onInit(event) {
		emblaApi = event.detail;
	}
</script>

<div class="c graphic">
	<div class="embla">
		<div
			class="embla-viewport"
			use:useEmblaCarousel={{ options }}
			onemblainit={onInit}
		>
			<div class="embla-container">
				{#each items as { quote, title, year }}
					<div class="embla-slide">
						<blockquote>{@html quote}</blockquote>
						<div class="source">
							{title}, {year}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="embla-buttons">
			<button class="embla-prev" onclick={goToPrev}>Prev</button>
			<button class="embla-next" onclick={goToNext}>Next</button>
		</div>
	</div>
</div>

<style>
	.embla {
		--slide-spacing: 2rem;
		--slide-size: min(100%, calc(600px + var(--slide-spacing)));
	}

	.embla-viewport {
		overflow: hidden;
	}

	.embla-container {
		display: flex;
		touch-action: pan-y pinch-zoom;
		margin-left: calc(var(--slide-spacing) * -1); /* Renders -10px */
	}

	.embla-slide {
		flex: 0 0 var(--slide-size);
		min-width: 0;
		padding-left: var(--slide-spacing);
		user-select: none;
		cursor: grab;
	}

	.embla-buttons {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1rem;
	}
</style>
