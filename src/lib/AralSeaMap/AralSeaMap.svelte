<script lang="ts">
    import Background from './parts/Background.svelte';
    import State1960 from './parts/State1960.svelte';
    import State1970 from './parts/State1970.svelte';
    import State1980 from './parts/State1980.svelte';
    import State1990 from './parts/State1990.svelte';
    import State2000 from './parts/State2000.svelte';
    import State2010 from './parts/State2010.svelte';
    import State2020 from './parts/State2020.svelte';

    import { afterUpdate, onMount } from 'svelte';
    import { resetStrokes } from '$lib/BackgroundMap/mapHelpers';

    export let mapElem: any = '';
    export let currentYear: number = 1960;
    export let highlight = false;

    $: {
        console.log(mapElem);
        console.log(currentYear);
        console.log(highlight);
        let highlightColor = '#A1EEFF';

        if (highlight) {
            highlightColor = '#8300FE';
        }

        resetStrokes(mapElem, currentYear, '#A1EEFF', highlightColor);
    }

    onMount(() => {});

    afterUpdate(() => {
        let highlightColor = '#A1EEFF';

        if (highlight) {
            highlightColor = '#8300FE';
        }

        resetStrokes(mapElem, currentYear, '#A1EEFF', highlightColor);
    });
</script>

<div class="map-wrapper" bind:this={mapElem}>
    <div><Background /></div>
    {#if currentYear <= 2020}
        <div data-year="2020"><State2020 /></div>
    {/if}
    {#if currentYear <= 2010}
        <div data-year="2010"><State2010 /></div>
    {/if}
    {#if currentYear <= 200}
        <div data-year="2000"><State2000 /></div>
    {/if}
    {#if currentYear <= 1990}
        <div data-year="1990"><State1990 /></div>
    {/if}
    {#if currentYear <= 1980}
        <div data-year="1980"><State1980 /></div>
    {/if}
    {#if currentYear <= 1970}
        <div data-year="1970"><State1970 /></div>
    {/if}
    {#if currentYear <= 1960}
        <div data-year="1960"><State1960 /></div>
    {/if}
</div>

<style>
    .map-wrapper {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: a;
    }

    div > div {
        grid-area: a;
    }
</style>
