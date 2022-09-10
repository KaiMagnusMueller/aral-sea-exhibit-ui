<script>
    import { t, locale } from 'svelte-intl-precompile';
    import TextContent from '../components/TextContent.svelte';
    // @ts-ignore
    import Water_de from './Water_de.svx';
    // @ts-ignore
    import Water_en from './Water_en.svx';
    // @ts-ignore
    import Cotton_de from './Cotton_de.svx';
    // @ts-ignore
    import Cotton_en from './Cotton_en.svx';
    // @ts-ignore
    import Politics_de from './Politics_de.svx';
    // @ts-ignore
    import Politics_en from './Politics_en.svx';

    // import { fly } from 'svelte/transition';

    import Image from '$lib/Image.svelte';
    import Cotton_01 from '$lib/media/Cotton_01.jpg';
</script>

<svelte:head>
    <title>1970</title>
    <meta name="description" content="Aral Sea 1970" />
</svelte:head>

<div class="image-section">
    <div class="first-image">
        <Image src={Cotton_01} alt={$t('1970.water.title')} />
    </div>
</div>

<div class="text-section">
    <TextContent duration={600}>
        <div class="content">
            {#if $locale === 'de'}
                <Water_de />
                <Cotton_de />
                <Politics_de />
            {:else if $locale === 'en'}
                <Water_en />
                <Cotton_en />
                <Politics_en />
            {/if}
        </div>
    </TextContent>
</div>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }

    .first-image {
        width: 50%;
        right: 0;
        top: 80px;
        position: absolute;
        transform: rotate(2deg);
    }

    .image-section {
        position: relative;
    }
</style>
