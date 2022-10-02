<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { t } from "svelte-intl-precompile";

    // import { getPages } from '$lib/pages';

    // const { url } = import.meta;
    // const modules = import.meta.glob('./**/*.svelte'); // Include subfolder
    // // const modules = import.meta.glob('./**.svelte'); // Current folder only

    // const pages = getPages(url, modules);

    // console.log(pages);

    let pages = [1960, 1970, 1980, 1990, 2000, 2010, 2020];

    import { currentYear } from "../store";

    let menuActive = false;
    function handleClick() {
        menuActive = !menuActive;
    }
</script>

<header class="padding-t-xs">
    <nav>
        <h1 on:click={handleClick} class="margin-none">
            {$currentYear}
        </h1>
        {#if menuActive}
            <div
                class="menu padding-all-xs transparent border-l border-radius-l"
            >
                <ul>
                    {#each pages as p}
                        <li class:active={$currentYear === p}>
                            <a href="./{p}">{p}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </nav>
</header>

<style>
    .active {
        font-weight: 700;
    }

    .menu {
        position: absolute;
    }

    ul {
        display: flex;
        list-style: none;
        gap: 10px;
        padding: 0;
    }

    h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        /* identical to box height */

        letter-spacing: -0.02em;

        color: #8300fe;
    }
</style>
