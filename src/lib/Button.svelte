<script lang="ts">
    import { isEmpty } from '$lib/utils';
    import { createEventDispatcher } from 'svelte';

    export let iconName: string = '';
    export let label = 'Placeholder';
    export let variant = 'secondary';
    export let size = 'm';

    let dispatch = createEventDispatcher();

    function handleClick(event: MouseEvent) {
        dispatch('click', {});
    }
</script>

<div
    class="{variant} {size} button-wrapper border-l"
    class:border-l={variant === 'secondary'}
    on:click={handleClick}
>
    {#if !isEmpty($$slots)}
        <slot />
    {:else if iconName}
        <div class="inner icon">
            {@html iconName}
        </div>
    {:else}
        <div class="inner">
            {#if size === 'xl'}
                <span class="text-body-xl">{label}</span>
            {:else}
                <span class="text-body-m-bold">{label}</span>
            {/if}
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

    .secondary .inner:hover,
    .tertiary .inner:hover {
        background-color: var(--aral-color-content);
        color: var(--aral-color-bg);
        fill: var(--aral-color-bg);
    }

    .primary {
        background-color: var(--aral-color-content);
        color: var(--aral-color-bg);
        fill: var(--aral-color-bg);
    }

    .icon {
        height: 32px;
        width: 32px;
        padding: var(--size-xxs);
    }

    .normal span {
    }
</style>
