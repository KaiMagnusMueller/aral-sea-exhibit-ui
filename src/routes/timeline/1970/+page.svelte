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

    // import { fly } from 'svelte/transition';

    import Image from '$lib/Image.svelte';
    import AralSeaOutline from './AraSeaOutline.svelte';
    import Briefmarke from '$lib/media/sowjetunion-briefmarke-1984.jpg';

    import { topics, currentYear } from '../store';
    import ContentContainer from '../ContentContainer.svelte';
    import ImageSection from '../ImageSection.svelte';
    import TextSection from '../TextSection.svelte';
    import Window from '$lib/Window.svelte';
    import StatsProductionDe from './StatsProduction_de.svelte';
    import StatsProductionEn from './StatsProduction_en.svelte';

    $currentYear = 1970;

    $topics.topicList = [
        {
            title: $t('1970.water.title_short'),
            value: 'water',
        },
        {
            title: $t('1970.cotton.title_short'),
            value: 'cotton',
        },
        {
            title: $t('1970.politics.title_short'),
            value: 'politics',
        },
    ];
</script>

<svelte:head>
    <title>{$t('1970.title')}</title>
    <meta name="description" content={$t('1970.title')} />
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
    <div class="align-bottom margin-l-auto">
        {#if $topics.currentTopic === 'water'}
            {#if $locale === 'de'}
                <SeaTable_de />
            {:else if $locale === 'en'}
                <SeaTable_en />
            {/if}
        {/if}
    </div>
    {#if $topics.currentTopic === 'cotton'}
        <div class="align-bottom margin-l-auto margin-b-m">
            <Window padding transparent>
                {#if $locale === 'de'}
                    <StatsProductionDe />
                {:else if $locale === 'en'}
                    <StatsProductionEn />
                {/if}
            </Window>
        </div>
    {/if}
    {#if $topics.currentTopic === 'politics'}
        <div class="karakum-image image image-transition center-v-h">
            <Window caption={$t('1970.politics.image')}>
                <Image src={Briefmarke} alt={$t('1970.politics.image')} />
            </Window>
        </div>
    {/if}
</ImageSection>

<style>
    .karakum-image {
        position: absolute;
        width: 1000px;
    }
</style>
