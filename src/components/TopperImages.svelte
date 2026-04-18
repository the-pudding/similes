<script>
	let { images } = $props();
</script>

	{#each images as { src, alt, className }}
		<div class="topper-image graphic">
			<img class={className} src={src} alt={alt} />
		</div>
	{/each}


<style>
	/* .graphic{
		position: relative;
		margin-top: 0;
	} */
	.topper-image:nth-of-type(1){
		z-index: 1;
		position: relative;
		display: block;
		margin: auto;
		width: 90%;
		/* mix-blend-mode: multiply; */
	}
	.topper-image:nth-of-type(2),
	.topper-image:nth-of-type(3){
		z-index: -1;
		display: block;
		position: absolute;
		top: -50px;
		left: -140px;
		margin: auto;
		width: 550px;
		max-width: 40vw;
		height: auto;
	}
	.topper-image:nth-of-type(3){
		left: auto;
		right: -140px;
	}
	.topper-image:nth-of-type(2) img,
	.topper-image:nth-of-type(3) img{
		width: auto;
		height: 100%;
		opacity: 0.3;
	}
	@media(max-width: 1000px){
		.topper-image:nth-of-type(2),
		.topper-image:nth-of-type(3){
			width: 450px;
		}
	}
	@media(max-width: 800px){
		.topper-image:nth-of-type(2),
		.topper-image:nth-of-type(3){
			width: 400px;
		}
	}
	@media(max-width: 500px){
		.topper-image:nth-of-type(2),
		.topper-image:nth-of-type(3){
			width: 350px;
		}
	}
</style>