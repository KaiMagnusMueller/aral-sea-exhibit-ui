<script>
    import Image from '$lib/Image.svelte';

    export let src = '';
    export let alt = '';
</script>

<img {src} {alt} class="border-radius-l border-l shadow-m" />

<style>
    img {
        width: 100%;
    }
</style>
