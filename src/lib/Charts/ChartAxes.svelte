<script lang="ts">
    import { onMount } from 'svelte';

    export let containerDimensions = {
        width: 0,
        height: 0,
    };
    export let minimumValue: number;
    export let maximumValue: number;

    export let chartInnerDimensions = {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    };

    export let chartPadding = {
        x: 0,
        y: 0,
    };

    let legendPadding = {
        top: 2,
        right: 2,
        bottom: 20,
        left: 40,
    };

    export let yAxisWidth = 0;
    export let xAxisHeight = 0;

    export let radius = 12;

    onMount(() => {
        const yAxisBBox = yAxisElem.getBBox();
        yAxisWidth = Math.abs(Math.round(yAxisBBox.width));

        const xAxisBBox = xAxisElem.getBBox();
        xAxisHeight = Math.round(xAxisBBox.height);
        // console.log(document.getElementById("y-axis-text"));
    });

    $: console.log(yAxisElem?.getBBox());

    let yAxisElem: any;
    let xAxisElem: any;
</script>

<g id="y-axis-text" bind:this={yAxisElem}>
    <text text-anchor="start" x="0" y="10px" class="small">{maximumValue}</text>
    <text text-anchor="v" x="0" y={chartInnerDimensions.height} class="small">{minimumValue}</text>
</g>
<line
    x1={yAxisWidth + legendPadding.right}
    y1=""
    x2={yAxisWidth + legendPadding.right}
    y2={containerDimensions.height - radius - xAxisHeight}
/>
<path
    fill="none"
    d="M {yAxisWidth + legendPadding.right} {containerDimensions.height -
        radius -
        xAxisHeight -
        legendPadding.top} a {radius} {radius}, 0, 0, 0, {radius} {radius}"
/>
<g id="x-axis-text" bind:this={xAxisElem}>
    <text x="100px" y="{containerDimensions.height}px" class="small">{maximumValue}</text>
    <text x="20px" y="{containerDimensions.height}px" class="small">asdf</text>
</g>
<line
    x1="{radius + yAxisWidth}px"
    y1={containerDimensions.height - xAxisHeight - legendPadding.top}
    x2={containerDimensions.width}
    y2={containerDimensions.height - xAxisHeight - legendPadding.top}
/>

<style>
    rect {
        stroke: var(--aral-color-content);
        stroke-width: 2px;
    }

    text {
        font-weight: 700;
    }

    line,
    path {
        stroke: var(--aral-color-content);
        stroke-width: 2px;
    }
</style>
