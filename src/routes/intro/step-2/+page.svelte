<script lang="ts">
    import { t, locale } from 'svelte-intl-precompile';

    import Window from '$lib/Window.svelte';
    import Image from '$lib/Image.svelte';

    import Cotton_02 from '$lib/media/Cotton_02.jpg';
    import ImageSection from '../../timeline/ImageSection.svelte';
    // @ts-ignore
    import IntroTable_de from './IntroTable_de.svx';
    // @ts-ignore
    import IntroTable_en from './IntroTable_en.svx';

    import { nextStep, prevStep } from '../store';
    $prevStep = 'intro/step-1';
    $nextStep = 'timeline/1960';
</script>

<div class="cotton-image image image-transition">
    <Window caption={$t('intro.image')}>
        <Image src={Cotton_02} alt={$t('intro.image')} />
    </Window>
</div>


    <div class="table margin-l-auto">
        {#if $locale === 'de'}
        <IntroTable_de />
        {:else if $locale === 'en'}
        <IntroTable_en />
        {/if}
    </div>

<style>
    .cotton-image {
        grid-column: 1/3;
        grid-row: 1/2;
        width: 58%;
        top: 150px;
        left: 150px;
        position: absolute;
    }

    .table {
        grid-column: 3/4;
        grid-row: 1/2;

        right: 100px;
        transform: translate(0px, 100px);
    }
</style>
