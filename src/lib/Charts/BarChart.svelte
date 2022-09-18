<script lang="ts">
    export let data = [12, 10, 7, 8];

    let chartContainer: HTMLElement;
</script>

<div bind:this={chartContainer}>
    {#each data as dataPoint}
        <div height={dataPoint} />
    {/each}
</div>
