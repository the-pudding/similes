<script>
	let { summary, content } = $props();
</script>

<details>
	<summary>{@html summary}</summary>
	<p>{@html content}</p>
</details>

<style>
	details {
		margin: 1em 0;
	}

	summary {
		cursor: pointer;
		user-select: none;
	}

	details p {
		margin-top: 0.5em;
	}
</style>
