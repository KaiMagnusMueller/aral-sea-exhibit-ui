<script lang="ts">
    import { onMount } from 'svelte';
    import { bind } from 'svelte/internal';
    import { getDimensions, getLargestValue, scaleValue, getColor } from './chartUtils';
    import Tooltip from './Tooltip.svelte';

    export let data = [12, 10, 7, 8];

    export let barWidth = 45;
    export let barGap = 20;
    export let chartHeight = 250;
    export let colorRamp = 'default';

    let chartContainer: HTMLElement;

    let dimensions = [0];
    let maximumValue: number;
    let rescaledMaximumValue: number;

    let rescaledData: number[] = [];

    let ready = false;

    // $: console.log(rescaledData);

    onMount(() => {
        dimensions = getDimensions(chartContainer);
        maximumValue = getLargestValue(data);

        data.forEach((element) => {
            rescaledData.push(scaleValue(element, [0, maximumValue], [0, dimensions[1]]));
        });

        rescaledMaximumValue = getLargestValue(rescaledData);

        ready = true;
    });

    let visibleTooltip = false;
    let hoveredElem: SVGRectElement;

    function showTooltip(event: MouseEvent, entry) {
        hoveredElem = event.target;
        visibleTooltip = true;
        console.log(event);
    }
    function hideTooltip(event: MouseEvent) {
        visibleTooltip = false;
        hoveredElem = '';
        console.log(event);
    }
</script>

<div class="chart-container" bind:this={chartContainer} style="height: {chartHeight}px">
    <div class="chart-legend">
        <p>{maximumValue}</p>
        <p>{dimensions}</p>
    </div>
    {#if ready}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 {dimensions[0] + 4} {dimensions[1] + 4}"
        >
            {#each rescaledData as entry, i}
                <rect
                    x="{barWidth * i + barGap * i}px"
                    y="{rescaledMaximumValue - entry}px"
                    width="{barWidth}px"
                    height="{entry}px"
                    rx="6px"
                    fill={getColor(colorRamp, i)}
                    data-value={entry}
                    on:mouseenter={(event) => showTooltip(event, entry)}
                    on:mouseleave={hideTooltip}
                />
            {/each}
        </svg>
    {/if}

    {#if visibleTooltip}
        <Tooltip {visibleTooltip} {hoveredElem} />
    {/if}
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
    }
</style>
