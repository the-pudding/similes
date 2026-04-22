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
	.c {
		/* position: relative; */
	}

	.img:nth-of-type(1) {
		z-index: 1;
		position: relative;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		width: 90%;
		max-width: var(--chart-max-width-md);
	}

	.img:nth-of-type(2),
	.img:nth-of-type(3) {
		z-index: -1;
		display: block;
		position: absolute;
		top: -50px;
		left: -140px;
		margin: auto;
		width: 350px;
		/* max-width: max(40vw, 350px); */
		height: auto;
	}
	.img:nth-of-type(3) {
		left: auto;
		right: -140px;
	}
	.img:nth-of-type(2) img,
	.img:nth-of-type(3) img {
		width: auto;
		height: 100%;
		opacity: 0.3;
	}
</style>
