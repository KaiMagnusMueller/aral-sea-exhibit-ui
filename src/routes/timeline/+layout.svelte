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

<div class="content-container grid col-2 gap-l">
    <!-- <PageTransition pathname={data.pathname}> -->
    <slot />
    <!-- </PageTransition> -->
</div>

<style>
    header {
    }

    .content-container {
        height: 940px;
    }

    .tab-bar {
        margin: auto;
    }
</style>
