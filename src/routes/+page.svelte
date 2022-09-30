<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { t } from 'svelte-intl-precompile';
	import { topics, acknowledgeModelReset } from '../routes/timeline/store';

	import AralSeaMap from '$lib/AralSeaMap/AralSeaMap.svelte';
	import Button from '$lib/Button.svelte';
	import LangSwitch from '$lib/LangSwitch.svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		$topics.currentTopic = '';
	});

	let fadeOut = false;

	function handleTimelineStart() {
		fadeOut = true;

		setTimeout(() => {
			goto('/intro/step-1');
		}, 1200);
	}

	function startFade() {
		fadeOut = true;
	}

	$acknowledgeModelReset = false;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <div transition:fade={{ delay: 0, duration: 300 }}> -->
<div class="background-map">
	<AralSeaMap currentYear={1970} />
</div>

<div class="splash-screen">
	<section class="flex column justify-center">
		<div>
			<h1 class="main-title margin-none">{$t('splash.title')}</h1>
			<h2 class="main-subtitle margin-none">
				{$t('splash.intro.text')}
			</h2>
		</div>
	</section>

	<footer class="flex justify-between">
		<div class="align-bottom">
			<LangSwitch />
		</div>
		<Button
			variant={'primary'}
			size={'xl'}
			label={$t('splash.start.button')}
			on:click={handleTimelineStart}
		/>
	</footer>
</div>
<!-- </div> -->

{#if fadeOut}
	<div class="fadeOut" in:fade={{ delay: 0, duration: 300 }} />
{/if}

<style>
	.splash-screen {
		display: flex;
		flex-direction: column;
		align-content: flex-start;
		flex-grow: 1;
		padding: 4rem 0;
	}
	section {
		flex: 1;
	}

	.main-title {
		font-weight: 700;
		font-size: 64px;
		line-height: 77px;
		letter-spacing: -0.02em;
		color: var(--aral-color-highlight);
	}

	.main-subtitle {
		font-weight: 400;
		font-size: 40px;
		line-height: 48px;
		letter-spacing: -0.02em;
	}
	.background-map {
		/* position: absolute;
		left: 350px;
		top: 330px;
		height: auto;
		width: auto;
		transform: scale(1.5);
		overflow: hidden;
		z-index: -10; */

		position: absolute;
		right: 420px;
		top: 330px;
		height: auto;
		width: auto;
		transform: scale(2);
		overflow: hidden;
		z-index: -10;
	}

	.fadeOut {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: black;
	}
</style>
