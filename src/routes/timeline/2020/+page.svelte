<script>
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

    // @ts-ignore
    import CottonTable_de from "./CottonTable_de.svx";
    // @ts-ignore
    import CottonTable_en from "./CottonTable_en.svx";

    import ShipDry from "$lib/media/ship-dry.jpg"

    import StatsProduction_de from "./StatsProduction_de.svelte";
    import StatsProduction_en from "./StatsProduction_en.svelte";

    import ImageSection from "../ImageSection.svelte";
    import Window from "$lib/Window.svelte";
    import Image from "$lib/Image.svelte";
    import Poster from "$lib/media/video-poster.jpg";

    import QR_Code from "./QR_Code.svg";
    import QRCode from "$lib/QRCode.svelte";

    $currentYear = 2020;

    $topics.topicList = [
        {
            title: $t("2020.water.title_short"),
            value: "water",
        },
        {
            title: $t("2020.cotton.title_short"),
            value: "cotton",
        },
        {
            title: $t("2020.politics.title_short"),
            value: "politics",
        },
    ];
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
            class="second-image caption-width-hack from-bottom-left-corner-3 to-width-80 image image-transition"
        >
            <Window caption={$t("2020.water.image")}>
                <Image src={ShipDry} alt={$t("2020.water.image")} />
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
        <div class="cotton-table center-v-h ">
            {#if $locale === "de"}
                <CottonTable_de />
            {:else if $locale === "en"}
                <CottonTable_en />
            {/if}
        </div>
    {/if}
    {#if $topics.currentTopic === "politics"}
        <div class="karakum-image">
            <Window caption={$t("2020.politics.video")}>
                {#if $locale === "de"}
                    <!-- svelte-ignore a11y-media-has-caption -->
                    <video
                        poster={Poster}
                        autoplay
                        loop
                        src="http://0.0.0.0:8080/media/WFS_Trailer_de.mp4"
                    />
                {:else if $locale === "en"}
                    <!-- svelte-ignore a11y-media-has-caption -->
                    <video
                        poster={Poster}
                        autoplay
                        loop
                        src="http://0.0.0.0:8080/media/WFS_Trailer_en.mp4"
                    />
                {/if}
            </Window>

            <div
                class="margin-l-auto flex gap-xxs align-flex-end justify-self-right "
            >
                <QRCode
                    url="https://www.youtube.com/watch?v=dbkniXaBcSA"
                    {QR_Code}
                />
            </div>
        </div>
    {/if}
</ImageSection>

<style>

.second-image {
    position: absolute;
    width: 400px;
}
    .cotton-table {
        position: absolute;
    }
    .karakum-image {
        /* position: absolute; */
        width: 100%;
    }

    video {
        width: 100%;
    }
</style>
