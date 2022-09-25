<script>
    import { t } from 'svelte-intl-precompile';
    import { page } from '$app/stores';
    import { topics, currentYear } from '../store';

    $currentYear = 1990;
</script>

<svelte:head>
    <title>1990</title>
    <meta name="description" content="Aral Sea 1990" />
</svelte:head>

<div class="content">
    <h1>{$t('1990.water.title')}</h1>
    <p>{$t('1990.water.content')}</p>
</div>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
