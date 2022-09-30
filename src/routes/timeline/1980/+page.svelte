<script>
    import { t, locale } from 'svelte-intl-precompile';
    import { page } from '$app/stores';
    import { topics, currentYear, acknowledgeModelReset } from '../store';
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

    import ImageSection from '../ImageSection.svelte';
    import Window from '$lib/Window.svelte';
    import Image from '$lib/Image.svelte';

    $currentYear = 1980;

    $topics.topicList = [
        {
            title: $t('1980.water.title_short'),
            value: 'water',
        },
        {
            title: $t('1980.cotton.title_short'),
            value: 'cotton',
        },
        {
            title: $t('1980.politics.title_short'),
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
        <div class="second-image from-top-right to-width-80 image image-transition">
            <Window>
                <Image src={''} alt={'text'} />
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
        <div class="align-bottom margin-l-auto margin-b-m">
            <Window padding transparent>
                {#if $locale === 'de'}
                    <StatsHarvest_de />
                {:else if $locale === 'en'}
                    <StatsHarvest_en />
                {/if}
            </Window>
        </div>
        <div class="cotton-image rotate--2deg to-width-80 image image-transition">
            <Window caption={$t('1960.cotton.image')}>
                <Image src={''} alt={$t('1960.cotton.image')} />
            </Window>
        </div>
    {/if}
    {#if $topics.currentTopic === 'politics'}
        <div class="karakum-image image image-transition center-v-h">
            <Window>
                <Image src={''} alt={'text'} />
            </Window>
        </div>
    {/if}

    <!-- <div class="first-image">
            <Window>
                <Image src={Cotton_01} alt={$t('1960.water.title')} />
            </Window>
        </div> -->
</ImageSection>

<style>
</style>
