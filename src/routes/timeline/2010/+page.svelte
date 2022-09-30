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

    import StatsWages_de from './StatsWages_de.svelte';
    import StatsWages_en from './StatsWages_en.svelte';

    import ImageSection from '../ImageSection.svelte';
    import Window from '$lib/Window.svelte';
    import Image from '$lib/Image.svelte';

    import PflueckerChiwa from '$lib/media/baumwollpfluecker-in-chiwa.jpg';

    $currentYear = 2010;

    $topics.topicList = [
        {
            title: $t('2010.water.title_short'),
            value: 'water',
        },
        {
            title: $t('2010.cotton.title_short'),
            value: 'cotton',
        },
        {
            title: $t('2010.politics.title_short'),
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
        <div class="align-bottom margin-l-auto">
            {#if $locale === 'de'}
                <SeaTable_de />
            {:else if $locale === 'en'}
                <SeaTable_en />
            {/if}
        </div>
    {/if}
    {#if $topics.currentTopic === 'cotton'}
        <div
            class="second-image from-bottom-left-corner-2 z-1000 to-width-80 image image-transition"
        >
            <Window caption={$t('2010.cotton.image')}>
                <Image src={PflueckerChiwa} alt={$t('2010.cotton.image')} />
            </Window>
        </div>
        <div class="align-bottom margin-l-auto margin-b-m">
            <Window padding transparent>
                {#if $locale === 'de'}
                    <StatsWages_de />
                {:else if $locale === 'en'}
                    <StatsWages_en />
                {/if}
            </Window>
        </div>
    {/if}
    {#if $topics.currentTopic === 'politics'}{/if}
</ImageSection>

<style>
    .second-image {
        width: 500px;
        position: absolute;
    }

    .karakum-image {
        position: absolute;
        width: 1000px;
    }
</style>
