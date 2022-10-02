<script lang="ts">
    import { fly } from 'svelte/transition';

    export let header = '';
    export let caption = '';
    export let padding = false;
    export let transparent = false;
    export let enableEvents = false

    let lightbox = false;

    let delay = 200 * Math.random();
</script>

<div class="window-container" class:lightbox in:fly={{ delay: delay, duration: 800, y: 50 }}>
    <div
        class="content-container border-radius-l border-l shadow-m"
        class:transparent
        on:click|self={() => {
            lightbox = !lightbox;
        }}
    >
        {#if header}
            <div class="header flex flex-cross-center padding-left-s border-bottom-l">
                <h2>{header}</h2>
            </div>
        {/if}
        <div class="content" class:padding-all-s={padding} class:enable-pointer-events="{enableEvents}">
            <slot />
        </div>
    </div>
    {#if caption}
        <div class="caption border-radius-l padding-all-xs">
            <p>{caption}</p>
        </div>
    {/if}
</div>

<style>
    .content-container {
        position: relative;
        background-color: var(--aral-color-bg);
        overflow: clip;
        height: inherit;
        display: flex;
        flex-direction: column;
        transition: all 0.5s ease;
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

    .enable-pointer-events {
        pointer-events: all;
    }

    .caption {
        width: 80%;
        margin-top: var(--size-xs);
        background: #fffcdf2f;
        backdrop-filter: blur(27px);
    }

    .caption p {
        margin: 0;
    }

    .lightbox {
        /* position: fixed;
        left: 50px;
        top: 50px;
        transform: translate(-50%, -50%); */
    }
</style>
