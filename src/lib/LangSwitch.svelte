<script lang="ts">
    import { onMount } from 'svelte';
    import { t, locale, locales } from 'svelte-intl-precompile';
    import TabBar from './TabBar.svelte';

    let entries: any = [];

    onMount(() => {
        constructEntries();
    });

    function constructEntries() {
        entries = [];

        $locales.forEach((loc) => {
            const title = loc.toLocaleUpperCase();
            const value = loc;
            const active = loc === $locale ? true : false;

            entries.push({
                title: title,
                value: value,
                active: active,
            });
        });
    }

    function handleClick(event: MouseEvent) {
        console.log(event);

        $locale = event.detail.activeItem;

        constructEntries();
    }
</script>

<TabBar items={entries} on:selection={handleClick} />

<!-- {#each $locales as loc}
    <button type="button" class:curent={loc === $locale} on:click={() => ($locale = loc)}
        >{loc}</button
    >
{/each} -->
