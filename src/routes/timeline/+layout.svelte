<script lang="ts">
    import TimelineHeader from "./components/TimelineHeader.svelte";
    import LangSwitch from "$lib/LangSwitch.svelte";
    import TopicSelector from "$lib/TopicSelector.svelte";
    import Button from "$lib/Button.svelte";
    import { t, locale } from "svelte-intl-precompile";
    import { fade } from "svelte/transition";

    import question from "$lib/icons/question.svg?raw";
    // import PageTransition from '$lib/PageTransition.svelte';

    // /** @type {import('./$types').LayoutData} */
    // export let data: any;

    import BackgroundMap from "$lib/BackgroundMap/BackgroundMap.svelte";
    import { afterNavigate, beforeNavigate, goto } from "$app/navigation";
    import FadeToBlack from "$lib/FadeToBlack.svelte";

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
        console.info("DING. Timer has ended");
    }

    function clearTimer(timer: number) {
        clearTimeout(inactivityTimer);
    }

    import { currentYear, acknowledgeModelReset } from "./store";
    import Modal from "$lib/Modal.svelte";
    function handleKeydown(event: KeyboardEvent) {
        if (!$acknowledgeModelReset) {
            return;
        }

        // 1960
        if (event.key === "q" && $currentYear === 1960) {
            goto("/timeline/1970");
        }

        // 1970
        if (event.key === "1" && $currentYear === 1970) {
            goto("/timeline/1960");
        }
        if (event.key === "w" && $currentYear === 1970) {
            goto("/timeline/1980");
        }

        // 1980
        if (event.key === "2" && $currentYear === 1980) {
            goto("/timeline/1970");
        }
        if (event.key === "e" && $currentYear === 1980) {
            goto("/timeline/1990");
        }

        // 1990
        if (event.key === "3" && $currentYear === 1990) {
            goto("/timeline/1980");
        }
        if (event.key === "r" && $currentYear === 1990) {
            goto("/timeline/2000");
        }

        // 2000
        if (event.key === "4" && $currentYear === 2000) {
            goto("/timeline/1990");
        }
        if (event.key === "t" && $currentYear === 2000) {
            goto("/timeline/2010");
        }

        // 2010
        if (event.key === "5" && $currentYear === 2010) {
            goto("/timeline/2000");
        }
        if (event.key === "y" && $currentYear === 2010) {
            goto("/timeline/2020");
        }

        // 2020
        if (event.key === "6" && $currentYear === 2020) {
            goto("/timeline/2010");
        }
    }

    let modalVisible = false;

    import QRKM from "./qr_code_km.svg";
    import QRMartin from "./qr_code_martin.svg";
    import Invader from "./invader.svelte";
    import Image from "$lib/Image.svelte";

    // @ts-ignore
    import About_de from "./about_de.svx";
    // @ts-ignore
    import About_en from "./about_en.svx";
</script>

<svelte:window on:keydown={handleKeydown} />
<Modal
    visible={modalVisible}
    on:submit={() => {
        modalVisible = !modalVisible;
    }}
    submitText={$t("about.submit")}
>
<div class="about-wrapper flex">

    <div class="left-section">
        <p class="about-header">{$t("about.project-by")}</p>
        
        <div class="author flex">
            <div class="author-name flex column">
                <h1>Kai Magnus Müller</h1>
                <p href="https://www.kaimagnus.de">www.kaimagnus.de</p>
            </div>
            <div class="qr-code-small">
                <Image src={QRKM} />
            </div>
        </div>
        
        <div class="author flex">
            <div class="author-name flex column">
                <h1>Martin Wehl</h1>
                <p href="https://www.instagram.com/martinwehl/"
                >www.instagram.com/martinwehl/</p
                >
            </div>
            <div class="qr-code-small">
                <Image src={QRMartin} />
            </div>
        </div>
        
        <div class="about-text-slim padding-t-m">

            {#if $locale === "de"}
            <About_de />
            {:else if $locale === "en"}
            <About_en />
            {/if}
        </div>
    </div>

</div>
</Modal>

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

<footer class="flex justify-between gap-xxs">
    <div class="left flex gap-xxs">

        <LangSwitch />
        <Button
        label={$t("general.reset")}
        on:click={() => {
            goto("/");
        }}
    />
    
</div>
<div class="center-helper">
    <TopicSelector />
</div>
    <Button
    iconName={question}
    on:click={() => {
        console.log("Open about modal");
        modalVisible = !modalVisible;
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

    .about-header {
        margin-top: 0;
    }

    .author {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 48px;
        align-items: center;

    }

    .author:first-of-type {
        margin-bottom: 12px;
    }

    .author h1 {
        margin: 4px 0;
    }

    .author p {
        margin: 0;
    }

    .left-section {
    }

    .about-text-slim {
        max-width: 420px;
    }
</style>
