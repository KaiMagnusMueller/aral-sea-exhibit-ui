<script>
    import { t, locale } from 'svelte-intl-precompile';
    import { page } from '$app/stores';
    import TextContent from '../components/TextContent.svelte';
    import Water_de from './Water_de.svx';
    import Water_en from './Water_en.svx';
    import Cotton_de from './Cotton_de.svx';
    import Cotton_en from './Cotton_en.svx';

    // import { fly } from 'svelte/transition';
</script>

<svelte:head>
    <title>1960</title>
    <meta name="description" content="Aral Sea 1960" />
</svelte:head>

<TextContent duration={600}>
    <div class="content">
        <!-- <h1>{$t('1960.water.title')}</h1>
        <p>{$t('1960.water.content')}</p>
        <h1>{$t('1960.cotton.title')}</h1>
        <p>{$t('1960.cotton.content')}</p>
        <h1>{$t('1960.politics.title')}</h1>
        <p>{$t('1960.politics.content')}</p> -->

        {#if $locale === 'de'}
            <Water_de />
            <Cotton_de />
        {:else if $locale === 'en'}
            <Water_en />
            <Cotton_en />
        {/if}
    </div>
</TextContent>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
    /* 
    in:fly={{ delay: 200, duration: 200, x: 50 }}
    out:fly={{ delay: 0, duration: 200, x: -50 }} */
</style>
