<script lang="ts">
    import { t, locale } from "svelte-intl-precompile";
    import { page } from "$app/stores";
    import { topics, currentYear } from "../store";
    import Modal from "$lib/Modal.svelte";
    import TextSection from "../TextSection.svelte";

    // @ts-ignore
    import Water_de from "./Water_de.svx";
    // @ts-ignore
    import Water_en from "./Water_en.svx";
    // @ts-ignore
    import Cotton_de from "./Cotton_de.svx";
    // @ts-ignore
    import Cotton_en from "./Cotton_en.svx";
    // @ts-ignore
    import Politics_de from "./Politics_de.svx";
    // @ts-ignore
    import Politics_en from "./Politics_en.svx";

    // @ts-ignore
    import SeaTable_de from "./SeaTable_de.svx";
    // @ts-ignore
    import SeaTable_en from "./SeaTable_en.svx";

    import StatsProportions_de from "./StatsProportions_de.svelte";
    import StatsProportions_en from "./StatsProportions_en.svelte";

    import ImageSection from "../ImageSection.svelte";
    import Window from "$lib/Window.svelte";
    import Image from "$lib/Image.svelte";

    import SaigaAntilpoe from "$lib/media/saiga-antilope.jpg";
    import QuiltProtest from "$lib/media/Quilt-Protest.jpg";
    import QR_Code from "./QR_Code.svg";
    import QRCode from "$lib/QRCode.svelte";
    import TabBar from "$lib/TabBar.svelte";

    $currentYear = 2000;

    $topics.topicList = [
        {
            title: $t("2000.water.title_short"),
            value: "water",
        },
        {
            title: $t("2000.cotton.title_short"),
            value: "cotton",
        },
        {
            title: $t("2000.politics.title_short"),
            value: "politics",
        },
    ];

    import Stats2000_de from "./stats/2000_de.svelte";
    import Stats2005_de from "./stats/2005_de.svelte";
    import Stats2010_de from "./stats/2010_de.svelte";

    import Stats2000_en from "./stats/2000_en.svelte";
    import Stats2005_en from "./stats/2005_en.svelte";
    import Stats2010_en from "./stats/2010_en.svelte";

    let listItems = [
        {
            title: "2000",
            value: 2000,
            active: true,
        },
        {
            title: "2005",
            value: 2005,
        },
        {
            title: "2010",
            value: 2010,
        },
    ];

    let activeChart: number = 2000;

    function handleClick(event) {
        const activeItemValue = event.detail.activeItem;

        let foundElem = listItems.findIndex((elem) => {
            return elem.value == activeItemValue;
        });

        listItems.forEach((elem) => {
            elem.active = false;
        });

        listItems[foundElem].active = true;

        activeChart = listItems[foundElem].value;

        console.log(foundElem);
    }
</script>

<svelte:head>
    <title>{$t("1960.title")}</title>
    <meta name="description" content={$t("1960.title")} />
</svelte:head>
<TextSection>
    {#if $topics.currentTopic === "water"}
        {#if $locale === "de"}
            <Water_de />
        {:else if $locale === "en"}
            <Water_en />
        {/if}
    {/if}
    {#if $topics.currentTopic === "cotton"}
        {#if $locale === "de"}
            <Cotton_de />
        {:else if $locale === "en"}
            <Cotton_en />
        {/if}
    {/if}
    {#if $topics.currentTopic === "politics"}
        {#if $locale === "de"}
            <Politics_de />
        {:else if $locale === "en"}
            <Politics_en />
        {/if}
    {/if}
</TextSection>

<ImageSection>
    {#if $topics.currentTopic === "water"}
        <div
            class="second-image from-top-right-corner to-width-80 image image-transition"
        >
            <Window>
                <Image src={SaigaAntilpoe} alt={"text"} />
            </Window>
        </div>
        <div class="align-bottom margin-l-auto">
            {#if $locale === "de"}
                <SeaTable_de />
            {:else if $locale === "en"}
                <SeaTable_en />
            {/if}
        </div>
    {/if}
    {#if $topics.currentTopic === "cotton"}
        <div class="stats center-v-h">
            <Window padding transparent enableEvents>
                <div class="selectable-chart-container">
                    {#if activeChart === 2000}
                        {#if $locale === "de"}
                            <Stats2000_de />
                        {:else if $locale === "en"}
                            <Stats2000_en />
                        {/if}
                    {/if}
                    {#if activeChart === 2005}
                        {#if $locale === "de"}
                            <Stats2005_de />
                        {:else if $locale === "en"}
                            <Stats2005_en />
                        {/if}
                    {/if}
                    {#if activeChart === 2010}
                        {#if $locale === "de"}
                            <Stats2010_de />
                        {:else if $locale === "en"}
                            <Stats2010_en />
                        {/if}
                    {/if}
                    <TabBar items={listItems} on:selection={handleClick} />
                </div>
            </Window>
        </div>
    {/if}
    {#if $topics.currentTopic === "politics"}
        <div class="karakum-image to-width-80 image image-transition ">
            <Window caption={$t("2000.politics.image")}>
                <Image src={QuiltProtest} alt={$t("2000.politics.image")} />
            </Window>
        </div>

        <div
            class="margin-l-auto flex gap-xxs align-flex-end justify-self-right "
        >
            <QRCode
                url="https://www.youtube.com/watch?v=veNYrJruFLc"
                {QR_Code}
            />
        </div>
    {/if}
</ImageSection>

<style>
    .second-image {
        width: 400px;
        position: absolute;
    }

    .karakum-image {
        position: absolute;
        width: 800px;
    }

    .stats {
        position: absolute;
    }

    .selectable-chart-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
        padding: 0 24px;
    }
</style>
