<script lang="ts">
    import { onMount } from 'svelte';

    export let TextSource = '';

    let Text;
    onMount(async () => {
        Text = import('./' + TextSource + '.svx');
    });
</script>
