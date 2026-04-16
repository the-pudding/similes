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
				{#each items as { quote, title, year }, i}
					<div class="embla-slide">
						<div class={`border-decorative border-${(i % 3) + 1}`}>
							<blockquote>{@html quote}</blockquote>
							<div class="source">
								{title}, {year}
							</div>
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
		box-sizing: border-box;
	}
	.embla-buttons {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.border-decorative{
		height: 100%;
		box-sizing: border-box;
		padding: 2.5rem;
		background: #FFF;
		border-image-outset: 0px;
		border-image-repeat: round;
		border-style: solid;
	}
	.border-1{
		border-image-slice: 150 148 148 148;
		border-image-width: 25px;
		border-image-source: url("/assets/borders/border-1.png");
	}
	.border-2{
		border-image-slice: 80;
		border-image-width: 25px;
		border-image-source: url("/assets/borders/border-2.png");
	}
	.border-3{
		border-image-slice: 120;
		border-image-width: 30px;
		border-image-source: url("/assets/borders/border-3.png");
	}
</style>
