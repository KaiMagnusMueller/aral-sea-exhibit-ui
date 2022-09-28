<script lang="ts">
    import { t, locale } from 'svelte-intl-precompile';
    // @ts-ignore
    import Intro_de from './Intro_de.svx';
    // @ts-ignore
    import Intro_en from './Intro_en.svx';

    import { nextStep, prevStep } from '../store';
    $prevStep = '';
    $nextStep = 'intro/step-2';
</script>

<div>
    {#if $locale === 'de'}
        <Intro_de />
    {:else if $locale === 'en'}
        <Intro_en />
    {/if}
</div>

<style>
    .table {
        grid-column: 3/4;
        grid-row: 1/2;
    }
</style>
