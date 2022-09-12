<script>
    import TabBar from '$lib/TabBar.svelte';

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

    let imagePath = '';

    import { topics, currentYear } from '../store';
    import ContentContainer from '../ContentContainer.svelte';
    import ImageSection from '../ImageSection.svelte';
    import TextSection from '../TextSection.svelte';

    $currentYear = 1960;

    $topics.topicList = [
        {
            title: $t('1960.water.title_short'),
            name: 'water',
        },
        {
            title: $t('1960.cotton.title_short'),
            name: 'cotton',
        },
        {
            title: $t('1960.politics.title_short'),
            name: 'politics',
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
            <Image src={Cotton_01} alt={$t('1960.water.title')} />
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

<TabBar />

<style>
    .content {
        overflow-y: scroll;
    }

    /* in:fly={{ delay: 200, duration: 200, x: 50 }}
    out:fly={{ delay: 0, duration: 200, x: -50 }} */

    .first-image {
        width: 50%;
        top: 80px;
        right: 0;
        position: absolute;
        transform: rotate(2deg);
    }
</style>
