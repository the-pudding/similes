<script>
	import { getContext } from "svelte";
	import CMS from "$components/helpers/CMS.svelte";
	import Footer from "$components/Footer.svelte";

	const copy = getContext("copy");
	// const data = getContext("data");

	const body = copy?.body || [];
	const components = {};
</script>

<div class="c">
	<CMS {body}></CMS>
</div>

<svelte:boundary onerror={(e) => console.error(e)}>
	<!-- <Footer recirc={true} /> -->
</svelte:boundary>

<style>
	.c {
		max-width: 640px;
		margin: 0 auto;
	}
</style>
