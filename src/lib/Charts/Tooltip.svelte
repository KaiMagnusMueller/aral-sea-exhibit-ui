<script lang="ts">
    export let hoveredElem: SVGRectElement;
    import { fade } from 'svelte/transition';

    let tooltipPos: number[] = [];

    $: {
        tooltipPos[0] = hoveredElem.x.baseVal.value;
        tooltipPos[1] = hoveredElem.y.baseVal.value;

        console.log(tooltipPos);
    }
</script>

<div
    transition:fade={{ delay: 0, duration: 25 }}
    style="position:absolute; left: {tooltipPos[0]}px; top: {tooltipPos[1]}px"
>
    {hoveredElem.attributes['data-value'].value}
</div>

<style>
    div {
        background-color: var(--aral-color-content);
        border-radius: var(--border-radius-l);
        padding: var(--size-xxs);
        color: var(--aral-color-bg);
        transform: translate(-50%, -50%);
    }
</style>
