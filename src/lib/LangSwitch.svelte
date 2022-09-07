<script>
    import { t, locale, locales } from 'svelte-intl-precompile';
</script>

{#each $locales as loc}
    <button type="button" class={loc === $locale && 'current'} on:click={() => ($locale = loc)}
        >{loc}</button
    >
{/each}
