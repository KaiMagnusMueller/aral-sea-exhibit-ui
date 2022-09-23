<script lang="ts">
    export let header = '';

    function handleClick(event: MouseEvent) {
        console.log(event);
    }

    let lightbox = false;
</script>

<div
    class="window-container border-radius-l border-l shadow-m"
    class:lightbox
    on:click|self={() => {
        lightbox = !lightbox;
    }}
>
    {#if header}
        <div class="header flex flex-cross-center padding-left-s border-bottom-l">
            <h2>{header}</h2>
        </div>
    {/if}
    <div class="content ">
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
        position: fixed;
        left: 50px;
        top: 50px;
        transform: translate(-50%, -50%);
    }
</style>
