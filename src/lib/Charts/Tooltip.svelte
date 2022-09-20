<script lang="ts">
    import { fade } from 'svelte/transition';
    export let hoveredElem: any;

    let tooltipPos: number[] = [];
    let hovElemDim: number[] = [];

    $: {
        hovElemDim[0] = hoveredElem.x.baseVal.value;
        hovElemDim[1] = hoveredElem.y.baseVal.value;

        hovElemDim[2] = hoveredElem.width.baseVal.value;
        hovElemDim[3] = hoveredElem.height.baseVal.value;

        tooltipPos[0] = hovElemDim[0] + hovElemDim[2] / 2;
        tooltipPos[1] = hovElemDim[1];

        console.log(tooltipPos);
    }
</script>

<div
    transition:fade={{ delay: 0, duration: 50 }}
    class="tooltip-wrapper drop-shadow-m"
    style="position:absolute; left: {tooltipPos[0]}px; top: {tooltipPos[1]}px"
>
    <div class="tooltip-content">
        {hoveredElem.attributes['data-value'].value}
    </div>

    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_513_3116)">
            <path d="M0 0L8 8L16 0H0Z" fill="#000000" />
            <line
                y1="-0.5"
                x2="11.3137"
                y2="-0.5"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 8 8)"
                stroke="#444444"
            />
            <line
                y1="-0.5"
                x2="11.3137"
                y2="-0.5"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 0)"
                stroke="#444444"
            />
        </g>
        <defs>
            <clipPath id="clip0_513_3116">
                <rect width="16" height="9" fill="white" transform="matrix(1 0 0 -1 0 9)" />
            </clipPath>
        </defs>
    </svg>
</div>

<style>
    .tooltip-wrapper {
        transform: translate(-50%, -100%);
        pointer-events: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tooltip-content {
        background-color: var(--aral-color-content);
        border-radius: var(--border-radius-l);
        padding: var(--size-xxs) var(--size-xs);
        color: var(--aral-color-bg);
        border: 1px solid var(--text-color);
    }

    .tooltip-wrapper svg {
        transform: translateY(-1px);
    }
</style>
