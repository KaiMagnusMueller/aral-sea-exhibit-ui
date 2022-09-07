<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    onMount(() => {
        goto('/timeline/1960', { replaceState: true });
    });
</script>
