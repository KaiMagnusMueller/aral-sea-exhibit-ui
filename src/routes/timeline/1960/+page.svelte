<script>
    import TabBar from '$lib/TabBar.svelte';

    import { t, locale, format, getCurrentLocale } from 'svelte-intl-precompile';
    import { page } from '$app/stores';
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

    import { topics } from '../store';
    import ContentContainer from '../ContentContainer.svelte';
    import ImageSection from '../ImageSection.svelte';
    import TextSection from '../TextSection.svelte';

    $topics = [
        {
            title: $t('1960.water.title_short'),
            name: 'water',
            current: true,
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

    let currentTopic = {
        name: '',
        title: '',
        current: false,
    };
    $: $topics, getCurrentTopic();

    function getCurrentTopic() {
        currentTopic = $topics.find((elem) => elem.current == true);
    }
</script>

<svelte:head>
    <title>1960</title>
    <meta name="description" content="Aral Sea 1960" />
</svelte:head>

<ContentContainer>
    <ImageSection>
        <div class="first-image">
            <Image src={Cotton_01} alt={$t('1960.water.title')} />
        </div>
    </ImageSection>

    <TextSection>
        {#if currentTopic.name === 'water' && currentTopic.current === true}
            {#if $locale === 'de'}
                <Water_de />
            {:else if $locale === 'en'}
                <Water_en />
            {/if}
        {/if}
        {#if currentTopic.name === 'cotton' && currentTopic.current === true}
            {#if $locale === 'de'}
                <Cotton_de />
            {:else if $locale === 'en'}
                <Cotton_en />
            {/if}
        {/if}
        {#if currentTopic.name === 'politics' && currentTopic.current === true}
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
