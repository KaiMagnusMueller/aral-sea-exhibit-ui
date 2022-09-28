<script lang="ts">
    import TimelineHeader from './components/TimelineHeader.svelte';
    import LangSwitch from '$lib/LangSwitch.svelte';
    import TopicSelector from '$lib/TopicSelector.svelte';
    import Button from '$lib/Button.svelte';

    import question from '$lib/icons/question.svg?raw';
    // import PageTransition from '$lib/PageTransition.svelte';

    // /** @type {import('./$types').LayoutData} */
    // export let data: any;

    import BackgroundMap from '$lib/BackgroundMap/BackgroundMap.svelte';
    import { afterNavigate } from '$app/navigation';

    afterNavigate(() => {
        console.log('mount timeline page');
    });
</script>

<header class="flex">
    <TimelineHeader />
</header>

<div class="content-container content-1-2-1 row-1 grid gap-s overflow-hidden">
    <!-- <PageTransition pathname={data.pathname}> -->
    <div class="aral-sea-outline flex align-self-center justify-center">
        <BackgroundMap />
    </div>
    <div class="page-content content-1-2-1 row-1 grid gap-s overflow-hidden">
        <slot />
    </div>
    <!-- </PageTransition> -->
</div>

<footer class="flex gap-xxs">
    <LangSwitch />
    <Button iconName={question} />
    <div class="center-helper">
        <TopicSelector />
    </div>
</footer>

<style>
    .content-container {
        flex-grow: 1;

        overflow: hidden;
    }

    .center-helper {
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
    }

    .aral-sea-outline {
        grid-column: 1/-1;
        grid-row: 1/2;
        height: -webkit-fill-available;
        pointer-events: none;
    }

    .page-content {
        grid-column: 1/-1;
        grid-row: 1/2;
    }
</style>
