<script lang="ts">
    import { page } from '$app/stores';
    import { t } from 'svelte-intl-precompile';

    // import { getPages } from '$lib/pages';

    // const { url } = import.meta;
    // const modules = import.meta.glob('./**/*.svelte'); // Include subfolder
    // // const modules = import.meta.glob('./**.svelte'); // Current folder only

    // const pages = getPages(url, modules);

    // console.log(pages);

    let pages = [1960, 1970, 1980, 1990, 2000, 2010, 2020];

    console.log($page);
</script>

<header>
    <nav>
        <ul>
            <li class:active={$page.url.pathname === '/'}>
                <a href="/">{$t('general.reset')}</a>
            </li>
            {#each pages as p}
                <li class:active={$page.url.pathname === '/timeline/' + p}>
                    <a href="./{p}">{p}</a>
                </li>
            {/each}
        </ul>
    </nav>
</header>

<style>
    .active {
        font-weight: 700;
    }

    ul {
        display: flex;
        list-style: none;
        gap: 10px;
        padding: 0;
    }
</style>
