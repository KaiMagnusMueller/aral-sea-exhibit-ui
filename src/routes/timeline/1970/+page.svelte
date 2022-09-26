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
    import Cotton_01 from '$lib/media/Cotton_01.jpg';
    import AralSeaOutline from './AraSeaOutline.svelte';

    import { topics, currentYear } from '../store';
    import ContentContainer from '../ContentContainer.svelte';
    import ImageSection from '../ImageSection.svelte';
    import TextSection from '../TextSection.svelte';
    import Window from '$lib/Window.svelte';

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
    <div class="first-image">
        <Window>
            <Image src={Cotton_01} alt={$t('1960.water.title')} />
        </Window>
    </div>
</ImageSection>

<style>
    .first-image {
        width: 50%;
        right: 0;
        top: 80px;
        position: absolute;
        transform: rotate(2deg);
    }
</style>
