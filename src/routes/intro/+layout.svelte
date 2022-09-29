<script lang="ts">
    import { t } from 'svelte-intl-precompile';
    import { goto } from '$app/navigation';

    import { nextStep, prevStep } from './store';
    import Button from '$lib/Button.svelte';
    import LangSwitch from '$lib/LangSwitch.svelte';
    import FadeToBlack from '$lib/FadeToBlack.svelte';

    console.log('/' + $nextStep);
</script>

<header class="flex" />

<div class="content-1-2-1 row-1 grid gap-s overflow-hidden">
    <slot />
</div>

<footer class="flex justify-between gap-xxs">
    <div class="flex gap-xxs">
        <LangSwitch />

        <Button
            label={$t('general.reset')}
            on:click={() => {
                goto('/');
            }}
        />
    </div>
    <div class="flex gap-xxs">
        {#if $prevStep}
            <Button
                label={$t('intro.prev')}
                on:click={() => {
                    goto('/' + $prevStep);
                }}
            />
        {/if}
        <Button
            label={$t('intro.next')}
            on:click={() => {
                goto('/' + $nextStep);
            }}
        />
    </div>
</footer>

<FadeToBlack startBlack />

<style>
    footer {
    }
</style>
