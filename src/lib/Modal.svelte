<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { t } from 'svelte-intl-precompile';

    export let visible: boolean = true;

    import { fade, scale } from 'svelte/transition';
    import Button from './Button.svelte';

    export let header = '';
    export let submitText = $t('general.button-submit');
    export let padding = true;

    let dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('submit');
    }
</script>

{#if visible}
    <div class="modal-wrapper fullscreen ">
        <div class="modal-background fullscreen z-1000" transition:fade />
        <div class="modal-container z-1000" transition:scale={{ start: 0.95 }}>
            <div
                class="content-container aral-background-light border-radius-xxl border-l shadow-xl"
            >
                {#if header}
                    <header class="header flex flex-cross-center padding-left-sm border-bottom-l">
                        <h2 class="margin-none">{header}</h2>
                    </header>
                {/if}
                <div class="main column flex gap-xxs" class:padding-all-sm={padding}>
                    <main class="content column flex gap-xxs">
                        <slot />
                    </main>

                    <footer class="flex justify-self-right">
                        <Button label={submitText} on:click={handleClick} />
                    </footer>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal-container {
    }

    .modal-background {
        background-color: rgba(0, 0, 0, 0.4);
        pointer-events: none;
    }

    .header {
        height: 64px;
    }

    .content {
    }
</style>
