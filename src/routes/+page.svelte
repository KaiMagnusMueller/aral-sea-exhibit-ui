<script lang="ts">
	import { onMount } from 'svelte';

	import { t } from 'svelte-intl-precompile';
	import { topics } from '../routes/timeline/store';

	import AralSeaMap from '$lib/AralSeaMap/AralSeaMap.svelte';

	onMount(() => {
		$topics.currentTopic = '';
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="background-map">
	<AralSeaMap currentYear={1970} />
</div>

<section>
	<h1>
		<span class="welcome" />
		{$t('splash.title')}
	</h1>
	{$t('splash.intro.text')}

	<a href="timeline/">{$t('splash.start.button')}</a>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.background-map {
		position: absolute;
		left: 350px;
		top: 330px;
		height: auto;
		width: auto;
		transform: scale(1.5);
		overflow: hidden;
		z-index: -10;
	}
</style>
