<script lang="ts">
    import TimelineHeader from './components/TimelineHeader.svelte';

    // import PageTransition from '$lib/PageTransition.svelte';

    // /** @type {import('./$types').LayoutData} */
    // export let data: any;
</script>

<TimelineHeader />

<div class="content-container grid col-2 gap-m">
    <!-- <PageTransition pathname={data.pathname}> -->
    <slot />
    <!-- </PageTransition> -->
</div>

<style>
    .content-container {
    }
</style>
