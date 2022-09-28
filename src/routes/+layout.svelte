<script lang="ts">
	import '../app.css';

	import LangSwitch from '$lib/LangSwitch.svelte';

	import { addMessages, init } from 'svelte-intl-precompile';
	import en from '$locales/en';
	import de from '$locales/de';
	addMessages('en', en);
	addMessages('de', de);
	init({
		initialLocale: 'de',
		fallbackLocale: 'en',
	});

	import PageTransition from '$lib/PageTransition.svelte';

	// /** @type {import('./$types').LayoutData} */
	// export let data: any;
</script>

<main data-sveltekit-prefetch>
	<!-- <PageTransition pathname={data.pathname}> -->
	<slot />
	<!-- </PageTransition> -->
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem 5rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		height: 100vh;
		gap: 32px;
		position: relative;
		overflow: hidden;
	}
</style>
