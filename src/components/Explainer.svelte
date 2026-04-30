<script>
	let { terms, example } = $props();
</script>

<div class="c">
	<div class="inner">
		<ul>
			{#each terms as { term, description }}
				<li><span>{term}</span> &rarr; {description}</li>
			{/each}
		</ul>

		<p>{@html example}</p>
	</div>
</div>

<style>
	.c {
		font-family: var(--font-sans);
		margin: 1rem auto;
		text-align: center;
	}

	.inner {
		padding: 2rem;
		display: inline-block;
		text-align: left;
	}

	ul {
		list-style-type: none;
		padding-left: 0;
	}

	p {
		font-size: var(--24px);
		font-weight: bold;
		margin-bottom: 0;
		padding: 0;
	}

	p :global(span) {
		text-decoration: underline;
		text-decoration-thickness: 4px;
		text-underline-offset: 4px;
		text-decoration-skip-ink: none;
	}

	p :global(span:nth-of-type(1)) {
		text-decoration-color: var(--color-gold-light);
		color: var(--color-gold-light);
	}

	p :global(span:nth-of-type(2)) {
		text-decoration-color: var(--color-green-light);
		color: var(--color-green-light);
	}

	p :global(span:nth-of-type(3)) {
		text-decoration-color: var(--color-purple-light);
		color: var(--color-purple-light);
	}

	li:nth-of-type(1) span {
		color: var(--color-gold-light);
		font-weight: bold;
	}

	li:nth-of-type(2) span {
		color: var(--color-green-light);
		font-weight: bold;
	}

	li:nth-of-type(3) span {
		color: var(--color-purple-light);
		font-weight: bold;
	}

	@media (max-width: 900px) {
		ul li {
			font-size: var(--16px);
		}
		p {
			font-size: var(--20px);
		}
	}
</style>
