<script lang="ts">
    import TimelineHeader from './components/TimelineHeader.svelte';

    // import PageTransition from '$lib/PageTransition.svelte';

    // /** @type {import('./$types').LayoutData} */
    // export let data: any;
</script>

<TimelineHeader />

<!-- <PageTransition pathname={data.pathname}> -->
<slot />
<!-- </PageTransition> -->
