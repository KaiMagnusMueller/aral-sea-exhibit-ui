<script>
    import { fly } from 'svelte/transition';
</script>

<div class="text-section" in:fly={{ delay: 0, duration: 500, x: 25 }}>
    <slot />
</div>

<style>
    .text-section {
        overflow-y: scroll;
    }
</style>
