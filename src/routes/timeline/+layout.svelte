<script lang="ts">
    import TimelineHeader from './components/TimelineHeader.svelte';
    import LangSwitch from '$lib/LangSwitch.svelte';
    // import PageTransition from '$lib/PageTransition.svelte';

    // /** @type {import('./$types').LayoutData} */
    // export let data: any;
</script>

<header class="flex">
    <LangSwitch />

    <TimelineHeader />
</header>

<div class="content-container">
    <!-- <PageTransition pathname={data.pathname}> -->
    <slot />
    <!-- </PageTransition> -->
</div>

<style>
    header {
    }

    .content-container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
</style>
