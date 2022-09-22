<script lang="ts">
    import ChartAxes from './ChartAxes.svelte';

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

    export let barWidth = 48;
    export let barGap = 20;
    // export let chartHeight = 250;
    export let colorRamp = 'default';

    let chartContainer: HTMLElement;

    let containerDimensions = {
        width: 0,
        height: 0,
    };
    let maximumValue: number;
    let minimumValue: number;
    let rescaledMaximumValue: number;

    let chartPadding = {
        x: 8,
        y: 8,
    };
    let chartInnerDimensions = {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    };

    let legendPadding = {
        top: 2,
        right: 2,
        bottom: 20,
        left: 40,
    };

    // Scale data to calculate coordinates of the chart
    let rescaledData: number[] = [];

    let ready = false;

    onMount(() => {
        console.log(chartElem);
        containerDimensions = getDimensions(chartContainer);

        chartInnerDimensions.width = containerDimensions.width - chartPadding.x * 2 - yAxisWidth;
        chartInnerDimensions.height = containerDimensions.height - chartPadding.y * 2 - xAxisHeight;

        chartInnerDimensions.x = chartPadding.x;
        chartInnerDimensions.y = chartPadding.y;

        console.log(containerDimensions);
        console.log(chartInnerDimensions);

        minimumValue = getSmallestValue(data);
        maximumValue = getLargestValue(data);

        data.forEach((element) => {
            rescaledData.push(
                scaleValue(
                    element,
                    [0, maximumValue],
                    [chartPadding.y, chartInnerDimensions.height]
                )
            );
        });

        rescaledMaximumValue = getLargestValue(rescaledData);

        ready = true;
    });

    let visibleTooltip = false;
    let hoveredElem: any;

    function showTooltip(event: MouseEvent) {
        hoveredElem = event.target;
        visibleTooltip = true;
    }
    function hideTooltip() {
        visibleTooltip = false;
        hoveredElem = '';
    }

    let chartElem: any;

    let yAxisWidth: number = 0;
    let xAxisHeight: number = 0;

    $: {
        console.log(yAxisWidth, xAxisHeight);
        chartInnerDimensions.width =
            containerDimensions.width - chartPadding.x * 2 - yAxisWidth - legendPadding.right;
        chartInnerDimensions.height =
            containerDimensions.height - chartPadding.y * 2 - xAxisHeight - legendPadding.top;

        chartInnerDimensions.x = chartPadding.x + yAxisWidth + legendPadding.right;
        chartInnerDimensions.y = chartPadding.y;

        rescaledData = [];

        data.forEach((element) => {
            rescaledData.push(
                scaleValue(
                    element,
                    [0, maximumValue],
                    [chartPadding.y, chartInnerDimensions.height]
                )
            );
        });

        rescaledMaximumValue = getLargestValue(rescaledData);
    }
</script>

<div class="chart-container margin-all-s" bind:this={chartContainer} on:mouseleave={hideTooltip}>
    {#if ready}
        <svg
            bind:this={chartElem}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1  {containerDimensions.width + 2} {containerDimensions.height + 2}"
            on:mousemove|once={(event) => {
                console.log(event);
            }}
        >
            <svg
                style="overflow: visible;"
                width={chartInnerDimensions.width}
                height={chartInnerDimensions.height}
                x={chartInnerDimensions.x}
                y={chartInnerDimensions.y}
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
                        on:mouseenter={(event) => showTooltip(event)}
                        on:mouseleave={hideTooltip}
                    />
                {/each}
            </svg>
            <ChartAxes
                {containerDimensions}
                {minimumValue}
                {maximumValue}
                {chartInnerDimensions}
                {chartPadding}
                {legendPadding}
                bind:xAxisHeight
                bind:yAxisWidth
            />
        </svg>
    {/if}
    {#if visibleTooltip}
        <Tooltip {hoveredElem} />
    {/if}
</div>

<style>
    .chart-container {
        position: relative;
        /* background-color: bisque; */
        box-sizing: border-box;
        display: flex;
        flex-grow: 1;
    }

    svg {
        /* background-color: lightgray; */
    }
    rect {
        stroke: var(--aral-color-content);
        stroke-width: 2px;
    }

    line,
    path {
        stroke: var(--aral-color-content);
        stroke-width: 2px;
    }
</style>
