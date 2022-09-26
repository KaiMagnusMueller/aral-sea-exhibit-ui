<script lang="ts">
    import { afterUpdate, onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { topics, currentYear } from '../../routes/timeline/store';

    import Background from './parts/Background.svelte';
    import State1960 from './parts/State1960.svelte';
    import State1970 from './parts/State1970.svelte';
    import State1980 from './parts/State1980.svelte';
    import State1990 from './parts/State1990.svelte';
    import State2000 from './parts/State2000.svelte';
    import State2010 from './parts/State2010.svelte';
    import State2020 from './parts/State2020.svelte';

    import { resetStrokes } from './mapHelpers';

    onMount(() => {
        console.log('mount');

        // resetStrokes(mapElem, $currentYear, '#A1EEFF', '#8300FE');
    });

    let mapElem: HTMLElement;

    afterUpdate(() => {
        let highlightColor = '#A1EEFF';

        if ($topics.currentTopic === 'water') {
            highlightColor = '#8300FE';
        }

        resetStrokes(mapElem, $currentYear, '#A1EEFF', highlightColor);
    });
</script>

<div class="map-view">
    <div class="debug">
        <p>{$topics.currentTopic}</p>
        <p>{$currentYear}</p>
    </div>

    <div
        class="map image-transition"
        class:fade={$topics.currentTopic != 'water'}
        bind:this={mapElem}
    >
        <div><Background /></div>
        {#if $currentYear <= 2020}
            <div data-year="2020"><State2020 /></div>
        {/if}
        {#if $currentYear <= 2010}
            <div data-year="2010"><State2010 /></div>
        {/if}
        {#if $currentYear <= 200}
            <div data-year="2000"><State2000 /></div>
        {/if}
        {#if $currentYear <= 1990}
            <div data-year="1990"><State1990 /></div>
        {/if}
        {#if $currentYear <= 1980}
            <div data-year="1980"><State1980 /></div>
        {/if}
        {#if $currentYear <= 1970}
            <div data-year="1970"><State1970 /></div>
        {/if}
        {#if $currentYear <= 1960}
            <div data-year="1960"><State1960 /></div>
        {/if}
    </div>
</div>

<style>
    .map-view {
        position: relative;
    }
    .debug {
        position: absolute;
        left: 0;
        top: 0;
    }

    .map {
        position: relative;
        width: 720px;
        height: 872px;
    }

    .fade {
        opacity: 0.5;
    }

    .map > div {
        position: absolute;
        left: 0;
        top: 0;
    }
</style>
