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
	<h1 class="main-title">
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
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.main-title {
		font-weight: 700;
		font-size: 64px;
		line-height: 77px;
		letter-spacing: -0.02em;
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
