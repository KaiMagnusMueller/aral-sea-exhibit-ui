<script lang="ts">
    import TimelineHeader from './components/TimelineHeader.svelte';
    import LangSwitch from '$lib/LangSwitch.svelte';
    import TopicSelector from '$lib/TopicSelector.svelte';
    // import PageTransition from '$lib/PageTransition.svelte';

    // /** @type {import('./$types').LayoutData} */
    // export let data: any;
</script>

<header class="flex">
    <TimelineHeader />
</header>

<div class="content-container">
    <!-- <PageTransition pathname={data.pathname}> -->
    <slot />
    <!-- </PageTransition> -->
</div>

<footer class="flex justify-between">
    <LangSwitch />
    <div class="center-helper">
        <TopicSelector />
    </div>
</footer>

<style>
    header {
    }

    .content-container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    footer {
    }

    .center-helper {
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
    }
</style>
