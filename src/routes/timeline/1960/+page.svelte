<script>
    import { t } from 'svelte-intl-precompile';
    import { page } from '$app/stores';
    import TextContent from '../components/TextContent.svelte';

    // import { fly } from 'svelte/transition';
</script>

<svelte:head>
    <title>1960</title>
    <meta name="description" content="Aral Sea 1960" />
</svelte:head>

<TextContent duration={600}>
    <div class="content">
        <h1>{$t('1960.water.title')}</h1>
        <p>{$t('1960.water.content')}</p>
        <h1>{$t('1960.cotton.title')}</h1>
        <p>{$t('1960.cotton.content')}</p>
        <h1>{$t('1960.politics.title')}</h1>
        <p>{$t('1960.politics.content')}</p>
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
