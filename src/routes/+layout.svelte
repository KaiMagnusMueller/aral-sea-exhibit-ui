<script lang="ts">
	import Header from '$lib/header/Header.svelte';
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
</script>

<LangSwitch />

<main data-sveltekit-prefetch>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
