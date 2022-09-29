<script lang="ts">
    import { fade } from 'svelte/transition';

    export let fadeToBlack = false;
    export let fadeFromBlack = true;

    export let startBlack: boolean = false;

    // if (fadeToBlack) {
    //     fadeOut = true;
    // }

    export let delay: number = 0;

    setTimeout(() => {
        startBlack = !startBlack;
    }, delay);
</script>

{#if startBlack}
    <div class="fadeOut" out:fade={{ delay: 0, duration: 300 }} />
{/if}

<style>
    .fadeOut {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: black;
    }
</style>
