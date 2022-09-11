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

    import { topics } from '../store';

    $topics = [
        {
            title: $t('1970.water.title_short'),
            name: 'water',
            current: true,
        },
        {
            title: $t('1970.cotton.title_short'),
            name: 'cotton',
        },
        {
            title: $t('1970.politics.title_short'),
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
    <title>1970</title>
    <meta name="description" content="Aral Sea 1970" />
</svelte:head>

<div class="content-container grid col-2 gap-l">
    <div class="image-section">
        <div class="first-image">
            <Image src={Cotton_01} alt={$t('1960.water.title')} />
        </div>
    </div>

    <div class="text-section">
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
    </div>
</div>

<TabBar />

<style>
    .first-image {
        width: 50%;
        right: 0;
        top: 80px;
        position: absolute;
        transform: rotate(2deg);
    }

    .image-section {
        position: relative;
    }
</style>
