<script lang="ts">
    import { onMount } from 'svelte';

    export let items: any = [];

    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();

    function handleClick(event: MouseEvent) {
        // @ts-ignore
        const _item = event.target.attributes.value.value;

        dispatch('selection', {
            activeItem: _item,
        });
    }
</script>

<div class="tab-bar flex border-l gap-xxs border-radius-xl text-heading-m">
    {#each items as item (item.value)}
        <div class:active={item.active} on:click={handleClick} value={item.value}>
            {item.title}
        </div>
    {/each}
</div>

<style>
    .tab-bar {
        user-select: none;
        padding: 6px;
    }

    .tab-bar div {
        padding: 6px 16px;

        border-radius: 12px;
    }

    .tab-bar div.active {
        background-color: black;
        color: white;
    }

    .tab-bar div:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
</style>
