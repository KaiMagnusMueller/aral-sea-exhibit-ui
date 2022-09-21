<script lang="ts">
    import { onMount } from 'svelte';
    import {
        getDimensions,
        getSmallestValue,
        getLargestValue,
        scaleValue,
        getColor,
    } from './chartUtils';
    import Tooltip from './Tooltip.svelte';

    export let data = [12, 10, 7, 8];

    export let barWidth = 45;
    export let barGap = 20;
    export let chartHeight = 250;
    export let colorRamp = 'default';

    let chartContainer: HTMLElement;

    let dimensions = [0];
    let chartDimensions = [0];
    let maximumValue: number;
    let minimunmValue: number;
    let rescaledMaximumValue: number;

    // Scale data to calculate coordinates of the chart
    let rescaledData: number[] = [];

    let ready = false;

    // $: console.log(rescaledData);

    onMount(() => {
        dimensions = getDimensions(chartElem);

        console.log(chartElem);

        minimunmValue = getSmallestValue(data);
        maximumValue = getLargestValue(data);

        data.forEach((element) => {
            rescaledData.push(scaleValue(element, [0, maximumValue], [0, dimensions[1]]));
        });

        rescaledMaximumValue = getLargestValue(rescaledData);
        console.log(dimensions);

        ready = true;
    });

    let visibleTooltip = false;
    let hoveredElem: any;

    function showTooltip(event: MouseEvent) {
        hoveredElem = event.target;
        visibleTooltip = true;
    }
    function hideTooltip() {
        // visibleTooltip = false;
        // hoveredElem = '';
    }

    let chartElem: any;

    // $: {
    //     if (chartElem) {
    //         // console.log(chartElem);
    //         chartDimensions = getDimensions(chartElem);
    //         console.log(chartDimensions);
    //     }
    // }
</script>

<div class="chart-container padding-all-s" bind:this={chartContainer} on:mouseleave={hideTooltip}>
    <!-- <div class="chart-legend">
        <p>{maximumValue}</p>
        <p>{dimensions}</p>
    </div> -->
    <!-- <div class="y-axis border-right-l">
        <span>{maximumValue}</span>
        <span>0</span>
    </div> -->
    <!-- <div class="vertical-helper"> -->
    <svg
        bind:this={chartElem}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1 -1  {dimensions[0] + 2} {dimensions[1] + 2}"
    >
        {#if ready}
            {#each rescaledData as entry, i}
                <rect
                    x="{barWidth * i + barGap * i}px"
                    y="{rescaledMaximumValue - entry}px"
                    width="{barWidth}px"
                    height="{entry}px"
                    rx="6px"
                    fill={getColor(colorRamp, i)}
                    data-value={entry}
                    on:mouseenter={(event) => showTooltip(event)}
                    on:mouseleave={hideTooltip}
                />
            {/each}
            <g>
                <text x="0" y="10px" class="small">{maximumValue}</text>
                <text x="0" y={dimensions[1]} class="small">0</text>
                <line x1="20px" y1="" x2="20px" y2="100%" />
            </g>
            <path
                fill="none"
                stroke="green"
                stroke-width="3"
                d="M 0 {dimensions[1] - 40} a 20 20, 0, 0, 0, 20 20"
            />
        {/if}
    </svg>
    <!-- <div class="x-axis border-right-l">
                <span>0</span>
                <span>{dimensions[1]}</span>
            </div> -->
    <!-- </div> -->

    {#if visibleTooltip}
        <Tooltip {hoveredElem} offset={-16} />
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
        height: 100%;
        width: 100%;
        box-sizing: border-box;
    }

    svg {
        background-color: lightgray;
        height: 100%;
        width: 100%;
    }
    rect {
        stroke: var(--aral-color-content);
        stroke-width: 2px;
    }

    line {
        stroke: var(--aral-color-content);
        stroke-width: 2px;
    }

    .y-axis {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: space-between;
    }

    .x-axis {
        display: flex;
        justify-content: space-between;
    }
</style>