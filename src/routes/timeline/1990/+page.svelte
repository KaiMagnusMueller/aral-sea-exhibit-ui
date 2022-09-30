<script>
    import { t, locale } from 'svelte-intl-precompile';
    import { page } from '$app/stores';
    import { topics, currentYear } from '../store';
    import Modal from '$lib/Modal.svelte';
    import TextSection from '../TextSection.svelte';

    // @ts-ignore
    import Water_de from './Water_de.svx';
    // @ts-ignore
    import Water_en from './Water_en.svx';
    // @ts-ignore
    import Cotton_de from './Cotton_de.svx';
    // @ts-ignore
    import Cotton_en from './Cotton_en.svx';
    // @ts-ignore
    import Politics_de from './Politics_de.svx';
    // @ts-ignore
    import Politics_en from './Politics_en.svx';

    // @ts-ignore
    import SeaTable_de from './SeaTable_de.svx';
    // @ts-ignore
    import SeaTable_en from './SeaTable_en.svx';
    // @ts-ignore
    import CottonTable_de from './CottonTable_de.svx';
    // @ts-ignore
    import CottonTable_en from './CottonTable_en.svx';

    import StatsHarvest_de from './StatsHarvest_de.svelte';
    import StatsHarvest_en from './StatsHarvest_en.svelte';

    import ImageSection from '../ImageSection.svelte';
    import Window from '$lib/Window.svelte';
    import Image from '$lib/Image.svelte';

    import Pfluecker from '$lib/media/baumwollpfluecker.jpg';
    import BriefmarkeAntilope from '$lib/media/1990-BriefmarkeAntilope.jpg';
    import Jurten from '$lib/media/kazach-jurten.jpg';

    $currentYear = 1990;

    $topics.topicList = [
        {
            title: $t('1990.water.title_short'),
            value: 'water',
        },
        {
            title: $t('1990.cotton.title_short'),
            value: 'cotton',
        },
        {
            title: $t('1990.politics.title_short'),
            value: 'politics',
        },
    ];
</script>

<svelte:head>
    <title>{$t('1960.title')}</title>
    <meta name="description" content={$t('1960.title')} />
</svelte:head>
<TextSection>
    {#if $topics.currentTopic === 'water'}
        {#if $locale === 'de'}
            <Water_de />
        {:else if $locale === 'en'}
            <Water_en />
        {/if}
    {/if}
    {#if $topics.currentTopic === 'cotton'}
        {#if $locale === 'de'}
            <Cotton_de />
        {:else if $locale === 'en'}
            <Cotton_en />
        {/if}
    {/if}
    {#if $topics.currentTopic === 'politics'}
        {#if $locale === 'de'}
            <Politics_de />
        {:else if $locale === 'en'}
            <Politics_en />
        {/if}
    {/if}
</TextSection>

<ImageSection>
    {#if $topics.currentTopic === 'water'}
        <div
            class="second-image caption-width-hack from-bottom-left-corner to-width-80 image image-transition"
        >
            <Window caption={$t('1990.water.image')}>
                <Image src={BriefmarkeAntilope} alt={$t('1990.water.image')} />
            </Window>
        </div>
        <div class="align-bottom margin-l-auto">
            {#if $locale === 'de'}
                <SeaTable_de />
            {:else if $locale === 'en'}
                <SeaTable_en />
            {/if}
        </div>
    {/if}
    {#if $topics.currentTopic === 'cotton'}
        <div class="cotton-image rotate--2deg to-width-80 image image-transition">
            <Window caption={$t('1990.cotton.image')}>
                <Image src={Pfluecker} alt={$t('1990.cotton.image')} />
            </Window>
        </div>
        <div class="cotton-table align-bottom margin-l-auto ">
            {#if $locale === 'de'}
                <CottonTable_de />
            {:else if $locale === 'en'}
                <CottonTable_en />
            {/if}
        </div>
    {/if}
    {#if $topics.currentTopic === 'politics'}
        <div class="karakum-image center-v-h image image-transition">
            <Window caption={$t('1990.politics.image')}>
                <Image src={Jurten} alt={$t('1990.politics.image')} />
            </Window>
        </div>
    {/if}
</ImageSection>

<style>
    .second-image {
        width: 400px;
        position: absolute;
    }

    :global(.caption-width-hack .caption) {
        width: 100% !important;
    }

    .cotton-table {
        max-width: 580px;
    }

    .cotton-image {
        width: 600px;
        /* left: 100px; */
        position: absolute;
    }

    .karakum-image {
        position: absolute;
        width: 1000px;
    }
</style>
