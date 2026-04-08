<script>
	let { terms, example } = $props();
</script>

<div class="c">
	<ul>
		{#each terms as { term, description }}
			<li><span>{term}</span> &rarr; {description}</li>
		{/each}
	</ul>

	<p>{@html example}</p>
</div>

<style>
	.c {
		font-family: var(--font-sans);
	}

	ul {
		list-style-type: none;
		padding-left: 0;
	}

	p {
		font-size: var(--24px);
		font-weight: bold;
	}

	p :global(span) {
		text-decoration: underline;
		text-decoration-thickness: 4px;
		text-underline-offset: 4px;
		text-decoration-skip-ink: none;
	}

	p :global(span:nth-of-type(1)) {
		text-decoration-color: var(--color-gold);
	}

	p :global(span:nth-of-type(2)) {
		text-decoration-color: var(--color-green);
	}

	p :global(span:nth-of-type(3)) {
		text-decoration-color: var(--color-purple);
	}

	li:nth-of-type(1) span {
		color: var(--color-gold);
		font-weight: bold;
	}

	li:nth-of-type(2) span {
		color: var(--color-green);
		font-weight: bold;
	}

	li:nth-of-type(3) span {
		color: var(--color-purple);
		font-weight: bold;
	}
</style>
