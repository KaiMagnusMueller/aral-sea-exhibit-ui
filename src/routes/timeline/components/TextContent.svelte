<script lang="ts">
    import { fly } from 'svelte/transition';

    export let translate = 25;
    export let delay = 0;
    export let duration = 200;
</script>

<div in:fly={{ delay: delay, duration: duration, x: translate }}>
    <slot />
</div>

<style></style>
