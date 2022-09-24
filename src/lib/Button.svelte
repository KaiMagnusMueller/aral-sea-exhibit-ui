<script lang="ts">
    import { isEmpty } from '$lib/utils';

    export let iconName: string = '';
    export let label = 'Placeholder';

    console.log($$slots);
</script>

<div class="button-wrapper border-l ">
    {#if !isEmpty($$slots)}
        <slot />
    {:else if iconName}
        <div class="inner icon">
            {@html iconName}
        </div>
    {:else}
        <div class="inner">
            <span class="text-body-m">{label}</span>
        </div>
    {/if}
</div>

<style>
    .button-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        border-radius: 12px;
        cursor: pointer;
    }

    .button-wrapper:hover {
    }

    .inner {
        border-radius: 8px;
        padding: 6px 16px;
    }

    .inner:hover {
        background-color: var(--aral-color-content);
        color: var(--aral-color-bg);
        fill: var(--aral-color-bg);
    }

    .icon {
        height: 32px;
        width: 32px;
        padding: 6px;
    }
</style>
