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

<div class="map-view image-transition" class:fade={$topics.currentTopic != 'water'}>
    <div class="debug">
        <p>{$topics.currentTopic}</p>
        <p>{$currentYear}</p>
    </div>

    <svg
        class="map-border"
        width="1760"
        height="514"
        viewBox="0 0 1760 514"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <svg
            width="602"
            height="139"
            viewBox="0 0 602 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id="mask0_928_1130"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="602"
                height="139"
            >
                <rect width="602" height="139" fill="url(#paint0_linear_928_1130)" />
            </mask>
            <g mask="url(#mask0_928_1130)">
                <path d="M602 0L0 139" stroke="black" />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_928_1130"
                    x1="446"
                    y1="8.60261e-05"
                    x2="99.6844"
                    y2="100.386"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#D9D9D9" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
        <svg
            x="1069"
            y="333"
            width="691"
            height="180"
            viewBox="0 0 691 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id="mask0_928_1128"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="691"
                height="180"
            >
                <rect width="691" height="180" fill="url(#paint0_linear_928_1128)" />
            </mask>
            <g mask="url(#mask0_928_1128)">
                <path d="M1 1L161 179L691 66" stroke="black" />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_928_1128"
                    x1="222"
                    y1="65"
                    x2="604.982"
                    y2="-20.5794"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#D9D9D9" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </svg>

    <div class="map" bind:this={mapElem}>
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
        width: 100%;
        display: flex;
        justify-content: center;
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

    .map-border {
        position: absolute;
        left: 0px;
        top: 332px;
    }

    .map-border path {
        stroke: rgba(131, 0, 254, 0.5);
        filter: saturate(0.2);
        /* stroke-dasharray: 2 20 2; */
        stroke-dasharray: 12;
        stroke-width: 2px;
    }
</style>
