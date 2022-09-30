<script lang="ts">
    import AralSeaMap from '$lib/AralSeaMap/AralSeaMap.svelte';
    import { afterUpdate, onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { topics, currentYear } from '../../routes/timeline/store';

    let highlight = false;

    onMount(() => {
        // console.log('mount');
        // resetStrokes(mapElem, $currentYear, '#A1EEFF', '#8300FE');
    });

    afterUpdate(() => {
        if ($topics.currentTopic === 'water') {
            highlight = true;
        } else {
            highlight = false;
        }
    });

    let mapElem: HTMLDivElement;
</script>

<div class="map-view image-transition" class:fade={$topics.currentTopic != 'water'}>
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

    <div class="map">
        <AralSeaMap bind:mapElem currentYear={$currentYear} {highlight} />
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
