<script lang="ts">
    import { fly } from 'svelte/transition';

    export let header = '';
    export let padding = false;
    export let transparent = false;

    function handleClick(event: MouseEvent) {
        console.log(event);
    }

    let lightbox = false;

    let delay = 200 * Math.random();
</script>

<div
    class="window-container border-radius-l border-l shadow-m"
    class:lightbox
    class:transparent
    on:click|self={() => {
        lightbox = !lightbox;
    }}
    in:fly={{ delay: delay, duration: 800, y: 50 }}
>
    {#if header}
        <div class="header flex flex-cross-center padding-left-s border-bottom-l">
            <h2>{header}</h2>
        </div>
    {/if}
    <div class="content" class:padding-all-s={padding}>
        <slot />
    </div>
</div>

<style>
    .window-container {
        position: relative;
        background-color: var(--aral-color-bg);
        overflow: clip;
        height: inherit;
        display: flex;
        flex-direction: column;
        transition: all 0.5s ease;
    }

    .transparent {
        background: rgba(255, 255, 255, 0.6);
        /* Black */

        backdrop-filter: blur(27px);
        /* Note: backdrop-filter has minimal browser support */
    }

    .header {
        height: var(--size-m);
    }

    .header h2 {
        margin: 0;
    }

    .content {
        flex-grow: 1;
        display: flex;
        pointer-events: none;
    }

    .lightbox {
        /* position: fixed;
        left: 50px;
        top: 50px;
        transform: translate(-50%, -50%); */
    }
</style>
