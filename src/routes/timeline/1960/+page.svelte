<script>
    import { t } from 'svelte-intl-precompile';
</script>

<svelte:head>
    <title>1960</title>
    <meta name="description" content="Aral Sea 1960" />
</svelte:head>

<div class="content">
    <h1>{$t('1960.water.title')}</h1>
    <p>{$t('1960.water.content')}</p>
</div>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
