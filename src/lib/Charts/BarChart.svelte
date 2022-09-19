<script lang="ts">
    import { onMount } from 'svelte';
    import { number } from 'svelte-intl-precompile';

    export let data = [12, 10, 7, 8];

    export let barWidth = 45;
    export let barGap = 20;
    export let chartHeight = 250;

    let chartContainer: HTMLElement;

    let dimensions = [0];
    let maximumValue: number;
    let rescaledMaximumValue: number;

    let rescaledData: number[] = [];

    let ready = false;

    $: console.log(rescaledData);

    onMount(() => {
        dimensions = getDimensions(chartContainer);
        maximumValue = getLargestValue(data);

        data.forEach((element) => {
            rescaledData.push(scaleValue(element, [0, maximumValue], [0, dimensions[1]]));
        });

        rescaledMaximumValue = getLargestValue(rescaledData);

        ready = true;
    });

    function getLargestValue(numbers: number[]) {
        return Math.max(...numbers);
    }

    function getDimensions(elem: HTMLElement) {
        return [elem.clientWidth, elem.clientHeight];
    }

    function scaleValue(value: number, from: number[], to: number[]) {
        var scale = (to[1] - to[0]) / (from[1] - from[0]);
        var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
        return ~~(capped * scale + to[0]);
    }
</script>

<div class="chart-container" bind:this={chartContainer} style="height: {chartHeight}px">
    <div class="chart-legend">
        <p>{maximumValue}</p>
        <p>{dimensions}</p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 {dimensions[0] + 4} {dimensions[1] + 4}">
        {#if ready}
            {#each rescaledData as entry, i}
                <rect
                    x="{barWidth * i + barGap * i}px"
                    y="{rescaledMaximumValue - entry}px"
                    width="{barWidth}px"
                    height="{entry}px"
                    rx="6px"
                />
            {/each}
        {/if}
    </svg>
</div>

<style>
    .chart-legend {
        position: absolute;
        top: 0;
        right: 0;
    }

    .chart-container {
        position: relative;
        background-color: bisque;
        display: flex;
    }
    rect {
        stroke: var(--aral-color-content);
        stroke-width: 2px;
        fill: aqua;
    }
</style>
