<script>
    import { t } from 'svelte-intl-precompile';
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>1980</title>
    <meta name="description" content="Aral Sea 1980" />
</svelte:head>

<div class="content">
    <h1>{$t('1980.water.title')}</h1>
    <p>{$t('1980.water.content')}</p>
</div>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
