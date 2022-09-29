<script lang="ts">
    import TimelineHeader from './components/TimelineHeader.svelte';
    import LangSwitch from '$lib/LangSwitch.svelte';
    import TopicSelector from '$lib/TopicSelector.svelte';
    import Button from '$lib/Button.svelte';
    import { t } from 'svelte-intl-precompile';
    import { fade } from 'svelte/transition';

    import question from '$lib/icons/question.svg?raw';
    // import PageTransition from '$lib/PageTransition.svelte';

    // /** @type {import('./$types').LayoutData} */
    // export let data: any;

    import BackgroundMap from '$lib/BackgroundMap/BackgroundMap.svelte';
    import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
    import FadeToBlack from '$lib/FadeToBlack.svelte';

    afterNavigate(() => {
        // console.log('mount timeline page');
        setInactivityTimer();
    });

    beforeNavigate(() => {
        clearTimer(inactivityTimer);
        // console.log('before navigate');
    });

    let inactivityTimer: any = null;
    let inactivityDelayTime: number = 2000;

    function setInactivityTimer() {
        inactivityTimer = setTimeout(onTimerEnd, inactivityDelayTime);
        // console.log('timer started end timer in ' + inactivityDelayTime + ' milliseconds');
    }

    function onTimerEnd() {
        console.info('DING. Timer has ended');
    }

    function clearTimer(timer: number) {
        clearTimeout(inactivityTimer);
    }

    let acknowledgeModelReset: boolean = false;

    import { currentYear } from './store';
    function handleKeydown(event: KeyboardEvent) {
        if (!acknowledgeModelReset) {
            return;
        }

        console.log(event.key);

        // 1960
        if (event.key === 'q' && $currentYear === 1960) {
            goto('/timeline/1970');
        }

        // 1970
        if (event.key === '1' && $currentYear === 1970) {
            goto('/timeline/1960');
        }
        if (event.key === 'w' && $currentYear === 1970) {
            goto('/timeline/1980');
        }

        // 1980
        if (event.key === '2' && $currentYear === 1980) {
            goto('/timeline/1970');
        }
        if (event.key === 'e' && $currentYear === 1980) {
            goto('/timeline/1990');
        }

        // 1990
        if (event.key === '3' && $currentYear === 1990) {
            goto('/timeline/1980');
        }
        if (event.key === 'r' && $currentYear === 1990) {
            goto('/timeline/2000');
        }

        // 2000
        if (event.key === '4' && $currentYear === 2000) {
            goto('/timeline/1990');
        }
        if (event.key === 't' && $currentYear === 2010) {
            goto('/timeline/2010');
        }

        // 2010
        if (event.key === '5' && $currentYear === 2000) {
            goto('/timeline/2000');
        }
        if (event.key === 'z' && $currentYear === 2010) {
            goto('/timeline/2020');
        }

        // 2020
        if (event.key === '6' && $currentYear === 2010) {
            goto('/timeline/2010');
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

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
    <Button
        label={$t('general.reset')}
        on:click={() => {
            goto('/');
        }}
    />
</footer>

<FadeToBlack startBlack />

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
