<script>
	let { images } = $props();
</script>

<div class="c graphic">
	{#each images as { src, alt, className }}
		<div class="img">
			<img class={className} {src} {alt} />
		</div>
	{/each}
</div>

<style>
	.img:nth-of-type(1) {
		z-index: 1;
		position: relative;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
		max-width: var(--chart-max-width-md);
	}

	.img:nth-of-type(2),
	.img:nth-of-type(3) {
		z-index: -1;
		display: block;
		position: absolute;
		top: -50px;
		left: -100px;
		margin: auto;
		/* width: 400px; */
		max-width: max(25vw, 350px);
		height: auto;
	}
	.img:nth-of-type(3) {
		left: auto;
		right: -100px;
	}
	.img:nth-of-type(2) img,
	.img:nth-of-type(3) img {
		width: 100%;
		height: 100%;
		opacity: 0.3;
	}
	@media(max-width: 500px){
		.img:nth-of-type(2),
		.img:nth-of-type(3) {
			width: 350px;
			left: -140px;
		}
		.img:nth-of-type(3) {
			left: auto;
			right: -140px;
		}
	}
	@media (min-width: 1750px){
		.img:nth-of-type(2),
		.img:nth-of-type(3) {
			left: -120px;
			max-width: max(20vw, 350px);
		}
		.img:nth-of-type(3) {
			left: auto;
			right: -120px;
		}
	}
</style>
