<script lang="ts">
    export let header = '';
</script>

<div class="window-container border-radius-l border-l shadow-m">
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
    }
</style>
