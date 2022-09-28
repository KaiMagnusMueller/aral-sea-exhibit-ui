<script>
    import TopicSelector from '$lib/TopicSelector.svelte';

    import { t, locale } from 'svelte-intl-precompile';
    import TextContent from '../components/TextContent.svelte';
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

    import { fly } from 'svelte/transition';

    import Image from '$lib/Image.svelte';
    import Cotton_01 from '$lib/media/Cotton_01.jpg';
    import SichlingFisch from '$lib/media/Sichling-Fisch.jpg';

    let imagePath = '';

    import { topics, currentYear } from '../store';
    import ContentContainer from '../ContentContainer.svelte';
    import ImageSection from '../ImageSection.svelte';
    import TextSection from '../TextSection.svelte';
    import BarChart from '$lib/Charts/BarChart.svelte';
    import Window from '$lib/Window.svelte';

    $currentYear = 1960;

    $topics.topicList = [
        {
            title: $t('1960.water.title_short'),
            value: 'water',
        },
        {
            title: $t('1960.cotton.title_short'),
            value: 'cotton',
        },
        {
            title: $t('1960.politics.title_short'),
            value: 'politics',
        },
    ];

    $topics = $topics;

    import StatsHarvest_de from './StatsHarvest_de.svelte';
    import StatsHarvest_en from './StatsHarvest_en.svelte';

    import Kolchose from '$lib/media/kolchose.jpg';
    import KarakumChannel from '$lib/media/karakum-channel.jpg';
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
                <Image src={SichlingFisch} alt={'text'} />
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
        <div class="cotton-image from-top-left to-width-80 image image-transition">
            <Window caption={$t('1960.cotton.image')}>
                <Image src={Kolchose} alt={$t('1960.cotton.image')} />
            </Window>
        </div>
    {/if}
    {#if $topics.currentTopic === 'politics'}
        <div class="karakum-image image image-transition center-v-h">
            <Window>
                <Image src={KarakumChannel} alt={'text'} />
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
    .second-image {
        width: 500px;
        position: absolute;
    }

    .chart-test {
        height: 350px;
        width: 500px;
    }

    .cotton-image {
        width: 600px;
        /* left: 100px; */
        position: absolute;
    }

    .karakum-image {
        position: absolute;
        width: 1200px;
        filter: grayscale();
    }

    /* .image:has(.lightbox) {
        width: 80%;
        z-index: 1000;
        transform: rotate(0);
        top: 0;
        // left: 50%;
        top: 50%;

        //transform: translate(-50%, -50%);
    } */

    /* .image-transition {
        transition: all 0.5s ease;
    } */
</style>
