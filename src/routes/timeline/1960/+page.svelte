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

    // import { fly } from 'svelte/transition';

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
</script>

<svelte:head>
    <title>{$t('1960.title')}</title>
    <meta name="description" content={$t('1960.title')} />
</svelte:head>

<ContentContainer>
    <ImageSection>
        <div class="first-image">
            <Window>
                <Image src={Cotton_01} alt={$t('1960.water.title')} />
            </Window>
        </div>
        <div class="second-image">
            <Window>
                <Image src={SichlingFisch} alt={'text'} />
            </Window>
        </div>
    </ImageSection>

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

        <TextContent duration={600}>
            <div class="content">
                <!-- <h1>{$t('1960.water.title')}</h1>
                <p>{$t('1960.water.content')}</p>
                <h1>{$t('1960.cotton.title')}</h1>
                <p>{$t('1960.cotton.content')}</p>
                <h1>{$t('1960.politics.title')}</h1>
                <p>{$t('1960.politics.content')}</p> -->
                <!-- 
                {#if $locale === 'de'}
                    <Water_de />
                    <Cotton_de />
                    <Politics_de />
                {:else if $locale === 'en'}
                    <Water_en />
                    <Cotton_en />
                    <Politics_en />
                {/if} -->
            </div>
        </TextContent>
    </TextSection>
</ContentContainer>

<TopicSelector />

<style>
    .first-image {
        width: 50%;
        top: 80px;
        right: 0;
        position: absolute;
        transform: rotate(2deg);
    }

    .second-image {
        width: 50%;
        top: 300px;
        left: 100px;
        position: absolute;
        transform: rotate(-2deg);
    }

    .chart-test {
        height: 350px;
        width: 500px;
    }
</style>
